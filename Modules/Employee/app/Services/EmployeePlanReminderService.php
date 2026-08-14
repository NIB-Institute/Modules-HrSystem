<?php

namespace Modules\Employee\Services;

use App\Services\PlanNotificationService;
use Carbon\CarbonImmutable;
use Modules\Employee\Enums\EmployeePlanAssignmentEnum;
use Modules\Employee\Enums\EmployeePlanReminderTierEnum;
use Modules\Employee\Models\EmployeePlan;
use Modules\Employee\Models\EmployeePlanReminderLog;

/**
 * Finds (plan_id, occurrence_date, tier) triples whose fire-window contains $now,
 * and that don't already have a reminder_log row.
 *
 * One message per plan per occurrence (lists all active assignees).
 */
class EmployeePlanReminderService
{
    public function __construct(
        private readonly EmployeePlanOccurrenceCalculator $calculator,
        private readonly PlanNotificationService $planNotifications,
    ) {
    }

    /**
     * @return array<int, array{plan_id:int, occurrence_date:string, tier:string}>
     */
    public function findDue(CarbonImmutable $now): array
    {
        $tiers = array_filter([
            $this->planNotifications->isTierEnabled('tier_3d') ? EmployeePlanReminderTierEnum::GROUP_3D : null,
            $this->planNotifications->isTierEnabled('tier_1d') ? EmployeePlanReminderTierEnum::GROUP_1D : null,
        ]);

        if (empty($tiers)) {
            return []; // Master switch off, Telegram channel off, or both tiers disabled.
        }

        // Lookahead window: longest tier is 3 days, plus 1 day slack.
        $lookaheadEnd = $now->addDays(4);

        // A plan is eligible once it resolves to SOME chat ID (the settings-page
        // default, or its own telegram_group_chat_id) and has an active assignee.
        // We can't filter the chat ID in SQL since the default lives in Settings,
        // so pull plans with active assignees and resolve/skip per-plan below.
        $plans = EmployeePlan::query()
            ->whereHas('assignments', function ($q) {
                $q->whereIn('status', [
                    EmployeePlanAssignmentEnum::STATUS_ASSIGNED,
                    EmployeePlanAssignmentEnum::STATUS_IN_PROGRESS,
                ]);
            })
            ->get();

        $due = [];

        foreach ($plans as $plan) {
            if (! $this->planNotifications->resolveChatId($plan->telegram_group_chat_id)) {
                continue;
            }

            $occurrences = $this->calculator->occurrencesBetween(
                $plan,
                $now->startOfDay(),
                $lookaheadEnd->endOfDay(),
            );

            foreach ($occurrences as $occurrence) {
                foreach ($tiers as $tier) {
                    if (! $this->isInFireWindow($now, $occurrence, $tier)) {
                        continue;
                    }

                    if ($this->alreadyLogged($plan->id, $occurrence->toDateString(), $tier->value)) {
                        continue;
                    }

                    $due[] = [
                        'plan_id' => $plan->id,
                        'occurrence_date' => $occurrence->toDateString(),
                        'tier' => $tier->value,
                    ];
                }
            }
        }

        return $due;
    }

    /**
     * Returns true if `$now` is inside the 1-hour fire window for this tier.
     */
    private function isInFireWindow(CarbonImmutable $now, CarbonImmutable $occurrence, EmployeePlanReminderTierEnum $tier): bool
    {
        $windowStart = $occurrence
            ->subDays($tier->daysBefore())
            ->setTime($tier->fireHour(), 0, 0);
        $windowEnd = $windowStart->addHour();

        return $now->greaterThanOrEqualTo($windowStart) && $now->lessThan($windowEnd);
    }

    private function alreadyLogged(int $planId, string $occurrenceDate, string $tier): bool
    {
        return EmployeePlanReminderLog::where('employee_plan_id', $planId)
            ->whereDate('occurrence_date', $occurrenceDate)
            ->where('tier', $tier)
            ->exists();
    }
}
