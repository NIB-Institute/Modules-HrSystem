<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

import HeadingSmall from '@/components/HeadingSmall.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { type BreadcrumbItem } from '@/types';
import PlanAssignmentTelegram, {
    type BotStatus,
    type PlanNotificationData,
} from '@/components/widgets/PlanAssignmentTelegram.vue';

defineProps<{ planNotifications: PlanNotificationData; botStatus: BotStatus }>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Workshop Notification', href: '/settings/employee/plan-notifications' },
];
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">

        <Head title="Workshop Notification" />

        <SettingsLayout>
            <div class="space-y-6">
                <HeadingSmall
                    title="Workshop Notification"
                    description="One central Telegram chat for all workshop/plan notifications — assignments + countdown reminders."
                />

                <PlanAssignmentTelegram :data="planNotifications" :bot-status="botStatus" />
            </div>
        </SettingsLayout>
    </AppLayout>
</template>
