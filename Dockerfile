# Single-image Dockerfile for Laravel + Inertia/Vue on Railway.
# Bypasses Nixpacks/Railpack auto-detection so we control exactly what runs.

FROM php:8.2-cli-bookworm

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

# 6. Copy everything else (incl. submodules' contents, already checked out by Railway)
COPY . .

# 7. Finish composer (regenerate autoload with all source present)
RUN composer dump-autoload --optimize --classmap-authoritative

# 8. Build frontend assets
RUN if [ -f yarn.lock ]; then yarn build; else npm run build; fi

# 9. Permissions for Laravel storage + cache
RUN mkdir -p storage/framework/{cache,sessions,views} storage/logs bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# 10. Expose port — Railway sets $PORT at runtime
EXPOSE 8080

# 11. Start: run migrations, link storage, cache, then start PHP built-in server.
#    Bind to 0.0.0.0:$PORT so Railway's edge can reach us.
CMD php artisan migrate --force \
    && php artisan storage:link || true \
    && php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache \
    && php -S 0.0.0.0:${PORT:-8080} -t public public/index.php
