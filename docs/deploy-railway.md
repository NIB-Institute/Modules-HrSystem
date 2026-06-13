# Deploying hrSystem to Railway

> ⚠️ **PARTLY OUTDATED as of 2026-06-13.** This guide assumes **submodules + nixpacks**. The repo
> now uses **vendored modules + a Dockerfile** and needs **no `GITHUB_TOKEN`**. For the current
> build/boot/deploy flow read [deployment-flow.md](deployment-flow.md) first; use the steps below
> only for one-time Railway project / DB / env-var setup.

Step-by-step guide for the first deploy of `hrSystem` (Laravel 12 + Inertia + Vue) to Railway. Designed for the **brand-new Railway project** scenario with **two private GitHub submodules** (`Modules-HrSystem-Employee` and `Modules-HrSystem-School`).

If you're redeploying an already-set-up project, skip to **Step 8 — Trigger the first deploy**.

---

## What's already prepared in this repo

| File | Purpose |
|---|---|
| `nixpacks.toml` | Railway build recipe (PHP 8.2 + Node 20 + composer + yarn build + caches) |
| `Procfile` | Process definitions (web / worker / scheduler) — used by some platforms; Railway primarily reads `nixpacks.toml` |
| `.railway/release.sh` | Runs migrations + cache refresh on every deploy (idempotent) |
| `.env.railway.example` | Template of every env var Railway needs |

---

## Step 1 — Create the Railway project

Already done — your project URL is:
`https://railway.com/project/<your-project-id>`

If starting fresh:
1. Go to https://railway.com → **New Project**
2. Pick **Empty Project** (we'll connect GitHub next)

---

## Step 2 — Add the MySQL database

Inside your Railway project:

1. Click **+ New** → **Database** → **Add MySQL**.
2. Wait ~30 seconds for it to spin up.
3. Click the MySQL service → **Variables** tab. You'll see `MYSQLHOST`, `MYSQLPORT`, `MYSQLDATABASE`, `MYSQLUSER`, `MYSQLPASSWORD` — these will be referenced from your web service env.

> 💡 If you'd rather use Postgres later, swap to `DB_CONNECTION=pgsql` and reference `${{ Postgres.PGHOST }}` style vars instead.

---

## Step 3 — Set up the SSH Deploy Key for private submodules

Railway's build environment needs to be able to clone the **private** `Modules-HrSystem-Employee` and `Modules-HrSystem-School` submodules at build time. The standard way: a single SSH key added as a **deploy key** to each submodule repo.

### 3a. Generate an SSH key locally

```bash
ssh-keygen -t ed25519 -f ~/.ssh/hrSystem_railway_deploy -C "railway-deploy@hrSystem" -N ""
```

This creates two files:
- `~/.ssh/hrSystem_railway_deploy` (private key — goes to Railway)
- `~/.ssh/hrSystem_railway_deploy.pub` (public key — goes to GitHub)

### 3b. Add the PUBLIC key as a Deploy Key to BOTH submodule repos

On GitHub:

1. Open https://github.com/24lyhour/Modules-HrSystem-Employee/settings/keys
2. Click **Add deploy key**
3. Title: `Railway` · Key: paste the contents of `~/.ssh/hrSystem_railway_deploy.pub` · **leave "Allow write access" UNCHECKED**
4. Save.
5. Repeat for: https://github.com/24lyhour/Modules-HrSystem-School/settings/keys

### 3c. Add the PRIVATE key as a Railway env var

1. On Railway → your web service → **Variables** tab → **+ New Variable**.
2. Name: `GIT_SSH_KEY`
3. Value: paste the entire contents of `~/.ssh/hrSystem_railway_deploy` (including the `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----` lines).

> ⚠️ Railway will redact this value in logs. Never paste it anywhere else.

### 3d. Convert .gitmodules URLs from HTTPS to SSH

Edit `.gitmodules` at the repo root and change both `url =` lines from:

```ini
url = https://github.com/24lyhour/Modules-HrSystem-Employee.git
url = https://github.com/24lyhour/Modules-HrSystem-School.git
```

to:

```ini
url = git@github.com:24lyhour/Modules-HrSystem-Employee.git
url = git@github.com:24lyhour/Modules-HrSystem-School.git
```

Then sync the local submodule remote:

```bash
git submodule sync
```

Commit and push:

```bash
git add .gitmodules
git commit -m "deploy: switch submodule URLs to SSH for Railway deploy key"
git push origin main
```

### 3e. Tell Nixpacks to use the SSH key during clone

Add this to the **TOP** of `nixpacks.toml` (above `[phases.setup]`):

```toml
[variables]
NIXPACKS_SECRET_GIT_SSH_KEY = "GIT_SSH_KEY"
```

And add an SSH setup step. Easiest: a pre-install script. I'll leave this as a follow-up if the first deploy fails on submodule clone — Railway often has a smoother path via their GitHub App.

> 🔄 **Easier alternative**: if you're OK with it, **make both submodule repos public on GitHub** (Settings → Danger Zone → Change visibility). Then Railway clones them with no auth needed and you can skip Steps 3a–3e entirely.

---

## Step 4 — Connect this GitHub repo to Railway

1. In your Railway project → click the **+ New** button → **GitHub Repo**.
2. Authorize Railway's GitHub App if you haven't.
3. Pick **24lyhour/Modules-HrSystem**.
4. Railway auto-detects the parent repo. **Important**: check "Include submodules" if the option appears (Railway will use the GitHub App's permissions to clone them).

---

## Step 5 — Set environment variables

Open your web service → **Variables** tab → click **Raw Editor** (top right) → paste this:

```dotenv
APP_NAME=hrSystem
APP_ENV=production
APP_DEBUG=false
APP_URL=https://${{ RAILWAY_PUBLIC_DOMAIN }}
APP_LOCALE=en
APP_FALLBACK_LOCALE=en

DB_CONNECTION=mysql
DB_HOST=${{ MySQL.MYSQLHOST }}
DB_PORT=${{ MySQL.MYSQLPORT }}
DB_DATABASE=${{ MySQL.MYSQLDATABASE }}
DB_USERNAME=${{ MySQL.MYSQLUSER }}
DB_PASSWORD=${{ MySQL.MYSQLPASSWORD }}

CACHE_STORE=database
SESSION_DRIVER=database
SESSION_LIFETIME=120
QUEUE_CONNECTION=database
FILESYSTEM_DISK=public

LOG_CHANNEL=stack
LOG_LEVEL=info
BROADCAST_CONNECTION=log

MAIL_MAILER=log

TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN_HERE
TELEGRAM_CHAT_ID=
```

Then **generate `APP_KEY`**:

```bash
# Run this locally
php artisan key:generate --show
```

Copy the output (looks like `base64:abc123...`) and paste it as the value for `APP_KEY` in Railway.

---

## Step 6 — Configure the start command

Railway should auto-detect `nixpacks.toml` and use its `[start]` block. If not:

In your web service → **Settings** → **Deploy** → **Custom Start Command**, paste:

```bash
bash .railway/release.sh && php artisan serve --host=0.0.0.0 --port=$PORT
```

The `release.sh` script runs migrations + seeders + cache rebuild on every deploy.

---

## Step 7 — Expose the public URL

1. Web service → **Settings** → **Networking** → **Generate Domain**.
2. Railway assigns something like `hrsystem-production.up.railway.app`.
3. **Important**: go back to **Variables**, update `APP_URL` to this URL (or use `${{ RAILWAY_PUBLIC_DOMAIN }}` as shown in Step 5).

---

## Step 8 — Trigger the first deploy

Railway auto-deploys on every push to the default branch. To trigger manually:

- Web service → **Deployments** tab → **Deploy Latest**

Watch the build log. You should see:

1. `composer install --no-dev ...` ← if this errors on submodule clone, redo Step 3
2. `yarn install --frozen-lockfile`
3. `yarn build` ← outputs the JS/CSS bundles
4. `php artisan migrate --force` ← creates all tables
5. `php artisan config:cache` etc.
6. `php artisan serve --host=0.0.0.0 --port=$PORT` ← server up

When you see `Server running on [http://0.0.0.0:$PORT]`, open the public URL in your browser.

---

## Step 9 — Add a worker service (for the queue)

The plan reminders + on-assignment Telegram alerts are queued jobs. Without a worker, they sit forever.

1. Railway project → **+ New** → **Empty Service**.
2. Connect the SAME GitHub repo.
3. **Settings** → **Deploy** → **Custom Start Command**:
   ```bash
   php artisan queue:work --tries=3 --max-time=3600 --sleep=3
   ```
4. **Variables** → click **Add Variable Reference** → select all the same vars as the web service (`APP_*`, `DB_*`, `TELEGRAM_*`, `QUEUE_CONNECTION`, `FILESYSTEM_DISK`).

---

## Step 10 — Add a scheduler service (for hourly Telegram reminders)

The countdown reminders need `php artisan schedule:run` to fire every minute.

1. Railway project → **+ New** → **Cron Schedule** (if Railway has it as a service type) — OR another Empty Service:
2. **Custom Start Command**:
   ```bash
   while [ true ]; do php artisan schedule:run --no-interaction --verbose; sleep 60; done
   ```
3. Same variable references as the worker.

---

## Step 11 — Verify the deploy

Visit your public URL:

- ✅ Dashboard loads without errors
- ✅ Login with seeded super-admin user
- ✅ Sidebar shows Employees → Documents, Plans, etc.
- ✅ Try uploading a small document — see it in the list
- ✅ Logs panel in Railway shows requests being served

---

## Common gotchas

| Symptom | Fix |
|---|---|
| `composer install` fails: `Failed to clone Modules/Employee` | Step 3 not done correctly. Re-check SSH key on submodule repo, or make submodule public. |
| `php artisan migrate` fails: `SQLSTATE[HY000] [2002] Connection refused` | DB env vars wrong. Use the `${{ MySQL.MYSQLHOST }}` syntax in Railway, not literal values. Also verify the MySQL service is in the SAME Railway project. |
| First request → 500 error | Check the Logs tab. Most common: missing `APP_KEY` (re-run `php artisan key:generate --show` locally and paste into Railway). |
| Uploaded files disappear after a deploy | Railway's filesystem is ephemeral. Switch to R2/S3 — see "Storage migration" below. |
| Telegram alerts not firing in prod | Verify the **worker service** (Step 9) is running. Check its logs for queued jobs being processed. |
| Schedule never runs | Verify the **scheduler service** (Step 10) is running. Or use Railway's native Cron feature if available. |
| Logs flooded with `cache_clear` | Remove `cache:clear` from `release.sh` after the first successful deploy — only needed if env vars change. |

---

## Storage migration (when ready)

Local disk works for testing but files vanish on every Railway deploy because the container's filesystem is reset. To fix:

1. Create a **Cloudflare R2** bucket (free, S3-compatible).
2. Generate an R2 API token (Read+Write on the bucket).
3. In Railway env vars, add the AWS-prefixed vars from the bottom of `.env.railway.example`.
4. Change `FILESYSTEM_DISK=public` → `FILESYSTEM_DISK=s3`.
5. Redeploy.

No code changes needed — Laravel's `Storage::disk('public')` calls in our code still work because the `public` disk config is unaffected. We'd separately update `CreateDocumentAction` to use the default disk (`$file->store('employee/documents')` without the `'public'` arg) to make it env-driven. Quick follow-up.

---

## Quick reference: which file does what

```
nixpacks.toml          → Railway build recipe (auto-used)
Procfile               → process types (Heroku/Forge compatibility)
.railway/release.sh    → migrations + cache refresh on each deploy
.env.railway.example   → env var template
.gitmodules            → submodule URLs (HTTPS → SSH for Railway)
docs/deploy-railway.md → this file
```
