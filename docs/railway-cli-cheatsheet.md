# Railway CLI cheatsheet — hrSystem

Quick reference for connecting your local Mac to the running production container on Railway. Once you've done the one-time setup, day-to-day SSH access is two commands.

---

## 1. One-time setup

### 1.1 Install the CLI

```bash
brew install railway
```

Verify:

```bash
railway --version
# expect: railway 4.x.x
```

### 1.2 Log in

```bash
railway login
```

A browser tab opens → click **Authorize** → return to terminal. Verify:

```bash
railway whoami
# expect: your email
```

### 1.3 Link this repo to the Railway project

From the project root on your Mac:

```bash
cd ~/Documents/Dev/portfolio_projects/backends_portfolios/hrSystem
railway link --project f2e6b454-813b-4bc7-a81a-852ef880a97d
railway service Modules-HrSystem
```

Confirm:

```bash
railway status
# expect:
#   Project: athletic-laughter
#   Environment: production
#   Service: Modules-HrSystem
```

The link is saved in `.railway/` and persists across terminal sessions.

---

## 2. Daily use

### Open an interactive shell inside the container

```bash
cd ~/Documents/Dev/portfolio_projects/backends_portfolios/hrSystem
railway ssh
```

Your prompt changes to something like `root@modules-hrsystem-...:/`. You are now inside the live production container.

⚠️ You start at `/` — `cd /app` first before running `php artisan ...`.

### Run a one-shot command without an interactive shell

```bash
railway ssh "cd /app && php artisan migrate:status"
```

---

## 3. Common production tasks

### Run pending migrations

```bash
railway ssh "cd /app && php artisan migrate --force"
```

> Migrations also run automatically on every deploy (see `Dockerfile` CMD). You only need this for ad-hoc reruns.

### See migration status

```bash
railway ssh "cd /app && php artisan migrate:status"
```

### Seed roles & permissions

```bash
railway ssh "cd /app && php artisan db:seed --class=RolesAndPermissionsSeeder --force"
```

### Tinker (interactive PHP REPL on production data)

```bash
railway ssh
cd /app
php artisan tinker
```

Quick one-liner — count employees:

```bash
railway ssh "cd /app && php artisan tinker --execute='echo \\Modules\\Employee\\Models\\Employee::count();'"
```

### Clear caches after env-var changes

```bash
railway ssh "cd /app && php artisan config:clear && php artisan cache:clear"
```

### Tail application logs

```bash
railway logs
```

(streams live; Ctrl-C to stop)

### Look at build logs of a failed deploy

```bash
railway logs --build
```

### List env variables

```bash
railway variables
```

### Open the project page in the browser

```bash
railway open
```

---

## 4. Database access

### MySQL shell

```bash
railway connect MySQL
```

(connects via `mysql` CLI if installed locally; uses Railway's internal credentials).

### Database backup (mysqldump) from your Mac

```bash
railway ssh "cd /app && php artisan db:show"
```

To grab a dump, run inside the container:

```bash
railway ssh
mysqldump -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USERNAME" -p"$DB_PASSWORD" "$DB_DATABASE" > /tmp/backup.sql
```

Then `railway ssh cat /tmp/backup.sql > backup.sql` to pull it down. (Or use Railway's MySQL plugin → **Data** tab for one-click export.)

---

## 5. Domain & deployment management

### Current domains on the service

```bash
railway domain
```

### Add a custom domain

```bash
railway domain hrsite.online
```

Railway prints the DNS records you need to add to Hostinger.

### Trigger a fresh deploy without code changes

```bash
git commit --allow-empty -m "deploy: trigger rebuild"
git push origin main
```

(Railway auto-deploys on push to `main`.)

---

## 6. Troubleshooting

| Symptom | Fix |
|---|---|
| `railway: command not found` | `brew install railway` |
| `Unauthorized` | `railway login` |
| `Could not open input file: artisan` | You forgot `cd /app` (in container) or `cd ~/Documents/.../hrSystem` (on Mac) |
| `railway ssh` hangs | Ctrl-C, then try the one-shot form: `railway ssh "command"` |
| `Service: None` | You skipped `railway service Modules-HrSystem` |
| `Project: precious-grace` (wrong project) | Re-run `railway link --project f2e6b454-813b-4bc7-a81a-852ef880a97d` |
| Local `php artisan migrate` errors on Mac | That hits your **local** DB, not production. Use `railway ssh "cd /app && ..."` instead |

---

## 7. Key IDs

| What | Value |
|---|---|
| Railway project ID | `f2e6b454-813b-4bc7-a81a-852ef880a97d` |
| Service name | `Modules-HrSystem` |
| Environment | `production` |
| Public URLs | https://hrsite.online · https://modules-hrsystem-production.up.railway.app |
| Project dashboard | https://railway.com/project/f2e6b454-813b-4bc7-a81a-852ef880a97d |
