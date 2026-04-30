<?php

namespace App\Http\Controllers;

use App\Models\Widget;
use App\Services\TenantService;
use Carbon\CarbonImmutable;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Employee\Models\Attendance;
use Modules\Employee\Models\Employee;
use Modules\Employee\Models\EmployeeType;
use Modules\School\Models\Classroom;
use Modules\School\Models\Department;
use Modules\School\Models\Program;
use Modules\School\Models\School;

class DashboardController extends Controller
{
    public function __construct(
        protected TenantService $tenantService,
    ) {}

    public function index(Request $request): Response
    {
        $widgets = Widget::dashboard()
            ->orderBy('sort_order')
            ->get(['id', 'name', 'module', 'chart_type', 'sort_order', 'status']);

        return Inertia::render('Dashboard', [
            'employee' => $this->employeeWidgetData(),
            'school' => $this->schoolWidgetData(),
            'widgets' => $widgets,
        ]);
    }

    private function employeeWidgetData(): array
    {
        $total = Employee::count();
        $active = Employee::where('status', true)->count();
        $today = today();
        $todayPresent = Attendance::whereDate('attendance_date', $today)->where('status', 'present')->count();
        $todayAbsent = Attendance::whereDate('attendance_date', $today)->where('status', 'absent')->count();
        $todayTotal = $todayPresent + $todayAbsent;

        return [
            'metrics' => [
                'total' => $total,
                'active' => $active,
                'inactive' => max($total - $active, 0),
                'totalTypes' => EmployeeType::count(),
                'todayPresent' => $todayPresent,
                'todayAbsent' => $todayAbsent,
                'attendanceRate' => $todayTotal > 0 ? round(($todayPresent / $todayTotal) * 100, 1) : 0,
                'growthPercent' => $this->growthPercent(Employee::class),
            ],
            'attendanceTrend' => $this->attendanceTrend(),
            'growthTrend' => $this->growthTrend(Employee::class),
            'recentEmployees' => Employee::latest()->limit(5)->get()->map(fn ($e) => [
                'id' => $e->id,
                'name' => trim(($e->first_name ?? '') . ' ' . ($e->last_name ?? '')),
                'email' => $e->email,
                'type' => (string) ($e->job_title ?? ''),
                'status' => $e->status ? 'active' : 'inactive',
                'created_at' => optional($e->created_at)->toIso8601String(),
            ])->all(),
        ];
    }

    private function schoolWidgetData(): array
    {
        $totalSchools = School::count();
        $activeSchools = School::where('status', true)->count();

        return [
            'metrics' => [
                'totalSchools' => $totalSchools,
                'activeSchools' => $activeSchools,
                'inactiveSchools' => max($totalSchools - $activeSchools, 0),
                'totalDepartments' => Department::count(),
                'totalPrograms' => Program::count(),
                'totalClassrooms' => Classroom::count(),
                'growthPercent' => $this->growthPercent(School::class),
            ],
            'departmentsBySchool' => School::withCount('departments')->limit(5)->get()->map(fn ($s) => [
                'id' => $s->id,
                'name' => $s->name,
                'departments' => $s->departments_count,
            ])->all(),
            'growthTrend' => $this->schoolGrowthTrend(),
            'recentSchools' => School::withCount(['departments', 'programs'])->latest()->limit(5)->get()->map(fn ($s) => [
                'id' => $s->id,
                'name' => $s->name,
                'status' => $s->status ? 'active' : 'inactive',
                'departments' => $s->departments_count,
                'programs' => $s->programs_count,
                'created_at' => optional($s->created_at)->toIso8601String(),
            ])->all(),
        ];
    }

    private function attendanceTrend(): array
    {
        $today = CarbonImmutable::today();

        return collect(range(6, 0))->map(function ($daysAgo) use ($today) {
            $date = $today->subDays($daysAgo);
            $present = Attendance::whereDate('attendance_date', $date)->where('status', 'present')->count();
            $absent = Attendance::whereDate('attendance_date', $date)->where('status', 'absent')->count();

            return [
                'label' => $date->format('D'),
                'date' => $date->toDateString(),
                'present' => $present,
                'absent' => $absent,
            ];
        })->all();
    }

    private function growthTrend(string $modelClass): array
    {
        $start = CarbonImmutable::now()->startOfMonth()->subMonths(5);

        return collect(range(0, 5))->map(function ($i) use ($start, $modelClass) {
            $month = $start->addMonths($i);
            $count = $modelClass::whereYear('created_at', $month->year)
                ->whereMonth('created_at', $month->month)
                ->count();

            return [
                'label' => $month->format('M'),
                'value' => $count,
            ];
        })->all();
    }

    private function schoolGrowthTrend(): array
    {
        $start = CarbonImmutable::now()->startOfMonth()->subMonths(5);

        return collect(range(0, 5))->map(function ($i) use ($start) {
            $month = $start->addMonths($i);

            return [
                'label' => $month->format('M'),
                'schools' => School::whereYear('created_at', $month->year)->whereMonth('created_at', $month->month)->count(),
                'departments' => Department::whereYear('created_at', $month->year)->whereMonth('created_at', $month->month)->count(),
                'classrooms' => Classroom::whereYear('created_at', $month->year)->whereMonth('created_at', $month->month)->count(),
            ];
        })->all();
    }

    private function growthPercent(string $modelClass): float
    {
        $current = $modelClass::whereMonth('created_at', now()->month)->whereYear('created_at', now()->year)->count();
        $previous = $modelClass::whereMonth('created_at', now()->subMonth()->month)->whereYear('created_at', now()->subMonth()->year)->count();

        if ($previous === 0) {
            return $current > 0 ? 100.0 : 0.0;
        }

        return round((($current - $previous) / $previous) * 100, 1);
    }
}
