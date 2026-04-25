<?php

namespace App\Http\Controllers;

use App\Services\TenantService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Employee\Models\Employee;
use Modules\Employee\Models\EmployeeType;
use Modules\Employee\Models\Attendance;
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
        return Inertia::render('Dashboard', [
            'employee' => $this->employeeWidgetData(),
            'school' => $this->schoolWidgetData(),
        ]);
    }

    private function employeeWidgetData(): array
    {
        $total = Employee::count();
        $active = Employee::where('status', 'active')->count();

        return [
            'metrics' => [
                'total' => $total,
                'active' => $active,
                'inactive' => max($total - $active, 0),
                'totalTypes' => EmployeeType::count(),
                'todayPresent' => Attendance::whereDate('date', today())->where('status', 'present')->count(),
                'todayAbsent' => Attendance::whereDate('date', today())->where('status', 'absent')->count(),
                'attendanceRate' => 0,
                'growthPercent' => 0,
            ],
            'attendanceTrend' => [],
            'growthTrend' => [],
            'recentEmployees' => [],
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
                'growthPercent' => 0,
            ],
            'departmentsBySchool' => [],
            'growthTrend' => [],
            'recentSchools' => [],
        ];
    }
}
