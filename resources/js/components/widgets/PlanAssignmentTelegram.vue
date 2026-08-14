<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

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
import { CheckCircle2, XCircle, Send, AlertCircle, RefreshCw } from 'lucide-vue-next';

export interface PlanNotificationData {
    enabled: boolean;
    telegram_enabled: boolean;
    on_assignment: boolean;
    tier_3d: boolean;
    tier_1d: boolean;
    default_chat_id: string;
    last_test_at: string | null;
    last_test_status: string | null;
}

export interface BotStatus {
    bot_token_set: boolean;
    bot_token_masked: string;
}

interface AvailableChat {
    id: string;
    type: string;
    title: string;
}

const props = defineProps<{ data: PlanNotificationData; botStatus: BotStatus }>();

const ROUTES = {
    update: '/settings/employee/plan-notifications',
    test: '/settings/employee/plan-notifications/test',
    availableChats: '/settings/telegram/available-chats',
} as const;

const form = useForm({
    enabled: props.data.enabled,
    telegram_enabled: props.data.telegram_enabled,
    on_assignment: props.data.on_assignment,
    tier_3d: props.data.tier_3d,
    tier_1d: props.data.tier_1d,
    default_chat_id: props.data.default_chat_id ?? '',
});

const testing = ref(false);
const testResult = ref<{ ok: boolean; message: string } | null>(null);

const availableChats = ref<AvailableChat[]>([]);
const loadingChats = ref(false);
const chatPickerError = ref<string | null>(null);

const tierToggles: Array<{ key: 'on_assignment' | 'tier_3d' | 'tier_1d'; title: string; hint: string }> = [
    { key: 'on_assignment', title: 'New assignment created', hint: 'Fires immediately when an employee is assigned to a plan.' },
    { key: 'tier_3d', title: '3 days before plan starts', hint: 'Heads-up reminder to the team.' },
    { key: 'tier_1d', title: '1 day before plan starts', hint: 'Final reminder.' },
];

const formatDate = (iso: string | null) => (iso ? new Date(iso).toLocaleString() : null);

const csrfToken = () =>
    document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content ?? '';

const save = () => {
    form.patch(ROUTES.update, { preserveScroll: true });
};

const fetchChats = async () => {
    loadingChats.value = true;
    chatPickerError.value = null;
    try {
        const res = await fetch(ROUTES.availableChats, {
            credentials: 'same-origin',
            headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        });
        const body = await res.json();
        availableChats.value = body.chats ?? [];
        if (!body.ok && body.message) chatPickerError.value = body.message;
        if (body.ok && body.message) chatPickerError.value = body.message;
    } catch (e: unknown) {
        chatPickerError.value = e instanceof Error ? e.message : 'Network error';
    } finally {
        loadingChats.value = false;
    }
};

const pickChat = (chatId: string) => {
    form.default_chat_id = chatId;
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
        testResult.value = { ok: !!body.ok, message: body.message ?? (body.ok ? 'Sent.' : 'Failed.') };
    } catch (e: unknown) {
        testResult.value = { ok: false, message: e instanceof Error ? e.message : 'Network error' };
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
                    <CardTitle>Workshop Notification</CardTitle>
                    <CardDescription>
                        One chat receives notifications for ALL plans — on assignment and before each plan starts.
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
                    <div class="text-muted-foreground text-xs">Bot token (shared)</div>
                    <div class="mt-1 flex items-center gap-2">
                        <CheckCircle2 v-if="botStatus.bot_token_set" class="h-4 w-4 text-green-600" />
                        <XCircle v-else class="h-4 w-4 text-red-500" />
                        <span>{{ botStatus.bot_token_set ? 'Saved' : 'Not set' }}</span>
                    </div>
                </div>
                <div class="rounded-md border p-3 text-sm">
                    <div class="text-muted-foreground text-xs">Default chat</div>
                    <div class="mt-1 truncate font-mono text-xs">
                        {{ form.default_chat_id || '—' }}
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
                    <Label class="text-base">Enable plan notifications</Label>
                    <p class="text-muted-foreground text-sm">Master switch. When off, no notifications fire.</p>
                </div>
                <Switch v-model="form.enabled" />
            </div>

            <!-- Channel toggle (room for Email/FCM later) -->
            <div class="flex items-start justify-between gap-4">
                <div>
                    <Label class="text-base">Telegram channel</Label>
                    <p class="text-muted-foreground text-sm">Send notifications via Telegram. (Email / Push coming later.)</p>
                </div>
                <Switch v-model="form.telegram_enabled" />
            </div>

            <Separator />

            <!-- Tier toggles -->
            <div class="space-y-3">
                <Label class="text-base">Send notification on</Label>
                <div class="space-y-3">
                    <div v-for="t in tierToggles" :key="t.key" class="flex items-center justify-between">
                        <div>
                            <div class="text-sm">{{ t.title }}</div>
                            <div class="text-muted-foreground text-xs">{{ t.hint }}</div>
                        </div>
                        <Switch v-model="form[t.key]" />
                    </div>
                </div>
            </div>

            <Separator />

            <!-- Default chat ID with picker -->
            <div class="space-y-2">
                <Label for="default_chat_id">Default chat / group ID</Label>
                <Input id="default_chat_id" v-model="form.default_chat_id" placeholder="-5244139148" class="font-mono" />
                <p class="text-muted-foreground text-xs">
                    All plan notifications (assignments + countdown reminders) post to this chat. A plan's own group chat ID is only used as a fallback when this is left empty.
                </p>
                <p v-if="form.errors.default_chat_id" class="text-destructive text-xs">{{ form.errors.default_chat_id }}</p>

                <!-- Chat picker -->
                <div class="flex items-center gap-2 pt-2">
                    <Button type="button" variant="outline" size="sm" :disabled="loadingChats || !botStatus.bot_token_set" @click="fetchChats">
                        <RefreshCw class="mr-2 h-3 w-3" :class="{ 'animate-spin': loadingChats }" />
                        {{ loadingChats ? 'Loading…' : 'Pick from bot-seen chats' }}
                    </Button>
                    <Select v-if="availableChats.length > 0" @update:model-value="(v) => pickChat(String(v))">
                        <SelectTrigger class="max-w-xs">
                            <SelectValue placeholder="Choose a chat…" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem v-for="chat in availableChats" :key="chat.id" :value="chat.id">
                                {{ chat.title }} ({{ chat.type }}, {{ chat.id }})
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <p v-if="chatPickerError" class="text-muted-foreground text-xs">{{ chatPickerError }}</p>
            </div>
        </CardContent>
    </Card>

    <!-- Unsaved-changes banner -->
    <div
        v-if="form.isDirty"
        class="mt-4 flex items-center gap-2 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200"
    >
        <AlertCircle class="h-4 w-4 shrink-0" />
        <span>You have unsaved changes. Click <b>Save changes</b> to persist them.</span>
    </div>

    <!-- Actions -->
    <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-3">
            <Button type="button" variant="outline" :disabled="testing || !botStatus.bot_token_set || !form.default_chat_id"
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
