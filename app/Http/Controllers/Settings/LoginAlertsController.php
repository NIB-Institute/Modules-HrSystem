<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\UpdateLoginAlertsRequest;
use App\Services\LoginAlertsService;
use App\Services\Notification\Channels\TelegramChannel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class LoginAlertsController extends Controller
{
    public function __construct(
        protected LoginAlertsService $service,
    ) {}

    public function update(UpdateLoginAlertsRequest $request): RedirectResponse
    {
        $this->service->update($request->validated());

        return back()->with('success', 'Login alert settings saved.');
    }

    public function clearToken(): RedirectResponse
    {
        $this->service->clearBotToken();

        return back()->with('success', 'Telegram bot token cleared.');
    }

    public function sendTest(Request $request): JsonResponse
    {
        $config = $this->service->get();
        $token = $config['bot_token'] ?? '';
        $chatId = $config['admin_chat_id'] ?? '';

        if ($token === '') {
            $this->service->recordTest('missing_token');
            return response()->json(['ok' => false, 'message' => 'Bot token not set. Save it first.'], 422);
        }
        if ($chatId === '') {
            $this->service->recordTest('missing_chat');
            return response()->json(['ok' => false, 'message' => 'Chat ID not set.'], 422);
        }

        try {
            $response = Http::post("https://api.telegram.org/bot{$token}/sendMessage", [
                'chat_id' => $chatId,
                'parse_mode' => 'HTML',
                'text' => "<b>✅ Login alerts — test</b>\n"
                    . 'Sent by ' . e($request->user()?->name ?? 'admin') . ' at ' . now()->format('Y-m-d H:i:s'),
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
