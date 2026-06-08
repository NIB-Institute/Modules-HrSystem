<?php

namespace App\Listeners;

use App\Events\NewDeviceLogin;
use App\Services\IpLocationService;
use App\Services\LoginAlertsService;
use Illuminate\Auth\Events\Failed;
use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Logout;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Throwable;

class SendLoginAlertToTelegram
{
    public function __construct(
        protected LoginAlertsService $service,
        protected IpLocationService $locations,
    ) {}

    // Runs synchronously on purpose: a queued listener loses the original
    // request context (IP / user-agent), and we want those in the alert.
    public function handle(object $event): void
    {
        try {
            $this->dispatchAlert($event);
        } catch (Throwable $e) {
            Log::warning('SendLoginAlertToTelegram failed', [
                'event' => $event::class,
                'error' => $e->getMessage(),
            ]);
        }
    }

    protected function dispatchAlert(object $event): void
    {
        $config = $this->service->get();

        if (empty($config['enabled'])) {
            return;
        }

        $token = $config['bot_token'] ?? '';
        $chatId = $config['admin_chat_id'] ?? '';
        if ($token === '' || $chatId === '') {
            return;
        }

        $eventKey = match (true) {
            $event instanceof Login          => 'on_success',
            $event instanceof Failed         => 'on_failed',
            $event instanceof Logout         => 'on_logout',
            $event instanceof NewDeviceLogin => 'on_new_device',
            default                          => null,
        };
        if ($eventKey === null || empty($config[$eventKey])) {
            return;
        }

        $user = $this->resolveUser($event);
        if ($this->blockedByRoleFilter($config, $eventKey, $user)) {
            return;
        }

        $text = $this->buildMessage($event, $user);

        Http::timeout(5)->post("https://api.telegram.org/bot{$token}/sendMessage", [
            'chat_id' => $chatId,
            'parse_mode' => 'HTML',
            'disable_web_page_preview' => true,
            'text' => $text,
        ]);
    }

    protected function resolveUser(object $event): ?object
    {
        if (property_exists($event, 'user') && $event->user) {
            return $event->user;
        }

        return null;
    }

    protected function blockedByRoleFilter(array $config, string $eventKey, ?object $user): bool
    {
        $minRole = $config['min_role'] ?? null;
        if (empty($minRole)) {
            return false;
        }

        // Role filter only gates success/logout. Failed + new-device are
        // security signals that always fire.
        if (in_array($eventKey, ['on_failed', 'on_new_device'], true)) {
            return false;
        }

        if (! $user || ! method_exists($user, 'hasRole')) {
            return true;
        }

        return ! $user->hasRole($minRole);
    }

    protected function buildMessage(object $event, ?object $user): string
    {
        $request = request();
        $ip = $request?->ip() ?? '—';
        $ua = $request?->userAgent();
        $browser = $this->parseBrowser($ua);
        $platform = $this->parsePlatform($ua);
        $location = $this->locations->lookup($ip);
        $time = now()->format('Y-m-d H:i:s');

        $header = match (true) {
            $event instanceof Login => '🟢 Login',
            $event instanceof Failed => '🔴 Failed login',
            $event instanceof Logout => '⚪ Logout',
            $event instanceof NewDeviceLogin => ($event->isSuspicious ? '⚠️ Suspicious login' : '🟡 New device login'),
            default => '',
        };

        $identityLine = $event instanceof Failed
            ? '<b>Attempted:</b> ' . e($event->credentials['email'] ?? $event->credentials['username'] ?? 'Unknown')
            : $this->userLine($user);

        $deviceLine = $event instanceof Logout
            ? null
            : "<b>Device:</b> {$browser} / {$platform}";

        $lines = array_filter([
            "<b>{$header}</b>",
            $identityLine,
            "<b>IP:</b> <code>{$ip}</code>",
            '<b>Location:</b> ' . e($location['label']),
            $location['isp'] ? '<b>ISP:</b> ' . e($location['isp']) : null,
            $location['map_url'] ? '<b>Map:</b> <a href="' . e($location['map_url']) . '">Open in Maps</a>' : null,
            $deviceLine,
            "<b>Time:</b> {$time}",
        ]);

        return implode("\n", $lines);
    }

    protected function userLine(?object $user): string
    {
        $name = e($user->name ?? 'Unknown user');
        $email = e($user->email ?? '');

        return '<b>User:</b> ' . $name . ($email !== '' ? " ({$email})" : '');
    }

    protected function parseBrowser(?string $ua): string
    {
        if (! $ua) return 'Unknown';

        return match (true) {
            (bool) preg_match('/Edge|Edg/i', $ua) => 'Edge',
            (bool) preg_match('/Chrome/i', $ua) => 'Chrome',
            (bool) preg_match('/Firefox/i', $ua) => 'Firefox',
            (bool) preg_match('/Safari/i', $ua) => 'Safari',
            (bool) preg_match('/Opera|OPR/i', $ua) => 'Opera',
            (bool) preg_match('/MSIE|Trident/i', $ua) => 'IE',
            default => 'Unknown',
        };
    }

    protected function parsePlatform(?string $ua): string
    {
        if (! $ua) return 'Unknown';

        return match (true) {
            (bool) preg_match('/Windows/i', $ua) => 'Windows',
            (bool) preg_match('/iPhone|iPad|iPod/i', $ua) => 'iOS',
            (bool) preg_match('/Android/i', $ua) => 'Android',
            (bool) preg_match('/Macintosh|Mac OS/i', $ua) => 'macOS',
            (bool) preg_match('/Linux/i', $ua) => 'Linux',
            default => 'Unknown',
        };
    }
}
