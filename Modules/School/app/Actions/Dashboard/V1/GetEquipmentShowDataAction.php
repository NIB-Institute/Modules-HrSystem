<?php

namespace Modules\School\Actions\Dashboard\V1;

use Modules\School\Http\Resources\Dashboard\V1\EquipmentResource;
use Modules\School\Models\Equipment;
use Modules\School\Models\Inventory;

class GetEquipmentShowDataAction
{
    public function execute(Equipment $equipment): array
    {
        // Real "used in how many classrooms" count, derived from actual deployed
        // inventory instances -- see GetEquipmentIndexDataAction for why.
        $equipment->classrooms_count = Inventory::query()
            ->where('equipment_id', $equipment->id)
            ->whereNotNull('classroom_id')
            ->distinct('classroom_id')
            ->count('classroom_id');

        return [
            'equipment' => (new EquipmentResource($equipment))->resolve(),
        ];
    }
}
