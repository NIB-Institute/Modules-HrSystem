<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Services\LoginAlertsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;

class TelegramChatsController extends Controller
{
    public function __construct(
        protected LoginAlertsService $loginAlerts,
    ) {}

    public function index(): JsonResponse
    {
        $token = $this->loginAlerts->get()['bot_token'] ?? '';

        if ($token === '') {
            return response()->json([
                'ok' => false,
                'message' => 'Bot token not set. Configure it in Login Alerts first.',
                'chats' => [],
            ], 422);
        }

        try {
            $webhookInfo = Http::timeout(3)->get("https://api.telegram.org/bot{$token}/getWebhookInfo");
            $webhookUrl = $webhookInfo->json('result.url');
            if (! empty($webhookUrl)) {
                Http::timeout(3)->get("https://api.telegram.org/bot{$token}/deleteWebhook");
            }

            $response = Http::timeout(5)->get("https://api.telegram.org/bot{$token}/getUpdates");

            if (! $response->successful() || ! $response->json('ok')) {
                return response()->json([
                    'ok' => false,
                    'message' => $response->json('description') ?? 'Telegram API error',
                    'chats' => [],
                ], 422);
            }

            $updates = $response->json('result', []);
            $chats = [];

            foreach ($updates as $update) {
                $chat = $update['message']['chat']
                    ?? $update['edited_message']['chat']
                    ?? $update['channel_post']['chat']
                    ?? null;

                if (! $chat || ! isset($chat['id'])) {
                    continue;
                }

                $chatId = (string) $chat['id'];
                $chats[$chatId] = [
                    'id' => $chatId,
                    'type' => $chat['type'] ?? 'unknown',
                    'title' => $chat['title']
                        ?? trim(($chat['first_name'] ?? '') . ' ' . ($chat['last_name'] ?? ''))
                        ?: ('Chat ' . $chatId),
                ];
            }

            return response()->json([
                'ok' => true,
                'message' => count($chats) === 0
                    ? 'No recent chats. Send any message in the group/DM to your bot, then refresh.'
                    : null,
                'chats' => array_values($chats),
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'ok' => false,
                'message' => $e->getMessage(),
                'chats' => [],
            ], 500);
        }
    }
}
