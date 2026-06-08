# Login Telegram Alerts — Design Spec

**Status:** Approved, awaiting implementation
**Date:** 2026-06-08
**Author:** Lyhour + Claude (brainstorming session)

## 1. Goal

Push a Telegram message to the admin (Lyhour) every time someone logs into the system, plus on failed login, logout, and new-device events. Configurable from the UI on the **General Settings** page (`/settings/general`). Sits next to the existing activity-log tracker.

> Earlier alternative considered: a separate `/settings/login-alerts` page. Rejected — user prefers consolidation under General.

## 2. Recipient & Triggering

| Decision | Value |
|---|---|
| Who receives | Single admin Telegram chat / group |
| Default chat ID | `-5244139148` (group) |
| Bot token storage | UI (encrypted at rest via Laravel `Crypt`), with `.env` fallback for legacy |
| Per-user notifications | No — admin-only single target |
| Role filter | Optional (e.g. only alert when a user with role X logs in) |

## 3. Events to notify on

| Event | Source | Default | Setting key |
|---|---|---|---|
| Successful login | `Illuminate\Auth\Events\Login` | ON | `on_success` |
| Failed login | `Illuminate\Auth\Events\Failed` | ON | `on_failed` |
| Logout | `Illuminate\Auth\Events\Logout` | OFF (noisy) | `on_logout` |
| New device / suspicious | `App\Events\NewDeviceLogin` | ON | `on_new_device` |

## 4. Settings storage

A new `login_alerts` group in the existing `settings` table (uses `App\Models\Setting::getGroup()` / `setValue()`).

| Key | Type | Default | Notes |
|---|---|---|---|
| `enabled` | bool | `true` | Master switch |
| `bot_token` | encrypted string | (none) | UI-managed, encrypted on save |
| `admin_chat_id` | string | `-5244139148` | Numeric chat or group ID |
| `on_success` | bool | `true` | |
| `on_failed` | bool | `true` | |
| `on_logout` | bool | `false` | |
| `on_new_device` | bool | `true` | |
| `min_role` | string\|null | `null` | Filter by role name |
| `quiet_hours_start` | string\|null (HH:mm) | `null` | Mute window start |
| `quiet_hours_end` | string\|null (HH:mm) | `null` | Mute window end |
| `last_test_at` | datetime\|null | `null` | Updated by Send Test button |
| `last_test_status` | string\|null | `null` | `ok` / error string |

Quiet hours suppress only `on_success` and `on_logout`; `on_failed` and `on_new_device` always fire (security signals).

## 5. Listener flow

One queued listener — `App\Listeners\SendLoginAlertToTelegram implements ShouldQueue` — bound to all four events. Pseudocode:

```php
public function handle(object $event): void
{
    $s = Setting::getGroup('login_alerts');
    if (! $s['enabled'] ?? false) return;
    if (empty($s['admin_chat_id'])) return;

    $eventKey = match (true) {
        $event instanceof Login          => 'on_success',
        $event instanceof Failed         => 'on_failed',
        $event instanceof Logout         => 'on_logout',
        $event instanceof NewDeviceLogin => 'on_new_device',
    };
    if (! ($s[$eventKey] ?? false)) return;

    if (in_quiet_hours() && in_array($eventKey, ['on_success', 'on_logout'])) return;
    if (! empty($s['min_role']) && ! $event->user?->hasRole($s['min_role'])) return;

    $payload = build_payload_for_event($event);

    /** @var TelegramChannel $tg */
    $tg = app(TelegramChannel::class);
    $tg->sendToChannel($s['admin_chat_id'], $payload);  // method already exists
}
```

**Failure handling:** TelegramChannel already logs errors. Listener swallows exceptions so a Telegram outage cannot break login.

## 6. Backend wiring

New files:
- `app/Http/Controllers/Settings/LoginAlertsController.php` — `index`, `update`, `sendTest`
- `app/Http/Requests/Settings/UpdateLoginAlertsRequest.php` — validation
- `app/Services/LoginAlertsService.php` — encapsulates get/set + encrypt/decrypt of `bot_token`
- `app/Listeners/SendLoginAlertToTelegram.php` — the listener above
- `database/seeders/LoginAlertsSettingsSeeder.php` — seed defaults including `admin_chat_id = -5244139148`

Routes added to `routes/settings.php`:
```php
Route::get('settings/login-alerts',  [LoginAlertsController::class, 'index'])->name('login-alerts.edit');
Route::patch('settings/login-alerts',[LoginAlertsController::class, 'update'])->name('login-alerts.update');
Route::post('settings/login-alerts/test', [LoginAlertsController::class, 'sendTest'])->name('login-alerts.test');
```

Listener registered in `App\Providers\AppServiceProvider::boot()` against the 4 events listed in §3.

Permission: `settings.login_alerts.manage` added to `PermissionEnum` + seeded in `RolesAndPermissionsSeeder`. Routes protected via existing `auto.permission` middleware.

## 7. Frontend — General Settings page

The Login Tracker section is rendered inside `resources/js/pages/settings/General.vue`. Layout follows the same pattern as the existing settings forms (`Profile.vue`, `Login.vue`).

Section layout (industry pattern: status pills → master switch → events → advanced):

```
┌─ Login Tracker Notifications ────────────────────────────────────┐
│  ┌────────┐  ┌────────┐  ┌──────────┐                            │
│  │ Bot    │  │ Target │  │ Last test│                            │
│  │ ● set  │  │ -5244… │  │ 2m ago ✓ │                            │
│  └────────┘  └────────┘  └──────────┘                            │
│                                                                  │
│  Master switch                                       [●——○ ON]   │
│                                                                  │
│  Bot token       [ ********************** ] [Reveal]             │
│  Chat / group ID [ -5244139148            ]                      │
│                                                                  │
│  Notify on:                                                      │
│   [✓] Successful login                                           │
│   [✓] Failed login                                               │
│   [ ] Logout                                                     │
│   [✓] New device / suspicious                                    │
│                                                                  │
│  Restrict to role  [ Any role ▼ ]                                │
│  Quiet hours       [ 22:00 ] → [ 07:00 ] [ Asia/Phnom_Penh ▼ ]   │
│                                                                  │
│           [ Send test message ]   [ Save changes ]               │
└──────────────────────────────────────────────────────────────────┘
```

Bot token field is `password`-type; "Reveal" toggles visibility. Server returns the value masked except for last 4 chars on `index()`; the unmasked value is only round-tripped on `update()` if the user changed it.

## 8. Security notes

- Bot token is encrypted via Laravel `Crypt::encryptString()` before save; decrypted on listener load.
- Chat ID is **not** encrypted (not secret).
- `sendTest` endpoint requires the `settings.login_alerts.manage` permission.
- All controller routes pass through the `auto.permission` middleware.
- Failed-login messages include the **attempted email** (not the password) so brute-force patterns are visible.

## 9. Out of scope

- Per-user (employee) Telegram notifications for their own logins.
- Multi-chat fan-out (one chat only for now).
- Localization of Telegram message bodies.
- Webhook-based two-way commands (bot just sends; doesn't receive).

## 10. Files to add / modify

**Add:**
- `app/Http/Controllers/Settings/LoginAlertsController.php`
- `app/Http/Requests/Settings/UpdateLoginAlertsRequest.php`
- `app/Services/LoginAlertsService.php`
- `app/Listeners/SendLoginAlertToTelegram.php`
- `database/seeders/LoginAlertsSettingsSeeder.php`

**Modify:**
- `routes/settings.php` (3 new routes)
- `app/Providers/AppServiceProvider.php` (register listener)
- `database/seeders/RolesAndPermissionsSeeder.php` (add permission)
- `app/Enums/PermissionEnum.php` (new case)
- `resources/js/pages/settings/General.vue` (render the section)

## 11. Implementation plan

To be created via `writing-plans` skill in a follow-up session.
