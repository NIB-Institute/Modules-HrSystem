<?php

namespace App\Http\Requests\Settings;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePlanNotificationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user() !== null;
    }

    public function rules(): array
    {
        return [
            'enabled' => ['required', 'boolean'],
            'telegram_enabled' => ['required', 'boolean'],
            'on_assignment' => ['required', 'boolean'],
            'tier_3d' => ['required', 'boolean'],
            'tier_1d' => ['required', 'boolean'],
            'default_chat_id' => ['nullable', 'string', 'regex:/^-?\d+$/'],
        ];
    }

    public function messages(): array
    {
        return [
            'default_chat_id.regex' => 'Chat ID must be numeric (e.g. -5244139148 for a group).',
        ];
    }
}
