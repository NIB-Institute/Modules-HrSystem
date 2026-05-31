# Procfile for Railway-style platforms that respect it (some use nixpacks.toml only).
# Railway primarily reads the nixpacks.toml `[start]` block; Procfile is included
# here for parity with Heroku-style deploys (Forge, fly.io, etc.).

web: php artisan migrate --force && php artisan config:cache && php artisan serve --host=0.0.0.0 --port=$PORT
worker: php artisan queue:work --tries=3 --max-time=3600 --sleep=3
scheduler: while [ true ]; do php artisan schedule:run --verbose --no-interaction & sleep 60; done
