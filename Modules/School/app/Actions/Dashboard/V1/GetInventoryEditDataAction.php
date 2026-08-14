<?php

namespace Modules\School\Actions\Dashboard\V1;

use Modules\Employee\Models\Employee;
use Modules\School\Http\Resources\Dashboard\V1\InventoryResource;
use Modules\School\Models\Classroom;
use Modules\School\Models\Department;
use Modules\School\Models\Equipment;
use Modules\School\Models\Inventory;

class GetInventoryEditDataAction
{
    public function execute(Inventory $inventory): array
    {
        $inventory->load(['assignedTo', 'assignedEmployee']);

        return [
            'inventory'     => (new InventoryResource($inventory))->resolve(),
            'statuses'      => Inventory::statuses(),
            'conditions'    => Inventory::conditions(),
            'equipment'     => Equipment::select('id', 'name')->orderBy('name')->get(),
            'classrooms'    => Classroom::select('id', 'name', 'department_id')
                ->orderBy('name')
                ->get(),
            'departments' => Department::select('id', 'name')->orderBy('name')->get(),
            // Bypass tenant scoping: who's a valid assignee isn't limited by the
            // viewing admin's own school scope.
            'employees' => Employee::withoutGlobalScopes()
                ->select('id', 'first_name', 'last_name', 'employee_code')
                ->orderBy('first_name')
                ->get()
                ->map(fn (Employee $e) => ['id' => $e->id, 'name' => $e->full_name, 'employee_code' => $e->employee_code]),
        ];
    }
}
