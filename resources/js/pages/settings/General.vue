<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

import HeadingSmall from '@/components/HeadingSmall.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { type BreadcrumbItem } from '@/types';
import LoginAlertTelegram, { type LoginAlertTelegramData } from '@/components/widgets/LoginAlertTelegram.vue';

defineProps<{ loginAlerts: LoginAlertTelegramData; roles: string[] }>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'General settings', href: '/settings/general' },
];
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">

        <Head title="General settings" />

        <SettingsLayout>
            <div class="space-y-6">
                <HeadingSmall title="General"
                    description="Account-wide preferences. Configure Telegram login alerts below." />

                <LoginAlertTelegram :data="loginAlerts" :roles="roles" />
            </div>
        </SettingsLayout>
    </AppLayout>
</template>
