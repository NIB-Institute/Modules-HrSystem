<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\UpdatePlanNotificationRequest;
use App\Services\LoginAlertsService;
use App\Services\PlanNotificationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;

class PlanNotificationController extends Controller
{
    public function __construct(
        protected PlanNotificationService $service,
        protected LoginAlertsService $loginAlerts,
    ) {}

    public function index(): Response
    {
        $loginAlertsData = $this->loginAlerts->getForDisplay();

        return Inertia::render('settings/employee/plan-notifications/Index', [
            'planNotifications' => $this->service->get(),
            'botStatus' => [
                'bot_token_set' => $loginAlertsData['bot_token_set'] ?? false,
                'bot_token_masked' => $loginAlertsData['bot_token_masked'] ?? '',
            ],
        ]);
    }

    public function update(UpdatePlanNotificationRequest $request): RedirectResponse
    {
        $this->service->update($request->validated());

        return back()->with('success', 'Plan notification settings saved.');
    }

    public function sendTest(): JsonResponse
    {
        $config = $this->service->get();
        $token = $this->loginAlerts->get()['bot_token'] ?? '';
        $chatId = $config['default_chat_id'] ?? '';

        if ($token === '') {
            $this->service->recordTest('missing_token');
            return response()->json(['ok' => false, 'message' => 'Bot token not set. Configure it in Login Alerts first.'], 422);
        }

        if ($chatId === '') {
            $this->service->recordTest('missing_chat');
            return response()->json(['ok' => false, 'message' => 'Default chat ID is empty.'], 422);
        }

        try {
            $response = Http::timeout(5)->post("https://api.telegram.org/bot{$token}/sendMessage", [
                'chat_id' => $chatId,
                'parse_mode' => 'HTML',
                'text' => "<b>📋 Plan Assignment — test</b>\n"
                    . 'This is a test message from the Plan Assignment Notification settings.',
            ]);

            if ($response->successful() && $response->json('ok')) {
                $this->service->recordTest('ok');
                return response()->json(['ok' => true, 'message' => 'Test message sent.']);
            }

            $err = $response->json('description') ?? 'Telegram API error';
            $this->service->recordTest('error:' . $err);
            return response()->json(['ok' => false, 'message' => $err], 422);
        } catch (\Throwable $e) {
            $this->service->recordTest('exception:' . $e->getMessage());
            return response()->json(['ok' => false, 'message' => $e->getMessage()], 500);
        }
    }
}
