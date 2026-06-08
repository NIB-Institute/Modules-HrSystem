<?php

namespace App\Services;

use App\Models\Setting;
use Illuminate\Support\Facades\Crypt;

class LoginAlertsService
{
    public const GROUP = 'login_alerts';

    protected array $defaults = [
        'enabled' => false,
        'bot_token' => '',
        'admin_chat_id' => '-5244139148',
        'on_success' => true,
        'on_failed' => true,
        'on_logout' => false,
        'on_new_device' => true,
        'min_role' => null,
        'last_test_at' => null,
        'last_test_status' => null,
    ];

    public function get(): array
    {
        $stored = Setting::getGroup(self::GROUP);
        $merged = array_merge($this->defaults, $stored);

        if (!empty($merged['bot_token'])) {
            try {
                $merged['bot_token'] = Crypt::decryptString($merged['bot_token']);
            } catch (\Throwable) {
                $merged['bot_token'] = '';
            }
        }

        return $merged;
    }

    /** Returned to the frontend — bot_token masked. */
    public function getForDisplay(): array
    {
        $data = $this->get();
        $token = $data['bot_token'] ?? '';
        $data['bot_token_set'] = $token !== '';
        $data['bot_token_masked'] = $token !== ''
            ? str_repeat('•', max(0, strlen($token) - 4)) . substr($token, -4)
            : '';
        unset($data['bot_token']);

        return $data;
    }

    public function update(array $values): void
    {
        $types = [
            'enabled' => 'boolean',
            'bot_token' => 'string',
            'admin_chat_id' => 'string',
            'on_success' => 'boolean',
            'on_failed' => 'boolean',
            'on_logout' => 'boolean',
            'on_new_device' => 'boolean',
            'min_role' => 'string',
        ];

        foreach ($values as $key => $value) {
            if (!array_key_exists($key, $types)) {
                continue;
            }

            if ($key === 'bot_token') {
                if ($value === '' || $value === null) {
                    continue;
                }
                $value = Crypt::encryptString((string) $value);
            }

            Setting::setValue(self::GROUP, $key, $value, $types[$key]);
        }
    }

    public function clearBotToken(): void
    {
        Setting::setValue(self::GROUP, 'bot_token', '', 'string');
    }

    public function recordTest(string $status): void
    {
        Setting::setValue(self::GROUP, 'last_test_at', now()->toISOString(), 'string');
        Setting::setValue(self::GROUP, 'last_test_status', $status, 'string');
    }
}
