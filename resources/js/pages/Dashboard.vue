<script setup lang="ts">
import { computed, ref } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { EmployeeWidget } from '@employee/Components/Widgets';
import { SchoolWidget } from '@school/Components/Widgets';
import { Settings, UserCheck, GraduationCap } from 'lucide-vue-next';
import type { BreadcrumbItem } from '@/types';
import type {
    EmployeeMetrics,
    AttendanceTrendPoint,
    GrowthTrendPoint as EmployeeGrowthTrendPoint,
    RecentEmployee,
} from '@employee/Components/Widgets';
import type {
    SchoolMetrics,
    DepartmentBySchool,
    GrowthTrendPoint as SchoolGrowthTrendPoint,
    RecentSchool,
} from '@school/Components/Widgets';
import { useTranslation } from '@/composables/useTranslation';

const {__ } = useTranslation();


interface EmployeeWidgetData {
    metrics: EmployeeMetrics;
    attendanceTrend: AttendanceTrendPoint[];
    growthTrend: EmployeeGrowthTrendPoint[];
    recentEmployees?: RecentEmployee[];
}

interface SchoolWidgetData {
    metrics: SchoolMetrics;
    departmentsBySchool: DepartmentBySchool[];
    growthTrend: SchoolGrowthTrendPoint[];
    recentSchools?: RecentSchool[];
}

interface DashboardWidget {
    id: number;
    name: string;
    module: string;
    chart_type: string | null;
    sort_order: number;
    status: boolean;
}

const props = defineProps<{
    employee?: EmployeeWidgetData;
    school?: SchoolWidgetData;
    widgets?: DashboardWidget[];
}>();

const employeeWidgets = computed(() =>
    (props.widgets ?? []).filter((w) => w.module === 'Employee'),
);
const schoolWidgets = computed(() =>
    (props.widgets ?? []).filter((w) => w.module === 'School'),
);

const breadcrumbs: BreadcrumbItem[] = [
    { title: __('Dashboard'), href: '/dashboard' },
];

const urlParams = new URLSearchParams(window.location.search);
const activeTab = ref<string>(urlParams.get('tab') || 'employee');
const dateRange = ref<string>('30d');
const loading = ref(false);

const handleDateRangeChange = (value: string) => {
    dateRange.value = value;
};
const handleRefresh = () => {
    window.location.reload();
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <Head :title="__('Dashboard')" />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl font-bold tracking-tight">{{ __('Dashboard') }}</h1>
                    <p class="text-muted-foreground">{{ __('Overview of your business modules') }}</p>
                </div>
                <Button variant="outline" as-child>
                    <Link href="/dashboard/settings">
                        <Settings class="mr-2 h-4 w-4" />
                       {{ __('Widget Settings') }}
                    </Link>
                </Button>
            </div>

            <Tabs v-model="activeTab" class="space-y-6">
                <TabsList>
                    <TabsTrigger value="employee">
                        <UserCheck class="mr-2 h-4 w-4" />
                        {{__('Employee')}}
                    </TabsTrigger>
                    <TabsTrigger value="school">
                        <GraduationCap class="mr-2 h-4 w-4" />
                        {{__('School')}}
                    </TabsTrigger>
                </TabsList>

                <TabsContent v-if="props.employee" value="employee" class="space-y-6">
                    <EmployeeWidget
                        :metrics="props.employee.metrics"
                        :attendance-trend="props.employee.attendanceTrend"
                        :growth-trend="props.employee.growthTrend"
                        :recent-employees="props.employee.recentEmployees"
                        :widgets="employeeWidgets"
                        :date-range="dateRange"
                        :loading="loading"
                        @date-range-change="handleDateRangeChange"
                        @refresh="handleRefresh"
                    />
                </TabsContent>

                <TabsContent v-if="props.school" value="school" class="space-y-6">
                    <SchoolWidget
                        :metrics="props.school.metrics"
                        :departments-by-school="props.school.departmentsBySchool"
                        :growth-trend="props.school.growthTrend"
                        :recent-schools="props.school.recentSchools"
                        :widgets="schoolWidgets"
                        :date-range="dateRange"
                        :loading="loading"
                        @date-range-change="handleDateRangeChange"
                        @refresh="handleRefresh"
                    />
                </TabsContent>
            </Tabs>
        </div>
    </AppLayout>
</template>
