# Deployment Flow — hrSystem on Railway

How `hrSystem` (Laravel 12 + Inertia/Vue) gets from a `git push` to a running container on Railway.

> **Current model (since 2026-06-13):** the two domain modules are **vendored** (committed directly into this repo), the build uses a **single Dockerfile**, and **no `GITHUB_TOKEN` is required**. This replaced the older git-submodule + token-clone setup that kept breaking Railway builds (expired token → `403` → empty module folders). See [§7 History](#7-history--why-it-works-this-way).

---

## 1. The flow at a glance

```
┌─────────────────────┐     git push origin main      ┌──────────────────────┐
│  Local machine      │ ─────────────────────────────▶│  GitHub               │
│  (commit changes)   │                                │  24lyhour/            │
└─────────────────────┘                                │  Modules-HrSystem     │
                                                        └──────────┬───────────┘
                                                                   │ webhook (auto-deploy)
                                                                   ▼
                                       ┌────────────────────────────────────────────┐
                                       │  Railway — service "Modules-HrSystem"        │
                                       │  project: athletic-laughter / production     │
                                       ├────────────────────────────────────────────┤
                                       │  BUILD   → Dockerfile (see §3)               │
                                       │  BOOT    → migrate + cache + start (see §4)  │
                                       │  HEALTH  → GET /up must return 200 (§5)      │
                                       └────────────────────────────────────────────┘
```

**Trigger:** every push to `main` auto-deploys. There is no manual step — Railway's GitHub
integration receives the webhook and starts a new build.

---

## 2. What deploys (and what doesn't)

Because the modules are **vendored**, the entire application source — including
`Modules/Employee` and `Modules/School` — lives in this one repo. The build context is
complete on `git clone`; nothing private needs fetching.

| In the repo (deploys) | Ignored (rebuilt in-container) |
|---|---|
| `app/`, `Modules/Employee`, `Modules/School`, `resources/`, `routes/`, `config/`, `database/` | `vendor/` (composer install) |
| `Dockerfile`, `railway.json`, `composer.*`, `package.json`, `yarn.lock` | `node_modules/` (yarn install) |
| `.railway/release.sh` | `public/build/` (vite build) |

---

## 3. Build — the Dockerfile

Railway is told to use the Dockerfile via [`railway.json`](../railway.json):

```json
"build": { "builder": "DOCKERFILE", "dockerfilePath": "Dockerfile" }
```

[`Dockerfile`](../Dockerfile) stages, in order:

| # | Stage | Notes |
|---|---|---|
| 1 | System deps + PHP 8.4 extensions | `pdo_mysql`, `gd`, `intl`, `opcache`, … |
| 2 | Composer binary | copied from `composer:latest` |
| 3 | Node 20 + Yarn | for the Vite build |
| 4 | `composer install` (no-dev) | cache layer — only re-runs when `composer.*` change |
| 5 | `yarn install --frozen-lockfile` | cache layer — only re-runs when `yarn.lock` changes |
| 6 | `COPY . .` | brings in **all** source, incl. the vendored modules |
| 7 | `composer dump-autoload --optimize` | autoload now sees module classes |
| 8 | `yarn build` (Vite) | `NODE_OPTIONS=--max-old-space-size=4096` so it doesn't OOM |
| 9 | storage / cache permissions | |
| 10 | `EXPOSE 8080` | Railway injects real `$PORT` at runtime |
| 11 | `CMD` | boot sequence — see §4 |

> 🔑 There is **no submodule clone step and no `ARG GITHUB_TOKEN`**. If you ever see those
> in the Dockerfile again, the repo has regressed to submodules — see [§7](#7-history--why-it-works-this-way).

---

## 4. Boot — migrations, caches, server

The container's start command (`CMD` in the Dockerfile) runs every time the container starts:

```bash
php artisan migrate --force; \
php artisan db:seed --class=RolesAndPermissionsSeeder --force; \
php artisan db:seed --class=UserSeeder --force; \
php artisan storage:link; \
php artisan config:cache; \
php artisan route:cache; \
php artisan view:cache; \
exec php -S 0.0.0.0:${PORT:-8080} -t public server.php
```

- Commands are separated by `;` (not `&&`) **on purpose**: if `migrate` fails against a
  not-yet-ready DB, the web server still starts so the container comes up and errors are
  visible in `railway logs` instead of a silent restart loop.
- `migrate --force` is what applies new migrations on deploy (e.g. `id_cards`, `certificates`,
  `position` columns ship automatically).
- **Seeders run on every boot (idempotent):**
  - `RolesAndPermissionsSeeder` — creates the roles `super-admin, admin, manager, staff,
    employee, viewer` and their permissions. **Required for access** — the app's `super-admin`
    gate (`hasRole('super-admin')`) fails if this never ran, which locks everyone out.
  - `UserSeeder` — `updateOrCreate`s the bootstrap admin `kouchlyhour@gmail.com` and assigns it
    `super-admin`. ⚠️ It **re-asserts the password every deploy** (see the seeder). Once you have
    stable real accounts, change the credential in `database/seeders/UserSeeder.php` or remove
    this line from the boot command so deploys stop resetting it.

### Optional: `.railway/release.sh`
[`.railway/release.sh`](../.railway/release.sh) is a richer, idempotent release script
(migrate + seed roles/permissions + cache rebuild). It's **not wired into the Dockerfile CMD**
by default — use it if you configure a Railway "release command". The inline `CMD` above is the
authoritative boot path today.

---

## 5. Health check

[`railway.json`](../railway.json):

```json
"deploy": {
  "healthcheckPath": "/up",
  "healthcheckTimeout": 100,
  "restartPolicyType": "ON_FAILURE",
  "restartPolicyMaxRetries": 3
}
```

Laravel's built-in `/up` endpoint must return `200` within 100s or the deploy is marked
unhealthy. On failure Railway restarts up to 3 times.

---

## 6. Environment variables

Set these in Railway → service → **Variables** (template: [`.env.railway.example`](../.env.railway.example)):

| Var | Value |
|---|---|
| `APP_KEY` | `base64:…` (generate with `php artisan key:generate --show`) |
| `APP_ENV` | `production` |
| `APP_URL` | your domain (e.g. `https://hrsite.online`) |
| `DB_CONNECTION` | `mysql` (or `pgsql`) |
| `DB_HOST` / `DB_PORT` / `DB_DATABASE` / `DB_USERNAME` / `DB_PASSWORD` | reference the Railway DB service, e.g. `${{ MySQL.MYSQLHOST }}` |

> ❌ **`GITHUB_TOKEN` is no longer needed** and should be removed. It was only used by the old
> submodule-clone step, which no longer exists. Any token previously stored there was exposed in
> build logs — **revoke it on GitHub.**

---

## 7. History — why it works this way

The two modules have flip-flopped between **submodules** and **vendored**:

| Date | State | Reason |
|---|---|---|
| original | submodules | separate Source Control per module |
| 2026-06-02 | vendored | escape Railway submodule-auth pain |
| 2026-06-08 | submodules | wanted separate repo visibility again |
| **2026-06-13** | **vendored** | token kept expiring → `403` clone failures, and the token was **leaked in build logs**; vendoring removes the token entirely |

**The core problem with submodules on Railway:** the main repo only stored *pointers* to two
**private** repos. Railway's build had no git credentials, so the Dockerfile cloned them over
HTTPS using `GITHUB_TOKEN`. That token (a) expired/got revoked → `403 could not read Username`,
and (b) was printed verbatim in build logs because the clone command was echoed. Vendoring makes
the module source part of this repo, so the build needs nothing private — no token, no clone, no leak.

**Trade-off accepted:** `Modules/Employee` and `Modules/School` no longer appear as separate
repositories in Source Control. They are plain folders committed here.

### If you ever need to go back to submodules
You'd re-add them with `git submodule add`, restore the token-clone block in the Dockerfile, and
keep a fine-grained PAT (Contents:Read on **both** module repos) fresh in Railway. Given the
recurring pain, prefer staying vendored unless separate repos are a hard requirement.

---

## 8. Deploying — the everyday steps

```bash
# 1. make changes, commit
git add -A
git commit -m "feat: ..."

# 2. push — this is the deploy
git push origin main          # Railway auto-builds the new commit
```

That's it. Watch **Railway → service → Deployments → Build Logs**. A healthy build shows:

```
[build]  COPY . .  →  composer  →  yarn build  →  ✓ built
[boot]   migrate --force  →  storage:link  →  config/route/view:cache  →  php -S ...
[health] GET /up → 200
```

### Manual redeploy (rarely needed)
If a push didn't trigger, or you want to rebuild the same commit:

```bash
railway redeploy --yes        # redeploys the latest deployment
```

> If `railway redeploy` replies *"cannot be redeployed … currently building"*, a deploy is
> **already in progress** — just watch the logs.
> Avoid `railway up` here: it uploads the local working dir (and trips on local socket files);
> the GitHub push is the canonical trigger for this service.

---

## 9. Troubleshooting

| Symptom in build/deploy logs | Cause | Fix |
|---|---|---|
| `Submodules empty - refetching` / `clone failed (403)` / `could not read Username` | Repo regressed to submodules | Re-vendor the modules; remove the clone block from the Dockerfile |
| `could not find driver` (PDO) | DB extension/`DB_CONNECTION` mismatch | Ensure `pdo_mysql`/`pdo_pgsql` installed (they are in Dockerfile) and `DB_CONNECTION` matches the DB service |
| Vite `JavaScript heap out of memory` | Bundle too big for default heap | Already mitigated via `NODE_OPTIONS=--max-old-space-size=4096`; raise if needed |
| Health check fails on `/up` | App boot error (often DB/env) | `railway logs` — check `APP_KEY`, DB vars; container still starts by design so logs are readable |
| Migrations didn't run | `migrate` failed silently at boot | Check `railway logs` for the `migrate --force` output; fix DB connectivity and redeploy |

---

_Last updated: 2026-06-13 — vendored modules, Dockerfile build, no `GITHUB_TOKEN`._
