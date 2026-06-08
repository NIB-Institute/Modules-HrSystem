<?php

namespace App\Http\Requests\Settings;

use Illuminate\Foundation\Http\FormRequest;

class UpdateLoginAlertsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user() !== null;
    }

    public function rules(): array
    {
        return [
            'enabled' => ['required', 'boolean'],
            'bot_token' => ['nullable', 'string', 'max:255'],
            'admin_chat_id' => ['nullable', 'string', 'regex:/^-?\d+$/'],
            'on_success' => ['required', 'boolean'],
            'on_failed' => ['required', 'boolean'],
            'on_logout' => ['required', 'boolean'],
            'on_new_device' => ['required', 'boolean'],
            'min_role' => ['nullable', 'string', 'max:64'],
        ];
    }

    public function messages(): array
    {
        return [
            'admin_chat_id.regex' => 'Chat ID must be numeric (e.g. -5244139148 for a group, 123456789 for a user).',
        ];
    }
}
