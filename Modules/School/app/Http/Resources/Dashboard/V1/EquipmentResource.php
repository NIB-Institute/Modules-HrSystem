<?php

namespace Modules\School\Http\Resources\Dashboard\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Modules\School\Models\Equipment;

class EquipmentResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'name' => $this->name,
            'slug' => $this->slug,
            'icon' => $this->icon,
            'description' => $this->description,
            'category' => $this->category,
            'category_label' => $this->getCategoryLabel(),
            'status' => $this->status,
            'classrooms_count' => (int) ($this->classrooms_count ?? 0),
            // Only computed on the Show page -- omitted (not falsely 0) on Index.
            'inventory_count' => $this->when(
                array_key_exists('inventory_count', $this->resource->getAttributes()),
                fn () => (int) $this->inventory_count,
            ),
            'created_at' => $this->created_at?->toIso8601String(),
            'updated_at' => $this->updated_at?->toIso8601String(),
        ];
    }

    protected function getCategoryLabel(): string
    {
        $categories = Equipment::getCategories();
        return $categories[$this->category] ?? ucfirst($this->category);
    }
}
