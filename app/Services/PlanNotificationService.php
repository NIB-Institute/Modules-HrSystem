<?php

namespace App\Services;

use App\Models\Setting;

class PlanNotificationService
{
    public const GROUP = 'plan_notifications';

    protected array $defaults = [
        'enabled' => true,
        'telegram_enabled' => true,
        'on_assignment' => true,
        'tier_3d' => true,
        'tier_1d' => true,
        'default_chat_id' => '',
        'last_test_at' => null,
        'last_test_status' => null,
    ];

    public function get(): array
    {
        $stored = Setting::getGroup(self::GROUP);

        return array_merge($this->defaults, $stored);
    }

    public function update(array $values): void
    {
        $types = [
            'enabled' => 'boolean',
            'telegram_enabled' => 'boolean',
            'on_assignment' => 'boolean',
            'tier_3d' => 'boolean',
            'tier_1d' => 'boolean',
            'default_chat_id' => 'string',
        ];

        foreach ($values as $key => $value) {
            if (! array_key_exists($key, $types)) {
                continue;
            }
            Setting::setValue(self::GROUP, $key, $value, $types[$key]);
        }
    }

    public function recordTest(string $status): void
    {
        Setting::setValue(self::GROUP, 'last_test_at', now()->toISOString(), 'string');
        Setting::setValue(self::GROUP, 'last_test_status', $status, 'string');
    }

    /**
     * Whether notifications for a given tier key ('on_assignment', 'tier_3d', 'tier_1d')
     * should fire at all, respecting the master switch and the Telegram channel switch.
     */
    public function isTierEnabled(string $tierKey): bool
    {
        $config = $this->get();

        if (! $config['enabled'] || ! $config['telegram_enabled']) {
            return false;
        }

        return (bool) ($config[$tierKey] ?? true);
    }

    /**
     * The chat ID a plan notification should be sent to: the settings-page
     * default takes priority (this is the page the user actually configures),
     * falling back to the plan's own telegram_group_chat_id only when no
     * default has been set.
     */
    public function resolveChatId(?string $planChatId = null): ?string
    {
        $default = trim((string) ($this->get()['default_chat_id'] ?? ''));

        return $default !== '' ? $default : ($planChatId ?: null);
    }
}
