# Employee Plan Telegram Reminders — Design

**Status:** Draft for review
**Date:** 2026-05-31
**Owner:** Lyhour
**Module:** `Modules/Employee`

## 1. Summary

Send tiered Telegram reminders to employees about their assigned plans (shifts/schedules), plus team-level reminders to a per-school group chat. Reminders fire on a countdown (7d / 3d / 1d before the plan date) and immediately on assignment. Recurring plans get reminders for every occurrence.

The notification stack is already built (`HasNotifications` trait, `TelegramChannel`, `NotificationService`, `NotificationPreference`, `NotificationLog`). This design fills the five gaps that prevent it from working today:

1. No `telegram_chat_id` column on `employees`.
2. `Employee` model doesn't use `HasNotifications` trait.
3. No employee → Telegram linking flow.
4. No reminder notification classes / message templates.
5. No scheduled job that finds upcoming plans and dispatches reminders.

## 2. Goals

- Employees with assigned plans receive timely Telegram reminders without HR action.
- HR/Admin can register a per-school Telegram group; team reminders post there.
- Employees self-link Telegram via a bot `/start` deep link — no manual chat-id collection.
- Recurring plans (daily/weekly/monthly/yearly) get reminders for every occurrence.
- No duplicate sends — every (assignment, occurrence, tier) is sent at most once.
- All sends happen on the queue worker so Telegram API failures don't block the scheduler.
- Bilingual (English + Khmer) message templates using the existing `lang/` system.

## 3. Non-Goals (v1)

- 30-minutes-before-`start_time` ping. Deferred to v2 (handling NULL `start_time`, queue bursts, and edge cases needs its own pass).
- Per-department or per-plan group chats — only per-school groups.
- Multi-timezone support — single `config('app.timezone')`.
- WhatsApp/SMS channels for plan reminders — only Telegram.
- Two-way bot commands beyond `/start` (no `/today`, `/cancel`, etc.).
- Employee self-service "I can't make it" workflow.

## 4. Decisions (locked)

| Topic | Decision |
|---|---|
| Linking flow | Bot `/start` deep link with one-time tokens |
| Group scope | One Telegram group per school |
| Individual tiers | On assignment, T-7d, T-3d, T-1d |
| Group tiers | T-3d, T-1d |
| Recurring plans | Reminders for every occurrence between `start_date` and `end_date` |
| Opt-out model | Opt-out (default ON once chat is linked); user toggles via `NotificationPreference` |
| Idempotency | `employee_plan_reminder_logs` table with unique `(assignment_id, occurrence_date, tier)` |
| Timezone | Single `config('app.timezone')` |
| Language | Employee user's locale (`en` / `km`), fallback `app.getLocale()` |
| Scheduler cadence | Hourly |
| Send execution | Queued jobs with 3 retries |

## 5. Architecture

### Three data flows

**(a) Linking (inbound)** — Telegram → Laravel webhook
```
Telegram tap on https://t.me/<BotUsername>?start=<token>
  → Telegram sends update to POST /api/v1/telegram/webhook/{secret}
  → TelegramWebhookController extracts /start token + chat_id + username
  → TelegramLinkService::completeLink($token, $chatId, $username)
  → looks up EmployeeTelegramLinkToken, marks used, saves chat_id on employee
  → bot replies "✅ You're linked, {first_name}"
```

**(b) On assignment (event-driven)**
```
CreateEmployeePlanAssignmentAction
  → dispatches EmployeePlanAssignmentCreated event
  → SendOnAssignmentReminderListener (ShouldQueue)
  → SendPlanReminderJob with tier='on_assignment'
```

**(c) Scheduled countdown (hourly)**
```
routes/console.php → Schedule::command('employee:send-plan-reminders')->hourly()
  → SendEmployeePlanRemindersCommand::handle()
  → EmployeePlanReminderService::findDue(now())
       returns: [(assignment_id, occurrence_date, tier), ...]
  → for each: dispatch SendPlanReminderJob
       → opens transaction, inserts EmployeePlanReminderLog (unique constraint enforces idempotency)
       → resolves recipient: employee chat_id OR school group chat_id (depending on tier)
       → sends via Employee::notify(...) or School::notify(...) → TelegramChannel
       → updates log row with status + telegram_message_id
```

## 6. Schema Changes (4 migrations)

```php
// 2026_06_01_000001_add_telegram_to_employees_table.php
Schema::table('employees', function (Blueprint $t) {
    $t->string('telegram_chat_id')->nullable()->index()->after('phone_number');
    $t->string('telegram_username')->nullable()->after('telegram_chat_id');
    $t->timestamp('telegram_linked_at')->nullable()->after('telegram_username');
});

// 2026_06_01_000002_create_employee_telegram_link_tokens_table.php
Schema::create('employee_telegram_link_tokens', function (Blueprint $t) {
    $t->id();
    $t->foreignId('employee_id')->constrained()->cascadeOnDelete();
    $t->string('token', 64)->unique();
    $t->timestamp('expires_at');
    $t->timestamp('used_at')->nullable();
    $t->timestamps();
    $t->index(['employee_id', 'used_at']);
});

// 2026_06_01_000003_add_telegram_group_to_schools_table.php
// Implementer: verify the actual schools table name (may be `schools` or `institutions`).
Schema::table('schools', function (Blueprint $t) {
    $t->string('telegram_group_chat_id')->nullable();
    $t->string('telegram_group_name')->nullable();
});

// 2026_06_01_000004_create_employee_plan_reminder_logs_table.php
Schema::create('employee_plan_reminder_logs', function (Blueprint $t) {
    $t->id();
    $t->foreignId('employee_plan_assignment_id')->constrained('employee_plan_assignments')->cascadeOnDelete();
    $t->date('occurrence_date');
    $t->string('tier', 32); // EmployeePlanReminderTierEnum value
    $t->string('channel', 16)->default('telegram');
    $t->string('status', 16); // sent | failed | skipped
    $t->string('telegram_message_id')->nullable();
    $t->text('error')->nullable();
    $t->timestamp('sent_at')->nullable();
    $t->timestamps();
    $t->unique(['employee_plan_assignment_id', 'occurrence_date', 'tier'], 'eprl_unique');
    $t->index(['occurrence_date', 'tier']);
});
```

## 7. Code Layout

All new code lives in `Modules/Employee/` and follows the established `Dashboard/V1/` + `Api/V1/` split, the thin-controller-thick-action pattern, and `PermissionEnum` constants.

```
Modules/Employee/app/
├── Enums/
│   ├── PermissionEnum.php                              [edit: add cases]
│   └── EmployeePlanReminderTierEnum.php                [new]
├── Models/
│   ├── EmployeePlanReminderLog.php                     [new]
│   └── EmployeeTelegramLinkToken.php                   [new]
├── Events/
│   └── EmployeePlanAssignmentCreated.php               [new]
├── Listeners/
│   └── SendOnAssignmentReminderListener.php            [new, ShouldQueue]
├── Jobs/
│   └── SendPlanReminderJob.php                         [new, ShouldQueue, tries=3, backoff=[10,60,300]]
├── Console/Commands/
│   ├── SendEmployeePlanRemindersCommand.php            [new] (employee:send-plan-reminders)
│   └── SetTelegramWebhookCommand.php                   [new] (employee:telegram:set-webhook)
├── Notifications/
│   ├── EmployeePlanAssignedNotification.php            [new]
│   ├── EmployeePlanUpcomingNotification.php            [new, takes tier in ctor]
│   └── EmployeePlanGroupReminderNotification.php       [new]
├── Services/
│   ├── EmployeePlanReminderService.php                 [new]
│   ├── EmployeePlanOccurrenceCalculator.php            [new, pure]
│   └── TelegramLinkService.php                         [new]
├── Http/
│   ├── Controllers/
│   │   ├── Api/V1/Telegram/TelegramWebhookController.php       [new]
│   │   └── Dashboard/V1/EmployeeTelegramController.php         [new]
│   └── Requests/Dashboard/V1/EmployeeTelegram/
│       └── (none needed for v1 — actions take primitives)
└── Actions/Dashboard/V1/EmployeeTelegram/
    ├── GenerateEmployeeTelegramLinkAction.php          [new]
    ├── UnlinkEmployeeTelegramAction.php                [new]
    └── SendEmployeeTelegramTestMessageAction.php       [new]

Modules/Employee/database/migrations/
├── 2026_06_01_000001_add_telegram_to_employees_table.php
├── 2026_06_01_000002_create_employee_telegram_link_tokens_table.php
├── 2026_06_01_000003_add_telegram_group_to_schools_table.php
└── 2026_06_01_000004_create_employee_plan_reminder_logs_table.php

Modules/Employee/lang/{en,km}/
└── employee/plan_reminders.php  [new — message templates per tier]

Modules/Employee/routes/
└── api/Telegram/v1.php  [new — POST /api/v1/telegram/webhook/{secret}]

Modules/Employee/resources/js/pages/Dashboard/V1/Employee/
├── partials/TelegramLinkCard.vue                       [new]
└── (Edit.vue / Show.vue)                               [edit: render TelegramLinkCard]

Root changes (minimal):
├── config/services.php                  [edit: add 'telegram' block]
├── routes/console.php                   [edit: register hourly schedule]
├── Modules/Employee/app/Models/Employee.php   [edit: use HasNotifications; add casts]
├── Modules/School/app/Models/School.php       [edit: use HasNotifications; add casts]
└── .env.example, .env.railway.example   [edit: TELEGRAM_BOT_TOKEN, TELEGRAM_BOT_USERNAME, TELEGRAM_WEBHOOK_SECRET]
```

## 8. Key Components — What Each Does

### `EmployeePlanOccurrenceCalculator` (pure helper)

```php
public function occurrencesBetween(EmployeePlan $plan, CarbonImmutable $from, CarbonImmutable $to): array
```

- For `is_recurring = false`: returns `[$plan->start_date]` if it falls in `[from, to]`.
- For `is_recurring = true`: walks from `max($plan->start_date, $from)` to `min($plan->end_date, $to)` stepping by `recurrence_type` (`daily` = +1 day, `weekly` = +7 days, `monthly` = +1 month, `yearly` = +1 year), yielding each date.
- Returns `array<int, CarbonImmutable>` of occurrence dates (date-only, no time).
- Pure — no I/O, no DB. Unit-testable in isolation.

### `EmployeePlanReminderService::findDue(CarbonImmutable $now): Collection`

Returns rows of `['assignment_id' => int, 'occurrence_date' => CarbonImmutable, 'tier' => EmployeePlanReminderTierEnum]`.

Algorithm:
1. Load active assignments (`status IN ('assigned', 'in_progress')`) eager-loading plan + employee + school.
2. Compute lookahead window: occurrences in `[now, now->addDays(8)]` (covers 7d tier with slack).
3. For each (assignment, occurrence_date):
   - For each tier in `[on_assignment skipped here, 7d, 3d, 1d, group_3d, group_1d]`:
     - Compute the fire-window for that tier (see "Fire windows" table below).
     - If `$now` is inside the fire-window AND no `EmployeePlanReminderLog` row exists for `(assignment_id, occurrence_date, tier)`, yield it.
4. Skipped: assignments where the employee has `telegram_chat_id = NULL` (individual tiers) or the school has `telegram_group_chat_id = NULL` (group tiers) — emit a `status='skipped'` log row so we don't re-check every hour for the same occurrence.

### Fire windows

The hourly scheduler fires at the top of each hour. To avoid drift, each tier defines a "1-hour fire window" relative to the occurrence date. The current hour must overlap the window.

| Tier | Fire window |
|---|---|
| `7d`        | occurrence_date − 7 days at 09:00–10:00 (school time) |
| `3d`        | occurrence_date − 3 days at 09:00–10:00 |
| `1d`        | occurrence_date − 1 day at 18:00–19:00 |
| `group_3d`  | occurrence_date − 3 days at 09:00–10:00 |
| `group_1d`  | occurrence_date − 1 day at 18:00–19:00 |
| `on_assignment` | (not scheduled — fired by event listener) |

### `SendPlanReminderJob`

```php
public function handle(): void
{
    DB::transaction(function () {
        // Idempotency: insert log row first. Unique constraint blocks duplicates.
        $log = EmployeePlanReminderLog::create([
            'employee_plan_assignment_id' => $this->assignmentId,
            'occurrence_date' => $this->occurrenceDate,
            'tier' => $this->tier->value,
            'channel' => 'telegram',
            'status' => 'sent', // optimistic, downgrade on failure
        ]);

        // Resolve recipient + notification, send, capture message_id.
        // On exception: update log to status='failed', re-throw to trigger queue retry.
    });
}
```

Retries: `tries = 3`, `backoff = [10, 60, 300]` seconds. After 3 failures, log stays `status='failed'`, no re-attempt.

### `TelegramWebhookController` + `TelegramLinkService`

- Webhook URL: `POST /api/v1/telegram/webhook/{secret}` — `{secret}` matches `config('services.telegram.webhook_secret')` (route param, not header, because Telegram only sends to a fixed URL).
- Handles `/start <token>` messages only (v1).
- `TelegramLinkService::completeLink(string $token, string $chatId, ?string $username): EmployeeTelegramLinkResult`
  - Token must exist, not be `used_at`, and `expires_at > now`.
  - On success: set `employees.telegram_chat_id`, `telegram_username`, `telegram_linked_at`; mark token used; send Telegram reply.
  - On failure: log and reply with a generic "Link invalid or expired" message.

### `GenerateEmployeeTelegramLinkAction`

```php
public function execute(Employee $employee): array
{
    // Invalidate any prior unused tokens for this employee.
    EmployeeTelegramLinkToken::where('employee_id', $employee->id)->whereNull('used_at')->delete();

    $token = bin2hex(random_bytes(16));
    EmployeeTelegramLinkToken::create([
        'employee_id' => $employee->id,
        'token' => $token,
        'expires_at' => now()->addMinutes(30),
    ]);

    $botUsername = config('services.telegram.bot_username');
    $url = "https://t.me/{$botUsername}?start={$token}";

    return ['url' => $url, 'expires_at' => now()->addMinutes(30)];
}
```

## 9. Message Templates (`lang/{en,km}/employee/plan_reminders.php`)

```php
return [
    'on_assignment' => [
        'title' => '📋 New plan assigned',
        'body'  => "You've been assigned to *:title* on :date at :location.",
    ],
    'upcoming_7d' => [
        'title' => '⏰ Heads up — plan in 1 week',
        'body'  => "*:title* is coming up on :date at :location.",
    ],
    'upcoming_3d' => [
        'title' => '⏰ Plan in 3 days',
        'body'  => "*:title* is on :date at :location.",
    ],
    'upcoming_1d' => [
        'title' => '🔔 Tomorrow: :title',
        'body'  => "Starts :time at :location. Don't forget to prepare.",
    ],
    'group_3d' => [
        'title' => '👥 Team — plan in 3 days',
        'body'  => "*:title* on :date. Assigned: :names.",
    ],
    'group_1d' => [
        'title' => '👥 Team — plan tomorrow',
        'body'  => "*:title* tomorrow at :time, :location. Assigned: :names.",
    ],
];
```

**Khmer file** ships with placeholder Khmer strings mirroring the same array keys. Final wording will be supplied by a Khmer-fluent reviewer (Lyhour or a teammate) post-merge; the spec only commits to *structure*, not final copy.

## 10. Permissions (additions to `Modules/Employee/app/Enums/PermissionEnum.php`)

```php
case EMPLOYEES_MANAGE_TELEGRAM = 'employees.manage_telegram';  // generate/unlink link, send test
```

Add to `auto.permission`-protected dashboard routes:
- `POST   /dashboard/employees/{employee}/telegram/link    → employees.manage_telegram`
- `DELETE /dashboard/employees/{employee}/telegram         → employees.manage_telegram`
- `POST   /dashboard/employees/{employee}/telegram/test    → employees.manage_telegram`

Webhook route is **outside** `auto.permission` (Telegram is unauthenticated; secret in URL gates it).

## 11. UX Surface

### Employee Edit / Show page — new card
- **Not linked**: "Connect Telegram" button → opens modal with `t.me/...` link + QR code + 30-min expiry countdown. Modal stays open and polls every 5s; auto-closes when linking completes.
- **Linked**: shows Telegram username, "Linked Mar 15 2026", "Send test message" button, "Unlink" button (with confirm modal).

### School settings page — new field
- Text input: "Team Telegram group chat ID" with help text: "Add @YourBotName to your school's Telegram group, make it admin, then run `/chatid` (one-time bot command — TODO post-v1) or paste the chat ID manually. Group IDs start with `-100...`."
- For v1: manual entry only. Bot command to auto-detect group chat_id is post-v1.

### Notification preferences page (already exists per `NotificationPreference`)
- Ensure the "Telegram" toggle is visible to employees and defaults ON once chat_id is set.

## 12. Configuration

```php
// config/services.php — additions
'telegram' => [
    'bot_token'       => env('TELEGRAM_BOT_TOKEN'),
    'bot_username'    => env('TELEGRAM_BOT_USERNAME'),  // without @
    'webhook_secret'  => env('TELEGRAM_WEBHOOK_SECRET'), // long random string
    'chat_id'         => env('TELEGRAM_CHAT_ID'),       // existing — kept for fallback
],
```

```bash
# .env additions
TELEGRAM_BOT_TOKEN=
TELEGRAM_BOT_USERNAME=
TELEGRAM_WEBHOOK_SECRET=
```

```php
// routes/console.php — addition
Schedule::command('employee:send-plan-reminders')
    ->hourly()
    ->name('employee-plan-reminders')
    ->withoutOverlapping()
    ->onOneServer();
```

## 13. Error Handling & Edge Cases

| Case | Behavior |
|---|---|
| Employee has no `telegram_chat_id` | Skipped tier; log row with `status='skipped'` so we don't re-evaluate every hour |
| School has no `telegram_group_chat_id` | Group tier skipped; logged once per occurrence |
| Telegram API returns 4xx (e.g., user blocked bot) | Job marks log `status='failed'`, error stored, no retry |
| Telegram API 5xx / timeout | Queue retries up to 3x with backoff `[10, 60, 300]` seconds |
| Scheduler runs twice in same hour | Unique constraint on `employee_plan_reminder_logs` makes second send a no-op |
| Assignment deleted / soft-deleted | Excluded from `findDue` query |
| Plan with `end_date < now` | `OccurrenceCalculator` returns empty; no reminders |
| Recurring plan, `recurrence_type` NULL while `is_recurring=true` | Calculator treats as single occurrence on `start_date` and logs a warning |
| Token expired before employee taps | Bot replies "Link expired, ask HR to generate a new one" |
| Token already used | Bot replies "This link has been used" |
| Webhook called with wrong secret | 404 (don't even route) |

## 14. Testing Strategy

- **Unit**: `EmployeePlanOccurrenceCalculator` — pure function, exhaustive cases for each `recurrence_type` and date boundaries.
- **Unit**: `EmployeePlanReminderService::findDue` — table-driven tests with frozen time, varied assignments + existing log rows.
- **Feature**: `SendEmployeePlanRemindersCommand` end-to-end with `Http::fake()` for Telegram API.
- **Feature**: `TelegramWebhookController` — valid token, expired token, used token, wrong secret, non-`/start` messages.
- **Feature**: `GenerateEmployeeTelegramLinkAction` — invalidates prior unused tokens.
- **Idempotency**: run the scheduled command twice in the same fake hour; assert exactly one Telegram API call per (assignment, occurrence, tier).

## 15. Deployment & Rollout

1. Merge migrations + code.
2. In production (Railway):
   - Add env vars: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_BOT_USERNAME`, `TELEGRAM_WEBHOOK_SECRET`.
   - Run `php artisan migrate --force` (already in `.railway/release.sh`).
   - Run once: `php artisan employee:telegram:set-webhook` to register the webhook with Telegram.
3. Soft launch: enable for one school first. Verify a real `/start` link round-trip, a real assignment fires `on_assignment`, and a real T-1d fires next evening.
4. Roll out to remaining schools.

## 16. Resolved decisions worth flagging

These are not open — they're called out so the implementation doesn't quietly drift:

- **Reminder-log admin page**: not in v1. For debugging, query `employee_plan_reminder_logs` directly.
- **Recurring-plan lookahead cap**: `findDue` hard-caps the lookahead window at `min(plan.end_date, now + 365 days)` so a 5-year daily plan can't OOM the query.
- **Bot `/chatid` command** for school admin to auto-grab group chat_id: defer to post-v1. v1 = manual paste of group chat_id into school settings.

## 17. Post-v1 backlog (do not implement now)

- 30-min-before-`start_time` ping.
- Reminder-log admin page (with filters by school, employee, tier).
- `/chatid` bot command + group-chat auto-detection.
- Two-way bot commands: `/today`, `/cancel`, `/snooze`.
- Per-department groups.
- Multi-timezone (per-school timezones).

---

**End of design.**
