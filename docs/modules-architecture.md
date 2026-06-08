# Modules Architecture — Employee + School submodules

How the two domain modules under `Modules/` are sourced, versioned, and integrated.

> **History:** these were originally submodules → vendored into the main repo on 2026-06-02 to escape Railway's submodule-auth pain → reverted back to submodules on 2026-06-08 (commit `60d1f53`) because separate Source Control visibility was wanted. Railway deploys may require deploy-side fixes again.

---

## 1. Current state (as of 2026-06-08)

```
hrSystem/                       ← main repo (github.com/24lyhour/Modules-HrSystem)
├── .gitmodules
├── Modules/
│   ├── Employee/   ← submodule  github.com/24lyhour/Modules-HrSystem-Employee
│   └── School/     ← submodule  github.com/24lyhour/Modules-HrSystem-School
└── ...
```

Run `git submodule status` to see the pinned commits:

```
 dac2b5a Modules/Employee (heads/main)
 a42580d Modules/School   (heads/main)
```

The main repo stores **gitlinks** (40-byte pointers), not the file contents.

## 2. Cloning fresh

```bash
git clone https://github.com/24lyhour/Modules-HrSystem.git
cd Modules-HrSystem
git submodule update --init --recursive
```

Without the second command, `Modules/Employee` and `Modules/School` will be empty directories.

## 3. Day-to-day workflow

### Working inside a submodule

```bash
cd Modules/Employee
git checkout main             # submodules check out to detached HEAD by default
# ... edit files ...
git add . && git commit -m "feat: ..."
git push                       # pushes to Modules-HrSystem-Employee repo

cd ../..
git add Modules/Employee       # bumps the gitlink in main repo
git commit -m "chore: bump Employee submodule"
git push
```

> ⚠️ **Detached HEAD trap.** If you forget `git checkout main` inside the submodule, your commits live on a detached HEAD and won't push to the right branch. Always check the branch with `git status` before committing inside a submodule.

### Pulling latest

```bash
git pull                                # main repo
git submodule update --remote --merge   # submodules → upstream HEAD
```

## 4. Loaded by nwidart/laravel-modules

`composer.json` includes `nwidart/laravel-modules`. The autoload-fallback for `Modules\Employee\` and `Modules\School\` namespaces is handled by the package; `modules_statuses.json` toggles which modules are active.

```json
// modules_statuses.json
{
  "Employee": true,
  "School": true
}
```

Setting a module to `false` disables its service provider, routes, and migrations without removing the folder.

## 5. Aliases (Vite + TypeScript)

[vite.config.ts](../vite.config.ts) exposes module aliases consumed by the frontend:

```
@employee → Modules/Employee/resources/js
@school   → Modules/School/resources/js
@modules  → Modules/
```

So Vue code can do:
```ts
import EmployeeForm from '@employee/components/EmployeeForm.vue';
```

## 6. Railway deploy implications

Railway's Docker builder has historically **dropped submodule content silently** from the build context, even with a valid GitHub App connection. Symptoms: deploys finish with `Modules/Employee/` and `Modules/School/` empty → fatal `composer install` failures (missing namespace registrations) or 500 on first request.

Known attempts logged in git history:
- `d631723` — SSH key injection via Nixpacks (worked locally, flaky on Railway)
- `b055ab7` — HTTPS via GitHub App (intermittent)
- `8e1cd1a` — self-healing via `GITHUB_TOKEN` env var in start command (worked, fragile)
- `4ec47e2` — vendoring (full bypass — what was reverted by `60d1f53`)

**If/when this redeploys to Railway:** start with the GitHub App connection; if content disappears in the build, fall back to the `GITHUB_TOKEN` self-heal in the Dockerfile's `ENTRYPOINT`. Vendoring is always an option of last resort — keep a `backup/pre-vendor-*` branch handy.

## 7. Reverting back to vendored layout

If Railway pain returns and you want to vendor again:

```bash
git checkout -b chore/vendor-modules
git submodule deinit -f Modules/Employee Modules/School
rm -rf .git/modules/Modules
git rm -f Modules/Employee Modules/School
rm .gitmodules
# rsync from a separate clone of each module's repo:
rsync -a /path/to/Modules-HrSystem-Employee/ Modules/Employee/  --exclude=.git
rsync -a /path/to/Modules-HrSystem-School/   Modules/School/    --exclude=.git
git add Modules/ .gitmodules
git commit -m "deploy: vendor Employee + School into main repo"
```

Or restore the backup branch `backup/pre-submodule-revert-2026-06-08` if it still exists.

## 8. Updating memory

Stored facts (in `~/.claude/.../memory/`):
- `project_overview.md` — describes Employee + School as submodules
- `dev_workflow.md` — includes the `git submodule update --init --recursive` step

These were updated alongside the architecture change to stay in sync.
