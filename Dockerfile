# syntax=docker/dockerfile:1.4
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
#     Uses BuildKit secrets (--mount=type=secret) so the token NEVER appears
#     in build logs, even on failure. The token is mounted as a file at
#     /run/secrets/github_token and read into a shell variable inline.
#
#     Railway side: in Variables tab, the variable named GITHUB_TOKEN must
#     be marked as a "Build Secret" (or Railway must expose Variables as
#     buildtime secrets automatically). If not available, fallback ARG is
#     also supported below.
ARG GITHUB_TOKEN
RUN --mount=type=secret,id=github_token \
    set -e; \
    if [ ! -f Modules/Employee/resources/js/Components/Widgets/index.ts ] \
       || [ ! -f Modules/School/resources/js/Components/Widgets/index.ts ]; then \
        echo ">>> Submodules empty - refetching via HTTPS"; \
        if [ -f /run/secrets/github_token ]; then \
            TOKEN=$(cat /run/secrets/github_token); \
        else \
            TOKEN="$GITHUB_TOKEN"; \
        fi; \
        if [ -z "$TOKEN" ]; then \
            echo "!!! ERROR: no token available. Set GITHUB_TOKEN in Railway Variables (fine-grained PAT, Contents:Read on the 2 submodule repos)."; \
            exit 1; \
        fi; \
        rm -rf Modules/Employee Modules/School; \
        git -c "http.extraHeader=Authorization: Bearer ${TOKEN}" \
            clone --depth=1 --quiet \
            "https://github.com/24lyhour/Modules-HrSystem-Employee.git" Modules/Employee \
            >/dev/null 2>/tmp/clone_err_emp \
            || { echo "!!! Employee clone failed (token permissions wrong? 403/401?)"; grep -iv 'token\|password\|bearer' /tmp/clone_err_emp || true; exit 1; }; \
        git -c "http.extraHeader=Authorization: Bearer ${TOKEN}" \
            clone --depth=1 --quiet \
            "https://github.com/24lyhour/Modules-HrSystem-School.git" Modules/School \
            >/dev/null 2>/tmp/clone_err_sch \
            || { echo "!!! School clone failed (token permissions wrong? 403/401?)"; grep -iv 'token\|password\|bearer' /tmp/clone_err_sch || true; exit 1; }; \
        unset TOKEN; \
        rm -rf Modules/Employee/.git Modules/School/.git /tmp/clone_err_*; \
        echo ">>> Submodules refetched OK"; \
    else \
        echo ">>> Submodules already populated by Railway"; \
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
