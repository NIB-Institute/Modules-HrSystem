<?php

use Illuminate\Support\Facades\Schedule;

/*
|--------------------------------------------------------------------------
| Scheduled Tasks
|--------------------------------------------------------------------------
|
| Server cron entry (required):
| * * * * * cd /path-to-project && php artisan schedule:run >> /dev/null 2>&1
|
*/

// Daily database backup at 2:00 AM
Schedule::command('backup:run --only-db --disable-notifications')
    ->dailyAt('02:00')
    ->name('daily-db-backup')
    ->withoutOverlapping()
    ->onOneServer();

// Weekly full backup on Sunday at 3:00 AM
Schedule::command('backup:run --disable-notifications')
    ->weeklyOn(0, '03:00')
    ->name('weekly-full-backup')
    ->withoutOverlapping()
    ->onOneServer();

// Clean old backups daily at 4:00 AM
Schedule::command('backup:clean --disable-notifications')
    ->dailyAt('04:00')
    ->name('cleanup-old-backups')
    ->withoutOverlapping()
    ->onOneServer();

// Hourly: dispatch Telegram group reminders for upcoming plan occurrences (T-3d, T-1d).
Schedule::command('employee:send-plan-reminders')
    ->hourly()
    ->name('employee-plan-reminders')
    ->withoutOverlapping()
    ->onOneServer();
