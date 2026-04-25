<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { EmployeeWidget } from '@employee/Components/Widgets';
import { SchoolWidget } from '@school/Components/Widgets';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
];

defineProps<{
    employee?: Record<string, unknown>;
    school?: Record<string, unknown>;
}>();
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex flex-col gap-6 p-6">
            <h1 class="text-2xl font-semibold">Dashboard</h1>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <EmployeeWidget v-if="employee" v-bind="employee" />
                <SchoolWidget v-if="school" v-bind="school" />
            </div>
        </div>
    </AppLayout>
</template>
