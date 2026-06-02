# Single-image Dockerfile for Laravel + Inertia/Vue on Railway.
# Bypasses Nixpacks/Railpack auto-detection so we control exactly what runs.

FROM php:8.4-cli-bookworm

# 1. System deps + PHP extensions
RUN apt-get update && apt-get install -y --no-install-recommends \
    git unzip zip curl ca-certificates \
    libzip-dev libonig-dev libxml2-dev libpng-dev libjpeg-dev libfreetype6-dev libicu-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) pdo_mysql mbstring exif pcntl bcmath gd zip intl opcache \
    && rm -rf /var/lib/apt/lists/*

# 2. Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 3. Node 20 + Yarn (for vite build)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g yarn \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 4. Install PHP deps (cache layer — only re-runs if composer.* change)
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --prefer-dist --no-interaction --no-progress

# 5. Install Node deps (cache layer)
COPY package.json yarn.lock* package-lock.json* ./
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; fi

# 6. Copy everything else (incl. submodules' contents if Railway populated them)
COPY . .

# 6b. Submodule safety net.
#     Railway's GitHub App SHOULD checkout submodules, but in practice the build
#     context often arrives with empty Modules/Employee + Modules/School dirs.
#     If that happened, refetch via https + GITHUB_TOKEN (PAT with repo scope,
#     set in Railway's Variables tab).
ARG GITHUB_TOKEN
RUN if [ ! -f Modules/Employee/resources/js/Components/Widgets/index.ts ] \
    || [ ! -f Modules/School/resources/js/Components/Widgets/index.ts ]; then \
        echo ">>> Submodules empty — Railway didn't populate them. Refetching."; \
        if [ -z "$GITHUB_TOKEN" ]; then \
            echo "!!! ERROR: submodule contents missing AND GITHUB_TOKEN build arg is not set."; \
            echo "!!! Set GITHUB_TOKEN in Railway Variables (PAT with 'repo' scope on the two submodule repos)."; \
            exit 1; \
        fi; \
        rm -rf Modules/Employee Modules/School; \
        git clone --depth=1 "https://${GITHUB_TOKEN}@github.com/24lyhour/Modules-HrSystem-Employee.git" Modules/Employee; \
        git clone --depth=1 "https://${GITHUB_TOKEN}@github.com/24lyhour/Modules-HrSystem-School.git" Modules/School; \
        rm -rf Modules/Employee/.git Modules/School/.git; \
        echo ">>> Submodules refetched."; \
    else \
        echo ">>> Submodules already populated by Railway."; \
    fi

# 7. Finish composer (regenerate autoload with all source present)
RUN composer dump-autoload --optimize --classmap-authoritative

# 8. Build frontend assets
#    NODE_OPTIONS bumps Node's heap to 4GB so Vite doesn't OOM on Railway's
#    container during the bundle phase (562 vendored module files = bigger graph).
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN if [ -f yarn.lock ]; then yarn build; else npm run build; fi

# 9. Permissions for Laravel storage + cache
RUN mkdir -p storage/framework/{cache,sessions,views} storage/logs bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# 10. Expose port — Railway sets $PORT at runtime
EXPOSE 8080

# 11. Start: run migrations + caches, then always start PHP built-in server.
#    Uses ';' between artisan calls so a single failure (e.g. migrate against an
#    unready DB) doesn't prevent the web server from starting — we want the
#    container to come up, healthcheck to pass on /up, and errors to be debuggable
#    in `railway logs` instead of a silent restart loop.
CMD ["bash", "-c", "php artisan migrate --force; php artisan storage:link; php artisan config:cache; php artisan route:cache; php artisan view:cache; exec php -S 0.0.0.0:${PORT:-8080} -t public server.php"]
