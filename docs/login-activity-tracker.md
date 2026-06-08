# Login Activity Tracker — Operational Guide

How login, logout, failed-login, and force-logout events get captured, stored, and surfaced in the dashboard.

This documents what **already exists** in the codebase. For the planned Telegram-alerts feature that hooks into the same events, see [superpowers/specs/2026-06-08-login-telegram-alerts-design.md](superpowers/specs/2026-06-08-login-telegram-alerts-design.md).

---

## 1. Flow at a glance

```
┌──────────────────────┐
│  User submits login  │
│  via Fortify         │
└──────────┬───────────┘
           │ Illuminate\Auth\Events\Login fires
           ▼
┌──────────────────────────────────────────┐
│  app/Listeners/LogSuccessfulLogin.php    │
│                                          │
│  Activity::causedBy($user)               │
│    ->useLog('auth')                      │
│    ->event('login')                      │
│    ->withProperties([ip, ua, browser,    │
│                       platform, roles])  │
│    ->log("User X logged in");            │
└──────────────────┬───────────────────────┘
                   │
                   ▼
       ┌───────────────────────────┐
       │  activity_log table       │   ← Spatie/Activitylog
       │  (log_name='auth')        │
       └────────────┬──────────────┘
                    │
                    ▼
┌────────────────────────────────────────────────────────┐
│  app/Http/Controllers/Settings/ActivityLogController   │
│  GET /dashboard/settings/activity-log                  │
│                                                        │
│  Filters: event, user_id, date_from, date_to           │
│  Stats:   total_logins, total_logouts, failed_logins,  │
│           today_logins, suspicious_users (≥3 fails/24h)│
│  Actions: suspendUser, unsuspendUser, forceLogout,     │
│           deleteUser, export (CSV), clear (≥1 day)     │
└────────────────────────┬───────────────────────────────┘
                         │
                         ▼
           ┌──────────────────────────────┐
           │  resources/js/pages/dashboard/│
           │  settings/activity-log/      │
           │  Index.vue                   │
           └──────────────────────────────┘
```

## 2. Captured events

| Event | Listener | `event` column value |
|---|---|---|
| `Illuminate\Auth\Events\Login` | `LogSuccessfulLogin` | `login` |
| `Illuminate\Auth\Events\Logout` | `LogSuccessfulLogout` | `logout` |
| `Illuminate\Auth\Events\Failed` | `LogFailedLogin` | `failed_login` |
| `App\Events\NewDeviceLogin` | `SendNewDeviceLoginNotification` (does not write activity log itself; user-facing notification only) | — |
| `App\Events\UserSuspended` | `LogUserSuspension` | `user_suspended` / `user_unsuspended` |
| Force-logout (from `ActivityLogController::forceLogout`) | — (controller writes directly) | `force_logout` |
| User delete | — (controller writes directly) | `user_deleted` |
| Clear old logs | — (controller writes directly) | `clear_logs` |

Each entry carries:
```
properties:
  ip_address
  user_agent
  browser   (parsed: Edge / Chrome / Firefox / Safari / Opera / IE)
  platform  (parsed: Windows / macOS / Linux / iOS / Android)
  guard
  roles[]
```

## 3. Key files

| Concern | Path |
|---|---|
| Successful login listener | [app/Listeners/LogSuccessfulLogin.php](../app/Listeners/LogSuccessfulLogin.php) |
| Logout listener | [app/Listeners/LogSuccessfulLogout.php](../app/Listeners/LogSuccessfulLogout.php) |
| Failed login listener | [app/Listeners/LogFailedLogin.php](../app/Listeners/LogFailedLogin.php) |
| Suspension listener | [app/Listeners/LogUserSuspension.php](../app/Listeners/LogUserSuspension.php) |
| New-device notification | [app/Listeners/SendNewDeviceLoginNotification.php](../app/Listeners/SendNewDeviceLoginNotification.php) + [app/Events/NewDeviceLogin.php](../app/Events/NewDeviceLogin.php) |
| Controller | [app/Http/Controllers/Settings/ActivityLogController.php](../app/Http/Controllers/Settings/ActivityLogController.php) |
| Vue page | [resources/js/pages/dashboard/settings/activity-log/Index.vue](../resources/js/pages/dashboard/settings/activity-log/Index.vue) |
| Page modals | `Delete.vue`, `Suspend.vue`, `Unsuspend.vue`, `ForceLogout.vue`, `ClearLogs.vue` (same folder) |

## 4. Operations

### Export
`GET /dashboard/settings/activity-log/export` — streams CSV with the same filters as the index view. Columns: `ID, User, Email, Event, IP Address, Browser, Platform, Date`.

### Cleanup
`POST /dashboard/settings/activity-log/clear` with `days=N` (1–365). Deletes `log_name='auth'` rows older than N days; itself writes a `clear_logs` activity entry.

### Force logout
`POST /dashboard/settings/activity-log/{user}/force-logout` — deletes all of that user's session rows. Self-targeting blocked.

### Suspend / unsuspend
`POST /dashboard/settings/activity-log/{user}/suspend` (optional `reason`) and `POST .../unsuspend`. Triggers `App\Events\UserSuspended` which logs an entry.

## 5. Suspicious-user heuristic

The index page lists users with **≥3 failed logins in the last 24 hours**, grouped by `properties->>"$.email"`. Defined inline in `ActivityLogController::index()`. Tune the threshold there.

## 6. Common pitfalls

- **Don't write activity logs from inside transactions you might roll back.** Spatie writes immediately; the log will survive a rollback.
- **`causer_id` may be null** for failed logins (no authenticated user yet). The email is captured in `properties.email` for those rows.
- **`role` is loaded eagerly** in `LogSuccessfulLogin::handle()` via `$user->load('roles')` to avoid N+1 — keep that line if you refactor.
