<script setup lang="ts">
import { ref } from 'vue';
import { router, useForm } from '@inertiajs/vue3';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { CheckCircle2, XCircle, Send, Eye, EyeOff, Trash2, AlertCircle } from 'lucide-vue-next';

export interface LoginAlertTelegramData {
    enabled: boolean;
    admin_chat_id: string;
    on_success: boolean;
    on_failed: boolean;
    on_logout: boolean;
    on_new_device: boolean;
    min_role: string | null;
    bot_token_set: boolean;
    bot_token_masked: string;
    last_test_at: string | null;
    last_test_status: string | null;
}

const props = defineProps<{ data: LoginAlertTelegramData; roles?: string[] }>();

const ANY_ROLE = '__any__';

const ROUTES = {
    update: '/settings/login-alerts',
    clearToken: '/settings/login-alerts/token',
    test: '/settings/login-alerts/test',
} as const;

const form = useForm({
    enabled: props.data.enabled,
    bot_token: '',
    admin_chat_id: props.data.admin_chat_id ?? '',
    on_success: props.data.on_success,
    on_failed: props.data.on_failed,
    on_logout: props.data.on_logout,
    on_new_device: props.data.on_new_device,
    min_role: props.data.min_role ?? ANY_ROLE,
});

const showToken = ref(false);
const testing = ref(false);
const testResult = ref<{ ok: boolean; message: string } | null>(null);

const eventToggles: Array<{ key: 'on_success' | 'on_failed' | 'on_logout' | 'on_new_device'; title: string; hint: string }> = [
    { key: 'on_success', title: 'Successful login', hint: '"User X logged in from Chrome on macOS"' },
    { key: 'on_failed', title: 'Failed login', hint: '"Failed login for email@... from 1.2.3.4"' },
    { key: 'on_logout', title: 'Logout', hint: 'Noisy — usually off.' },
    { key: 'on_new_device', title: 'New device / suspicious', hint: 'Recommended.' },
];

const formatDate = (iso: string | null) => (iso ? new Date(iso).toLocaleString() : null);

const csrfToken = () =>
    document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content ?? '';

const save = () => {
    form
        .transform((data) => ({
            ...data,
            min_role: data.min_role === ANY_ROLE ? '' : data.min_role,
        }))
        .patch(ROUTES.update, {
            preserveScroll: true,
            onSuccess: () => {
                form.bot_token = '';
            },
        });
};

const clearToken = () => {
    if (!confirm('Clear the saved Telegram bot token?')) return;
    router.delete(ROUTES.clearToken, { preserveScroll: true });
};

const sendTest = async () => {
    testing.value = true;
    testResult.value = null;
    try {
        const res = await fetch(ROUTES.test, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': csrfToken(),
                Accept: 'application/json',
            },
        });
        const body = await res.json();
        testResult.value = {
            ok: !!body.ok,
            message: body.message ?? (body.ok ? 'Sent.' : 'Failed.'),
        };
    } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : 'Network error';
        testResult.value = { ok: false, message: msg };
    } finally {
        testing.value = false;
    }
};
</script>

<template>
    <Card>
        <CardHeader>
            <div class="flex items-start justify-between gap-4">
                <div>
                    <CardTitle>Login Tracker — Telegram alerts</CardTitle>
                    <CardDescription>
                        Send a Telegram message every time someone signs in to the system.
                    </CardDescription>
                </div>
                <Badge :variant="form.enabled ? 'default' : 'secondary'">
                    {{ form.enabled ? 'ON' : 'OFF' }}
                </Badge>
            </div>
        </CardHeader>

        <CardContent class="space-y-6">
            <!-- Status pills -->
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div class="rounded-md border p-3 text-sm">
                    <div class="text-muted-foreground text-xs">Bot token</div>
                    <div class="mt-1 flex items-center gap-2">
                        <CheckCircle2 v-if="data.bot_token_set" class="h-4 w-4 text-green-600" />
                        <XCircle v-else class="h-4 w-4 text-red-500" />
                        <span>{{ data.bot_token_set ? 'Saved' : 'Not set' }}</span>
                    </div>
                </div>
                <div class="rounded-md border p-3 text-sm">
                    <div class="text-muted-foreground text-xs">Target chat</div>
                    <div class="mt-1 truncate font-mono text-xs">
                        {{ data.admin_chat_id || '—' }}
                    </div>
                </div>
                <div class="rounded-md border p-3 text-sm">
                    <div class="text-muted-foreground text-xs">Last test</div>
                    <div class="mt-1 text-xs">
                        <template v-if="data.last_test_at">
                            <span :class="data.last_test_status === 'ok' ? 'text-green-600' : 'text-red-500'">
                                {{ data.last_test_status === 'ok' ? '✓' : '✗' }}
                            </span>
                            {{ formatDate(data.last_test_at) }}
                        </template>
                        <span v-else class="text-muted-foreground">Never</span>
                    </div>
                </div>
            </div>

            <Separator />

            <!-- Master switch -->
            <div class="flex items-start justify-between gap-4">
                <div>
                    <Label class="text-base">Enable Telegram alerts</Label>
                    <p class="text-muted-foreground text-sm">Master switch. When off, no events fire.</p>
                </div>
                <Switch v-model="form.enabled" />
            </div>

            <Separator />

            <!-- Bot token -->
            <div class="space-y-2">
                <Label for="bot_token">Telegram bot token</Label>
                <div class="flex gap-2">
                    <Input id="bot_token" v-model="form.bot_token" :type="showToken ? 'text' : 'password'"
                        :placeholder="data.bot_token_set ? data.bot_token_masked : '123456789:ABC-DEF...'"
                        autocomplete="off" class="font-mono" />
                    <Button type="button" variant="outline" size="icon" @click="showToken = !showToken">
                        <Eye v-if="!showToken" class="h-4 w-4" />
                        <EyeOff v-else class="h-4 w-4" />
                    </Button>
                    <Button v-if="data.bot_token_set" type="button" variant="outline" size="icon" @click="clearToken">
                        <Trash2 class="h-4 w-4" />
                    </Button>
                </div>
                <p class="text-muted-foreground text-xs">Leave blank to keep the saved token. Encrypted at rest.</p>
                <p v-if="form.errors.bot_token" class="text-destructive text-xs">{{ form.errors.bot_token }}</p>
            </div>

            <!-- Chat ID -->
            <div class="space-y-2">
                <Label for="admin_chat_id">Chat / group ID</Label>
                <Input id="admin_chat_id" v-model="form.admin_chat_id" placeholder="-5244139148" class="font-mono" />
                <p class="text-muted-foreground text-xs">
                    Negative for a group (<code>-5244139148</code>), positive for a private chat.
                </p>
                <p v-if="form.errors.admin_chat_id" class="text-destructive text-xs">{{ form.errors.admin_chat_id }}</p>
            </div>

            <Separator />

            <!-- Event toggles -->
            <div class="space-y-3">
                <Label class="text-base">Notify on</Label>
                <div class="space-y-3">
                    <div v-for="ev in eventToggles" :key="ev.key" class="flex items-center justify-between">
                        <div>
                            <div class="text-sm">{{ ev.title }}</div>
                            <div class="text-muted-foreground text-xs">{{ ev.hint }}</div>
                        </div>
                        <Switch v-model="form[ev.key]" />
                    </div>
                </div>
            </div>

            <Separator />

            <!-- Role filter -->
            <div class="space-y-2">
                <Label for="min_role">Only notify when this role logs in</Label>
                <Select v-model="form.min_role">
                    <SelectTrigger id="min_role" class="w-full">
                        <SelectValue placeholder="Any role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem :value="ANY_ROLE">Any role</SelectItem>
                        <SelectItem v-for="role in roles ?? []" :key="role" :value="role">
                            {{ role }}
                        </SelectItem>
                    </SelectContent>
                </Select>
                <p class="text-muted-foreground text-xs">
                    Leave as "Any role" to notify for every login.
                </p>
                <p v-if="form.errors.min_role" class="text-destructive text-xs">{{ form.errors.min_role }}</p>
            </div>
        </CardContent>
    </Card>

    <!-- Unsaved-changes banner -->
    <div
        v-if="form.isDirty"
        class="flex items-center gap-2 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200"
    >
        <AlertCircle class="h-4 w-4 shrink-0" />
        <span>You have unsaved changes. Click <b>Save changes</b> to persist them.</span>
    </div>

    <!-- Actions -->
    <div class="flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-3">
            <Button type="button" variant="outline" :disabled="testing || !data.bot_token_set || !form.admin_chat_id"
                @click="sendTest">
                <Send class="mr-2 h-4 w-4" />
                {{ testing ? 'Sending…' : 'Send test message' }}
            </Button>
            <p v-if="testResult" :class="testResult.ok ? 'text-sm text-green-600' : 'text-destructive text-sm'">
                {{ testResult.message }}
            </p>
        </div>
        <Button type="button" :disabled="form.processing" @click="save">
            {{ form.processing ? 'Saving…' : 'Save changes' }}
        </Button>
    </div>
</template>
