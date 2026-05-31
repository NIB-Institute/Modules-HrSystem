#!/usr/bin/env bash
# Release script — runs ONCE per Railway deploy AFTER build, BEFORE start.
# Configure Railway to call this via the deploy "release command":
#   bash .railway/release.sh
# (Or run these commands inline in the Railway deploy settings.)
#
# Safe to re-run: every command is idempotent.

set -euo pipefail

echo "==> [release] migrate"
php artisan migrate --force

echo "==> [release] seed roles & permissions (idempotent)"
php artisan db:seed --class=RolesAndPermissionsSeeder --force || echo "  (seeder failed or already up-to-date, continuing)"

echo "==> [release] storage:link"
php artisan storage:link || true   # idempotent; OK if already linked

echo "==> [release] cache clear (env may have changed)"
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan cache:clear || true

echo "==> [release] cache rebuild (with new env)"
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "==> [release] DONE"
