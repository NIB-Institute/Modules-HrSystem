<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChartContainer,   } from '@/components/ui/chart';
import {
    VisXYContainer,
    VisStackedBar,
    VisAxis,
    VisArea,
    VisLine,
} from '@unovis/vue';
import {
    Users,
    UserCheck,
    Calendar,
    RefreshCw,
    ArrowUpRight,
    Building2,
    Mail,
    Eye,
    TrendingUp,
    ClipboardList,
    CalendarClock,
    UserPlus,
    ShieldAlert,
} from 'lucide-vue-next';
import { Link } from '@inertiajs/vue3';
import type { ChartConfig } from '@/components/ui/chart';
import { useTranslation } from '@/composables/useTranslation';

const {__}  = useTranslation();

// Types
export interface EmployeeMetrics {
    total: number;
    active: number;
    inactive: number;
    totalTypes: number;
    totalPlans: number;
    employeesWithPlan: number;
    plansWithEmployees: number;
    upcomingPlans: number;
    probationApproaching: number;
    // legacy attendance fields (no longer rendered)
    todayPresent?: number;
    todayAbsent?: number;
    attendanceRate?: number;
    growthPercent: number;
}

export interface PlanStatusPoint {
    label: string;
    status: string;
    value: number;
}

export interface UpcomingPlan {
    id: number;
    title: string;
    start_date: string | null;
    status: string;
    employees: number;
}

export interface AttendanceTrendPoint {
    label: string;
    date: string;
    present: number;
    absent: number;
}

export interface GrowthTrendPoint {
    label: string;
    value: number;
}

export interface RecentEmployee {
    id: number;
    name: string;
    email: string;
    type: string;
    status: string;
    created_at: string;
}

export interface DashboardWidgetItem {
    id: number;
    name: string;
    module: string;
    chart_type: string | null;
    sort_order: number;
    status: boolean;
}

export interface EmployeeWidgetProps {
    metrics: EmployeeMetrics;
    attendanceTrend?: AttendanceTrendPoint[];
    planStatusBreakdown?: PlanStatusPoint[];
    upcomingPlanList?: UpcomingPlan[];
    growthTrend: GrowthTrendPoint[];
    recentEmployees?: RecentEmployee[];
    widgets?: DashboardWidgetItem[];
    dateRange?: string;
    loading?: boolean;
    showStats?: boolean;
    showAttendance?: boolean;
    showPlans?: boolean;
    showGrowth?: boolean;
    showRecent?: boolean;
}

const props = withDefaults(defineProps<EmployeeWidgetProps>(), {
    attendanceTrend: () => [],
    planStatusBreakdown: () => [],
    upcomingPlanList: () => [],
    widgets: () => [],
    dateRange: '30d',
    loading: false,
    showStats: true,
    showAttendance: true,
    showPlans: true,
    showGrowth: true,
    showRecent: true,
});

const widgetByChartType = computed(() => {
    const map: Record<string, DashboardWidgetItem> = {};
    for (const w of props.widgets ?? []) {
        if (w.chart_type) map[w.chart_type] = w;
    }
    return map;
});

const orderOf = (chartType: string, fallback: number) => {
    return widgetByChartType.value[chartType]?.sort_order ?? fallback;
};

const enabled = (chartType: string, showProp: boolean) => {
    const widget = widgetByChartType.value[chartType];
    if (widget) return widget.status && showProp;
    return showProp;
};

const emit = defineEmits<{
    (e: 'dateRangeChange', value: string): void;
    (e: 'refresh'): void;
}>();

const selectedDateRange = ref(props.dateRange);

const dateRangeOptions = [
    { value: 'today', label: __('Today') },
    { value: '7d', label: __('Last 7 Days') },
    { value: '30d', label: __('Last 30 Days') },
    { value: '90d', label: __('Last 90 Days') },
    { value: 'year', label: __('This Year') },
];

// Chart configs
const growthChartConfig: ChartConfig = {
    value: { label: __('New Employees'), color: 'var(--chart-1)' },
};

const planStatusChartConfig: ChartConfig = {
    value: { label: __('Plans'), color: 'var(--chart-1)' },
};

const planStatusBadgeVariant = (status: string): 'default' | 'secondary' | 'destructive' | 'outline' => {
    switch (status) {
        case 'in_progress': return 'default';
        case 'completed': return 'secondary';
        case 'cancelled': return 'destructive';
        default: return 'outline'; // scheduled
    }
};

const formatPlanDate = (date: string | null): string => {
    if (!date) return '—';
    const d = new Date(date);
    return Number.isNaN(d.getTime()) ? date : d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
};

// Computed
const growthIndicator = computed(() => ({
    isPositive: props.metrics.growthPercent >= 0,
    value: Math.abs(props.metrics.growthPercent),
}));

watch(selectedDateRange, (newValue) => {
    emit('dateRangeChange', newValue);
});

const handleRefresh = () => {
    emit('refresh');
};

const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
};

const formatPercent = (num: number) => {
    return `${num.toFixed(1)}%`;
};

const getStatusBadgeVariant = (status: string | boolean): 'default' | 'secondary' | 'destructive' | 'outline' => {
    // Handle boolean status (true = active, false = inactive)
    if (typeof status === 'boolean') {
        return status ? 'default' : 'secondary';
    }
    // Handle string status
    switch (status?.toLowerCase?.() ?? '') {
        case 'active':
            return 'default';
        case 'inactive':
            return 'secondary';
        case 'suspended':
            return 'destructive';
        default:
            return 'outline';
    }
};

const formatStatus = (status: string | boolean): string => {
    if (typeof status === 'boolean') {
        return status ? __('Active') : __('Inactive');
    }
    return status || __('Unknown');
};
</script>

<template>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <!-- Header with Date Filter -->
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:col-span-2" :style="{ order: -1 }">
            <div>
                <h2 class="text-xl font-semibold tracking-tight">{{ __('Employee Overview') }}</h2>
                <p class="text-sm text-muted-foreground">{{ __('Employees, plan coverage and growth') }}</p>
            </div>
            <div class="flex items-center gap-2">
                <Select v-model="selectedDateRange">
                    <SelectTrigger class="w-[160px]">
                        <Calendar class="mr-2 h-4 w-4" />
                        <SelectValue :placeholder="__('Select period')" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem
                            v-for="option in dateRangeOptions"
                            :key="option.value"
                            :value="option.value"
                        >
                            {{ option.label }}
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline" size="icon" @click="handleRefresh" :disabled="loading">
                    <RefreshCw class="h-4 w-4" :class="{ 'animate-spin': loading }" />
                </Button>
            </div>
        </div>

        <!-- Key Metrics Grid -->
        <div v-if="enabled('stats', showStats)" :style="{ order: orderOf('stats', 1) }" class="grid gap-4 md:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">{{ __('Total Employees') }}</CardTitle>
                    <Users class="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ formatNumber(metrics.total) }}</div>
                    <div class="flex items-center text-xs">
                        <ArrowUpRight
                            v-if="growthIndicator.isPositive"
                            class="mr-1 h-3 w-3 text-green-500"
                        />
                        <span :class="growthIndicator.isPositive ? 'text-green-500' : 'text-red-500'">
                            {{ growthIndicator.isPositive ? '+' : '-' }}{{ formatPercent(growthIndicator.value) }}
                        </span>
                        <span class="ml-1 text-muted-foreground">{{ __('from last month') }}</span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">{{ __('Active Employees') }}</CardTitle>
                    <UserCheck class="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold text-green-600">{{ formatNumber(metrics.active) }}</div>
                    <p class="text-xs text-muted-foreground">
                        {{ formatNumber(metrics.inactive) }} {{ __('inactive') }}
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">{{ __('Employee Types') }}</CardTitle>
                    <Building2 class="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ formatNumber(metrics.totalTypes) }}</div>
                    <p class="text-xs text-muted-foreground">{{ __('Different job roles') }}</p>
                </CardContent>
            </Card>

            <!-- Employees assigned to at least one plan -->
            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">{{ __('Employees with a Plan') }}</CardTitle>
                    <UserPlus class="h-4 w-4 text-indigo-500" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold text-indigo-600">{{ formatNumber(metrics.employeesWithPlan) }}</div>
                    <p class="text-xs text-muted-foreground">
                        {{ formatPercent(metrics.total > 0 ? (metrics.employeesWithPlan / metrics.total) * 100 : 0) }} {{ __('of all employees') }}
                    </p>
                </CardContent>
            </Card>

            <!-- Plans that have at least one employee -->
            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">{{ __('Plans with Employees') }}</CardTitle>
                    <ClipboardList class="h-4 w-4 text-violet-500" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold text-violet-600">{{ formatNumber(metrics.plansWithEmployees) }}</div>
                    <p class="text-xs text-muted-foreground">
                        {{ __('of') }} {{ formatNumber(metrics.totalPlans) }} {{ __('total plans') }}
                    </p>
                </CardContent>
            </Card>

            <!-- Plans approaching their start date -->
            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">{{ __('Upcoming Plans') }}</CardTitle>
                    <CalendarClock class="h-4 w-4 text-amber-500" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold text-amber-600">{{ formatNumber(metrics.upcomingPlans) }}</div>
                    <p class="text-xs text-muted-foreground">{{ __('scheduled / in progress, approaching') }}</p>
                </CardContent>
            </Card>

            <!-- Employees whose probation ends within 30 days -->
            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">{{ __('Probation Ending') }}</CardTitle>
                    <ShieldAlert class="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold text-orange-600">{{ formatNumber(metrics.probationApproaching) }}</div>
                    <p class="text-xs text-muted-foreground">{{ __('within the next 30 days') }}</p>
                </CardContent>
            </Card>
        </div>

        <!-- Plans by Status Chart -->
        <Card v-if="enabled('bar', showPlans)" :style="{ order: orderOf('bar', 2) }">
                <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                        <ClipboardList class="h-5 w-5" />
                        {{ __('Plans by Status') }}
                    </CardTitle>
                    <CardDescription>{{ __('Distribution of employee plans') }}</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer :config="planStatusChartConfig" class="h-[280px]">
                        <VisXYContainer :data="planStatusBreakdown" :margin="{ top: 10, bottom: 30, left: 40, right: 10 }">
                            <VisStackedBar
                                :x="(_: PlanStatusPoint, i: number) => i"
                                :y="(d: PlanStatusPoint) => d.value"
                                :color="planStatusChartConfig.value.color"
                                :bar-padding="0.2"
                                :rounded-corners="4"
                            />
                            <VisAxis
                                type="x"
                                :tick-format="(i: number) => planStatusBreakdown[i]?.label || ''"
                            />
                            <VisAxis type="y" :num-ticks="5" />
                        </VisXYContainer>
                    </ChartContainer>
                </CardContent>
            </Card>

        <!-- Growth Trend Chart -->
        <Card v-if="enabled('area', showGrowth)" :style="{ order: orderOf('area', 3) }">
                <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                        <TrendingUp class="h-5 w-5" />
                        {{ __('Employee Growth (Last 6 Months)') }}
                    </CardTitle>
                    <CardDescription>{{ __('New employees over time') }}</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer :config="growthChartConfig" class="h-[280px]">
                        <VisXYContainer :data="growthTrend" :margin="{ top: 10, bottom: 30, left: 40, right: 10 }">
                            <VisArea
                                :x="(_: GrowthTrendPoint, i: number) => i"
                                :y="(d: GrowthTrendPoint) => d.value"
                                :color="growthChartConfig.value.color"
                                :opacity="0.3"
                            />
                            <VisLine
                                :x="(_: GrowthTrendPoint, i: number) => i"
                                :y="(d: GrowthTrendPoint) => d.value"
                                :color="growthChartConfig.value.color"
                                :line-width="2"
                            />
                            <VisAxis
                                type="x"
                                :tick-format="(i: number) => growthTrend[i]?.label || ''"
                            />
                            <VisAxis type="y" :num-ticks="5" />
                        </VisXYContainer>
                    </ChartContainer>
                </CardContent>
            </Card>

        <!-- Upcoming Plans -->
        <Card v-if="showPlans && upcomingPlanList && upcomingPlanList.length > 0" class="lg:col-span-2" :style="{ order: 900 }">
            <CardHeader>
                <div class="flex items-center justify-between">
                    <div>
                        <CardTitle class="flex items-center gap-2">
                            <CalendarClock class="h-5 w-5 text-primary" />
                            {{ __('Upcoming Plans') }}
                        </CardTitle>
                        <CardDescription>{{ __('Plans approaching their start date') }}</CardDescription>
                    </div>
                    <Link href="/dashboard/employee-plans" class="text-sm text-primary hover:underline">
                        {{ __('View All') }}
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <div class="space-y-3">
                    <div
                        v-for="plan in upcomingPlanList"
                        :key="plan.id"
                        class="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50"
                    >
                        <div class="flex items-center gap-3 min-w-0">
                            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <ClipboardList class="h-5 w-5" />
                            </div>
                            <div class="min-w-0">
                                <p class="font-medium truncate">{{ plan.title }}</p>
                                <div class="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Calendar class="h-3 w-3 shrink-0" />
                                    <span class="truncate">{{ formatPlanDate(plan.start_date) }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 shrink-0">
                            <div class="flex items-center gap-1 text-sm text-muted-foreground">
                                <Users class="h-3.5 w-3.5" />
                                <span>{{ formatNumber(plan.employees) }}</span>
                            </div>
                            <Badge :variant="planStatusBadgeVariant(plan.status)">
                                {{ __(plan.status.charAt(0).toUpperCase() + plan.status.slice(1).replace('_', ' ')) }}
                            </Badge>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <!-- Recent Employees -->
        <Card v-if="showRecent && recentEmployees && recentEmployees.length > 0" class="lg:col-span-2" :style="{ order: 999 }">
            <CardHeader>
                <div class="flex items-center justify-between">
                    <div>
                        <CardTitle class="flex items-center gap-2">
                            <Users class="h-5 w-5 text-primary" />
                            {{ __('Recent Employees') }}
                        </CardTitle>
                        <CardDescription>{{ __('Latest employees added to the system') }}</CardDescription>
                    </div>
                    <Link href="/dashboard/employees" class="text-sm text-primary hover:underline">
                        {{ __('View All') }}
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <div class="space-y-3">
                    <div
                        v-for="emp in recentEmployees"
                        :key="emp.id"
                        class="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50"
                    >
                        <div class="flex items-center gap-3">
                            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                                {{ emp.name.charAt(0).toUpperCase() }}
                            </div>
                            <div class="min-w-0">
                                <p class="font-medium truncate">{{ emp.name }}</p>
                                <div class="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Mail class="h-3 w-3 shrink-0" />
                                    <span class="truncate">{{ emp.email }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 shrink-0">
                            <div class="text-right">
                                <p class="text-sm text-muted-foreground">{{ emp.type }}</p>
                                <Badge :variant="getStatusBadgeVariant(emp.status)">
                                    {{ formatStatus(emp.status) }}
                                </Badge>
                            </div>
                            <Link
                                :href="`/dashboard/employees/${emp.id}`"
                                class="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            >
                                <Eye class="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
</template>
