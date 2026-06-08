<script setup lang="ts">
import { ref } from 'vue';
import { Head } from '@inertiajs/vue3';

import HeadingSmall from '@/components/HeadingSmall.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { InnerSidebarNav, type InnerSidebarItem } from '@/components/shared';
import { type BreadcrumbItem } from '@/types';
import PlanAssignmentTelegram, {
    type BotStatus,
    type PlanNotificationData,
} from '@/components/widgets/PlanAssignmentTelegram.vue';
import { Send, Smartphone, Mail } from 'lucide-vue-next';

defineProps<{ planNotifications: PlanNotificationData; botStatus: BotStatus }>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Workshop Notification', href: '/settings/employee/plan-notifications' },
];

const channels: InnerSidebarItem[] = [
    { key: 'telegram', title: 'Telegram', icon: Send },
    { key: 'fcm', title: 'FCM Push', icon: Smartphone, badge: 'Soon' },
    { key: 'email', title: 'Email', icon: Mail, badge: 'Soon' },
];

const active = ref<string>('telegram');
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">

        <Head title="Workshop Notification" />

        <SettingsLayout>
            <div class="space-y-6">
                <HeadingSmall
                    title="Workshop Notification"
                    description="Configure notification channels for plan assignments and reminders."
                />

                <InnerSidebarNav v-model="active" :items="channels">
                    <template #default="{ active: current }">
                        <!-- Telegram -->
                        <PlanAssignmentTelegram
                            v-if="current === 'telegram'"
                            :data="planNotifications"
                            :bot-status="botStatus"
                        />

                        <!-- FCM Push placeholder -->
                        <Card v-else-if="current === 'fcm'">
                            <CardHeader>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <CardTitle>FCM Push Notifications</CardTitle>
                                        <CardDescription>
                                            Push to mobile/web devices via Firebase Cloud Messaging.
                                        </CardDescription>
                                    </div>
                                    <Badge variant="secondary">Coming soon</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p class="text-sm text-muted-foreground">
                                    Not yet implemented. When enabled, plan-assignment and countdown reminders
                                    will be delivered to user devices via FCM.
                                </p>
                            </CardContent>
                        </Card>

                        <!-- Email placeholder -->
                        <Card v-else>
                            <CardHeader>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <CardTitle>Email Notifications</CardTitle>
                                        <CardDescription>
                                            Send notifications to assigned employees via email.
                                        </CardDescription>
                                    </div>
                                    <Badge variant="secondary">Coming soon</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p class="text-sm text-muted-foreground">
                                    Not yet implemented. When enabled, plan-assignment and countdown reminders
                                    will be sent to each employee's registered email address.
                                </p>
                            </CardContent>
                        </Card>
                    </template>
                </InnerSidebarNav>
            </div>
        </SettingsLayout>
    </AppLayout>
</template>
