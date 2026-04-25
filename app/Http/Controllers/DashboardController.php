<?php

namespace App\Http\Controllers;

use App\Services\TenantService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Employee\Models\Employee;
use Modules\School\Models\School;

class DashboardController extends Controller
{
    public function __construct(
        protected TenantService $tenantService,
    ) {}

    public function index(Request $request): Response
    {
        return Inertia::render('Dashboard', [
            'employee' => $this->getEmployeeWidgetData(),
            'school' => $this->getSchoolWidgetData(),
        ]);
    }

    private function getEmployeeWidgetData(): array
    {
        return [
            'totalEmployees' => Employee::count(),
            'activeEmployees' => Employee::where('status', 'active')->count(),
        ];
    }

    private function getSchoolWidgetData(): array
    {
        return [
            'totalSchools' => School::count(),
            'activeSchools' => School::where('status', true)->count(),
        ];
    }
}
