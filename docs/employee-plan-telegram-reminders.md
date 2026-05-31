# Employee Plan Telegram Reminders — Setup & Operations

A practical guide to enable Telegram reminders for employee plans. Covers everything from creating a Telegram bot through testing end-to-end.

> **What this feature does**
> When an employee is assigned to a plan, a message is posted to that plan's Telegram group: *"📋 [Employee] has just been assigned."* On a recurring schedule, two more reminders post 3 days and 1 day before the plan's start date listing the full team.

---

## 1. Architecture at a glance

```
┌──────────────────────────┐                  ┌──────────────────────┐
│ HR assigns employee in   │                  │ Cron: hourly         │
│ dashboard                │                  │ schedule:run         │
└────────────┬─────────────┘                  └──────────┬───────────┘
             │                                            │
             ▼                                            ▼
┌──────────────────────────┐                  ┌───────────────────────┐
│ CreateEmployeePlan       │                  │ employee:send-plan-   │
│ AssignmentAction OR      │                  │ reminders             │
│ BulkAssignEmployeePlan   │                  │                       │
│ Action                   │                  │ Finds plans whose     │
│                          │                  │ occurrence is 3d / 1d │
│ Fires:                   │                  │ away inside the fire- │
│ EmployeePlanAssignment-  │                  │ window hour, dispatch │
│ Created event            │                  │ SendPlanReminderJob   │
└────────────┬─────────────┘                  └──────────┬────────────┘
             │                                            │
             ▼                                            ▼
┌──────────────────────────┐                  ┌───────────────────────┐
│ SendOnAssignment         │                  │ SendPlanReminderJob   │
│ ReminderListener (queue) │                  │ (queue, 3 retries,    │
│                          │                  │ idempotent via unique │
│ Posts "new assignee"     │                  │ index on reminder log)│
│ message to plan's group  │                  │                       │
└────────────┬─────────────┘                  │ Builds widget card,   │
             │                                │ posts to plan's group │
             │                                └──────────┬────────────┘
             │                                            │
             └─────────────────┬──────────────────────────┘
                               │
                               ▼
                  ┌────────────────────────┐
                  │ TelegramChannel →      │
                  │ Telegram Bot API       │
                  │ → group chat           │
                  └────────────────────────┘
```

---

## 2. From-scratch setup checklist

| # | Task | Done by |
|---|---|---|
| 1 | Run migrations | Developer (`php artisan migrate`) |
| 2 | Create a Telegram bot | HR admin in Telegram |
| 3 | Put bot token in `.env` | Developer |
| 4 | Create a Telegram group for the plan team | HR admin |
| 5 | Add the bot to the group | HR admin |
| 6 | Get the group's chat ID | Developer (one artisan command) |
| 7 | Paste chat ID into the plan in the HR dashboard | HR admin |
| 8 | Set up queue worker + cron | DevOps |

Each step is detailed below.

---

## 3. Step 1 — Run migrations

The feature introduces 4 migrations under `Modules/Employee/database/migrations/`:

| Migration | Adds |
|---|---|
| `…000001_add_telegram_to_employees_table` | `telegram_chat_id`, `telegram_username`, `telegram_linked_at` on `employees` (reserved for future individual DMs; currently unused) |
| `…000002_create_employee_telegram_link_tokens_table` | reserved for future `/start` link tokens (currently unused) |
| `…000003_add_telegram_group_to_employee_plan_table` | `telegram_group_chat_id`, `telegram_group_name` on `employee_plan` |
| `…000004_create_employee_plan_reminder_logs_table` | audit/idempotency log: unique `(employee_plan_id, occurrence_date, tier)` |

Run:

```bash
php artisan migrate
```

---

## 4. Step 2 — Create a Telegram bot

You only need to do this **once per environment**. The same bot can post to many groups.

1. Open **Telegram** → search for **`@BotFather`** → tap the one with the blue ✓ → tap **Start**.
2. Send: `/newbot`
3. BotFather asks for a **name** — type a friendly name, e.g. `Thalias HR Reminders`.
4. BotFather asks for a **username** — must end in `bot` and be globally unique, e.g. `thalias_hr_reminders_bot`.
5. BotFather replies with the **token** (long string like `7891234567:AAH...`). **Copy it.**

⚠️ The token is a secret. Anyone with it can fully control the bot. Treat it like a password.

If it ever leaks: in BotFather send `/revoke` → pick the bot → it generates a new token and the old one stops working.

---

## 5. Step 3 — Configure environment variables

Add to `.env`:

```dotenv
TELEGRAM_BOT_TOKEN=<paste-the-token-from-BotFather>
TELEGRAM_CHAT_ID=
```

- `TELEGRAM_BOT_TOKEN` — required.
- `TELEGRAM_CHAT_ID` — leave empty. Each plan stores its own group chat ID in the database.

For development, also set:

```dotenv
QUEUE_CONNECTION=sync
```

This makes queued jobs run immediately (no separate worker needed). For production, see §11.

After editing `.env`:

```bash
php artisan config:clear
```

---

## 6. Step 4 — Create a Telegram group

In Telegram:

1. Tap the new-message icon → **New Group**.
2. Pick the people on the team who should receive reminders.
3. Name the group, e.g. `Morning Shift — Q1 2026`.

You can also reuse an existing team group.

---

## 7. Step 5 — Add the bot to the group

In the group:

1. Tap the group name → **Add Members** (or the `+` icon next to the member count).
2. In the search box, type your bot's username (no `@`), e.g. `thalias_hr_reminders_bot`.
3. Select the bot → tap **Add**.

### ⚠️ Important: disable privacy mode OR make the bot an admin

By default, Telegram bots in groups can't read regular messages. Both `getUpdates` (used to fetch the chat ID) and the bot's ability to respond to commands rely on this.

**Easiest** — make the bot an admin:
- Tap group name → tap the bot in member list → **Promote to Admin**.
- Toggle any one permission (e.g. "Delete messages") → **Save**.

**Alternative** — disable privacy globally for the bot via BotFather:
1. `@BotFather` → `/setprivacy` → pick your bot → **Disable**.
2. **Remove and re-add the bot to the group** (privacy changes only apply on rejoin).

The bot does NOT need any permissions to *send* messages — those work by default. The admin/privacy concern is only for *receiving* messages so we can discover chat IDs.

---

## 8. Step 6 — Get the group's chat ID

Run:

```bash
php artisan employee:telegram:show-chats
```

You'll see something like:

```
Bot token belongs to: @thalias_hr_reminders_bot
Calling Telegram getUpdates...

Chats the bot has seen recently:
+--------------------+-------------+----------------------------+
| Chat ID            | Type        | Title / Name               |
+--------------------+-------------+----------------------------+
| -4874837060        | group       | Morning Shift — Q1 2026    |
+--------------------+-------------+----------------------------+
```

**Copy the negative number** (e.g. `-4874837060`). That's the chat ID.

### If it says "No recent updates found"

The bot hasn't seen any messages yet. Send any message in the group (e.g. `test`), wait 2 seconds, then run the command again.

### If a webhook is intercepting

If you (or another package like `defstudio/telegraph`) registered a webhook, the command will detect it, delete it, and tell you to send a fresh message. Follow the printed instructions.

---

## 9. Step 7 — Paste the chat ID into the plan

In the HR dashboard:

1. Go to **Employee Plans** → open or create a plan.
2. Scroll to the **"Telegram Group (Reminders)"** section.
3. Fill in:
   - **Group Chat ID** = `-4874837060` (the negative number from §8)
   - **Group Name (label)** = `Morning Shift — Q1 2026` (free-text, just for your reference)
4. Save.

Plans without a chat ID are silently skipped by the reminder system. So setting it on a per-plan basis acts as the on/off switch.

---

## 10. Step 8 — Test end-to-end

### 🟢 Test A — instant test message (no schedule, no event)

Skips all timing logic. Sends a sample reminder card to the plan's group immediately.

```bash
# uses the first plan that has a chat ID set
php artisan employee:telegram:test-plan-message

# OR target a specific plan by numeric ID
php artisan employee:telegram:test-plan-message 1

# OR by UUID
php artisan employee:telegram:test-plan-message 7c4b...
```

Expected output:

```
Sending test message to chat_id -4874837060 for plan "Q1 Onboarding Workshop"...
✅ Sent! Check your Telegram group.
Message ID: 7
```

Open the Telegram group — you should see a widget-style card.

### 🟡 Test B — assign an employee from the dashboard

1. Dashboard → **Employee Plans → Assignments → Create**.
2. Pick the plan, check 1+ employees, click **Assign**.
3. Within seconds (assuming `QUEUE_CONNECTION=sync` or queue worker running):
   - **Bulk-assign UI** (multiple checked): the group receives **one consolidated message** listing every newly-assigned employee.
   - **Single-assign API** (`POST /dashboard/employee-plan-assignments`): the group receives one message per single-employee POST.

Already-assigned employees are silently skipped (no duplicate Telegram message).

### 🔴 Test C — simulate the 1-day countdown reminder

The natural fire window for the 1-day-before reminder is 18:00–18:59 in `config('app.timezone')`. To test outside that window:

1. Pick a plan that has a chat ID and active assignees.
2. Set its `start_date` to tomorrow:
   ```bash
   php artisan tinker --execute="
   \$p = \Modules\Employee\Models\EmployeePlan::whereNotNull('telegram_group_chat_id')->first();
   \$p->start_date = now()->addDay()->startOfDay();
   \$p->end_date = now()->addDay()->endOfDay();
   \$p->is_recurring = false;
   \$p->save();
   echo 'Set plan date to '.\$p->start_date->toDateString().PHP_EOL;
   "
   ```
3. Temporarily edit the fire hour to your current hour in [`EmployeePlanReminderTierEnum.php`](../Modules/Employee/app/Enums/EmployeePlanReminderTierEnum.php):
   ```php
   // change:
   self::UPCOMING_1D, self::GROUP_1D => 18,
   // to (replace 18 with your local hour, e.g. 11):
   self::UPCOMING_1D, self::GROUP_1D => 11,
   ```
4. Run:
   ```bash
   php artisan employee:send-plan-reminders
   ```
   Output: `Dispatched 1 reminder job(s).`
5. Telegram group receives the card.
6. **Revert the fire hour to 18** when done.

Run the command a **second time** — it should print "No reminders due" (the unique log index prevents duplicates).

---

## 11. CLI command reference

All commands live under `php artisan employee:…`.

### `employee:send-plan-reminders`

**The scheduled command.** Runs hourly via cron.

```bash
php artisan employee:send-plan-reminders
```

Finds (plan, occurrence_date, tier) triples whose fire window contains "now" and dispatches a `SendPlanReminderJob` for each. Idempotent — re-running in the same hour is a no-op.

| Tier | Days before occurrence | Fire window |
|---|---|---|
| `group_3d` | 3 | 09:00–09:59 |
| `group_1d` | 1 | 18:00–18:59 |

### `employee:telegram:show-chats`

Lists Telegram chats the bot has seen recently. Used to discover chat IDs after adding the bot to a new group.

```bash
php artisan employee:telegram:show-chats
```

Auto-detects and removes interfering webhooks. Validates the bot token.

### `employee:telegram:test-plan-message [plan]`

Sends a sample reminder card to a plan's configured group, bypassing scheduling. Useful for verifying chat ID + bot permissions without waiting for the scheduler.

```bash
php artisan employee:telegram:test-plan-message              # first plan with chat ID
php artisan employee:telegram:test-plan-message 1            # by integer ID
php artisan employee:telegram:test-plan-message <uuid>       # by UUID
```

---

## 12. Production deployment

### Cron entry (server level)

Add to the server's crontab:

```cron
* * * * * cd /path/to/hrSystem && php artisan schedule:run >> /dev/null 2>&1
```

Without this, the hourly `employee:send-plan-reminders` schedule never fires.

### Queue worker

In production, set:

```dotenv
QUEUE_CONNECTION=database
```

(Or `redis`, `sqs`, etc. — whatever matches your infra.)

Then run a worker process:

```bash
php artisan queue:work
```

Use **Supervisor**, **systemd**, **Railway worker**, or similar to keep it running. Without a worker, queued jobs (on-assignment alerts AND scheduled reminders) never send.

### Environment

```dotenv
TELEGRAM_BOT_TOKEN=<production-bot-token>
TELEGRAM_CHAT_ID=
QUEUE_CONNECTION=database
```

`TELEGRAM_CHAT_ID` is only a fallback for code paths that don't have a per-plan chat ID. The plan reminder feature does not use it — leave empty.

---

## 13. Inspect reminder logs (audit trail)

Every send attempt writes a row to `employee_plan_reminder_logs`:

```bash
php artisan tinker --execute="
\Modules\Employee\Models\EmployeePlanReminderLog::orderBy('id','desc')->take(20)->get([
    'employee_plan_id','occurrence_date','tier','status','telegram_message_id','sent_at','error'
])->each(fn(\$l)=>print(json_encode(\$l).PHP_EOL));
"
```

`status` is one of:

- `sent` — Telegram accepted the message
- `failed` — Telegram returned an error (see `error` column)
- `skipped` — the row exists to mark "we considered this but didn't send" (no chat ID, no active assignees, etc.) — prevents the scheduler from re-evaluating the same occurrence every hour

To force a re-send during testing, delete the relevant log row(s) — the next scheduler run (within the fire window) will re-fire:

```bash
php artisan tinker --execute="\Modules\Employee\Models\EmployeePlanReminderLog::truncate(); echo 'logs cleared'.PHP_EOL;"
```

⚠️ Don't truncate in production — these are the audit trail.

---

## 14. Troubleshooting

| Symptom | Diagnosis & fix |
|---|---|
| `php artisan employee:telegram:show-chats` says "No recent updates found" | Bot hasn't seen any messages. Send any message in the group (or promote bot to admin / disable privacy + re-add bot). |
| Same command says "A webhook is set" | A package registered a webhook. The command auto-deletes it; just follow its instructions and re-run. |
| `Bot token in .env is invalid` | Wrong/missing `TELEGRAM_BOT_TOKEN`. Re-copy from BotFather. Run `php artisan config:clear` after editing `.env`. |
| Assigned employee — no Telegram message arrived | (a) `QUEUE_CONNECTION=database` and no worker running → set to `sync` for dev OR run `php artisan queue:work`. (b) Plan has no `telegram_group_chat_id` set. |
| Test command says "❌ Send failed: chat not found" | Bot was removed from the group. Re-add it. |
| Test command says "❌ Send failed: Forbidden: bot was blocked" | Someone blocked / kicked the bot. Re-add it; if from a private chat, the user blocked it. |
| Scheduled command says "No reminders due" but you expect one | Current hour doesn't match the tier's fire-window hour. Check `EmployeePlanReminderTierEnum::fireHour()` vs your local time. Or the plan's `start_date` isn't exactly 1 or 3 days away. |
| Plan reminder lists 0 assignees | The plan has no assignments with `status IN ('assigned', 'in_progress')`. Add some via the dashboard. |
| Old message text appears after editing the lang file | `php artisan cache:clear` (config + view caches can pin translations). |
| Duplicate messages | Should never happen — the unique index `(employee_plan_id, occurrence_date, tier)` prevents it. If you see one, check `employee_plan_reminder_logs` — likely the unique index didn't migrate. |

### Webhook collision with `defstudio/telegraph`

If you use the `telegraph` package for other bots, setting a webhook on this bot will silently break `employee:telegram:show-chats` and the hourly scheduler (because `getUpdates` returns nothing while a webhook is set).

The `show-chats` command will detect this and auto-delete the webhook, but you'll need to re-register it afterward if telegraph was using it:

```bash
php artisan telegraph:set-webhook
```

For the plan-reminder feature, the bot does not need a webhook — we use the queued send pattern, not webhook-driven.

---

## 15. File map

```
Modules/Employee/
├── app/
│   ├── Actions/Dashboard/V1/EmployeePlanAssignment/
│   │   ├── CreateEmployeePlanAssignmentAction.php   ← dispatches event
│   │   └── BulkAssignEmployeePlanAction.php         ← dispatches event per assignee
│   ├── Console/Commands/
│   │   ├── SendEmployeePlanRemindersCommand.php     ← employee:send-plan-reminders
│   │   ├── ShowTelegramChatsCommand.php             ← employee:telegram:show-chats
│   │   └── SendTestPlanMessageCommand.php           ← employee:telegram:test-plan-message
│   ├── Enums/
│   │   └── EmployeePlanReminderTierEnum.php         ← fire-window definitions
│   ├── Events/
│   │   ├── EmployeePlanAssignmentCreated.php        ← single-assign endpoint
│   │   └── EmployeesAssignedToPlan.php              ← bulk-assign endpoint (batched)
│   ├── Jobs/
│   │   └── SendPlanReminderJob.php                  ← queued, idempotent
│   ├── Listeners/
│   │   ├── SendOnAssignmentReminderListener.php           ← single-assign, queued
│   │   └── SendBatchAssignmentNotificationListener.php    ← bulk-assign, queued
│   ├── Models/
│   │   ├── EmployeePlanReminderLog.php
│   │   └── EmployeeTelegramLinkToken.php            ← reserved for future use
│   └── Services/
│       ├── EmployeePlanOccurrenceCalculator.php     ← pure date math
│       └── EmployeePlanReminderService.php          ← finds due reminders
├── database/migrations/
│   ├── 2026_06_01_000001_add_telegram_to_employees_table.php
│   ├── 2026_06_01_000002_create_employee_telegram_link_tokens_table.php
│   ├── 2026_06_01_000003_add_telegram_group_to_employee_plan_table.php
│   └── 2026_06_01_000004_create_employee_plan_reminder_logs_table.php
├── lang/
│   ├── en/plan_reminders.php
│   └── km/plan_reminders.php
└── resources/js/
    ├── Components/Dashboard/EmployeePlanForm.vue                              ← Telegram fields
    └── pages/Dashboard/V1/EmployeePlanAssignment/Create.vue                   ← multi-employee select
```

Root-level wiring:

```
routes/console.php                                  ← hourly Schedule entry
config/services.php                                 ← telegram block (token from env)
.env.example                                        ← TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
```

---

## 16. Not in v1 (future work)

The original design spec at [`docs/superpowers/specs/2026-05-31-employee-plan-telegram-reminders-design.md`](superpowers/specs/2026-05-31-employee-plan-telegram-reminders-design.md) included these, deferred for v2:

- Individual DM reminders (employee self-links via `/start` token)
- 30-minute-before-start_time pings
- Per-school groups (current scope is per-plan groups)
- 7-day-before reminder tier
- Admin dashboard page for `employee_plan_reminder_logs`
- Two-way bot commands (`/today`, `/cancel`, etc.)

The unused `telegram_chat_id` column on `employees` and the `employee_telegram_link_tokens` table are left in the schema for future use; they're harmless if unused.
