<?php

namespace Modules\Employee\Actions\Dashboard\V1;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Modules\Employee\Models\Employee;

class UpdateEmployeeAction
{
    public function execute(Employee $employee, array $data): Employee
    {
        return DB::transaction(function () use ($employee, $data) {
            // Extract related data
            $familyMembers = $data['family_members'] ?? null;
            $academicLevels = $data['academic_levels'] ?? null;
            $foreignLanguages = $data['foreign_languages'] ?? null;
            $jobExperiences = $data['job_experiences'] ?? null;
            $idCards = $data['id_cards'] ?? null;

            unset(
                $data['family_members'],
                $data['academic_levels'],
                $data['foreign_languages'],
                $data['job_experiences'],
                $data['id_cards']
            );

            // Update employee
            $data['updated_by'] = Auth::id();
            $employee->update($data);

            // Sync family members if provided
            if ($familyMembers !== null) {
                $this->syncRelatedData($employee, 'familyMembers', $familyMembers, 'name');
            }

            // Sync academic levels if provided
            if ($academicLevels !== null) {
                $this->syncRelatedData($employee, 'academicLevels', $academicLevels, 'institution');
            }

            // Sync foreign languages if provided
            if ($foreignLanguages !== null) {
                $this->syncRelatedData($employee, 'foreignLanguages', $foreignLanguages, 'language');
            }

            // Sync job experiences if provided
            if ($jobExperiences !== null) {
                $this->syncRelatedData($employee, 'jobExperiences', $jobExperiences, 'company');
            }

            // Sync ID cards if provided
            if ($idCards !== null) {
                $this->syncIdCards($employee, $idCards);
            }

            return $employee->fresh(['familyMembers', 'academicLevels', 'foreignLanguages', 'jobExperiences', 'idCards']);
        });
    }

    /**
     * Generic method to sync related data.
     * Creates new, updates existing, and soft deletes removed items.
     */
    protected function syncRelatedData(Employee $employee, string $relationship, array $items, string $requiredField): void
    {
        // Get IDs of items in the request
        $submittedIds = collect($items)
            ->filter(fn ($item) => isset($item['id']))
            ->pluck('id')
            ->toArray();

        // Soft delete items not in the request
        $employee->$relationship()
            ->whereNotIn('id', $submittedIds)
            ->delete();

        // Create or update items
        foreach ($items as $itemData) {
            // Remove Vue-specific keys
            unset($itemData['_key']);

            // Skip if required field is empty
            if (empty($itemData[$requiredField])) {
                continue;
            }

            // Clean empty strings to null
            $itemData = $this->cleanEmptyStrings($itemData);

            if (isset($itemData['id'])) {
                // Update existing item
                $item = $employee->$relationship()->find($itemData['id']);
                if ($item) {
                    unset($itemData['id']);
                    $item->update($itemData);
                }
            } else {
                // Create new item
                unset($itemData['id']);
                $employee->$relationship()->create($itemData);
            }
        }
    }

    /**
     * Sync ID cards: an item is "real" if it has a number OR an image URL.
     * Ensures at most one is_primary; if none marked, the first becomes primary.
     */
    protected function syncIdCards(Employee $employee, array $items): void
    {
        $submittedIds = collect($items)
            ->filter(fn ($i) => isset($i['id']))
            ->pluck('id')
            ->toArray();

        $employee->idCards()
            ->whereNotIn('id', $submittedIds)
            ->delete();

        $primarySeen = false;
        foreach ($items as $idx => $card) {
            unset($card['_key']);

            $isEmpty = empty($card['card_number'])
                && empty($card['front_url'])
                && empty($card['back_url'])
                && empty($card['label']);
            if ($isEmpty) {
                continue;
            }

            $card = $this->cleanEmptyStrings($card);
            $card['is_primary'] = (bool) ($card['is_primary'] ?? false);
            $card['sort_order'] = $card['sort_order'] ?? $idx;

            if ($card['is_primary']) {
                $primarySeen = true;
            }

            if (isset($card['id'])) {
                if ($item = $employee->idCards()->find($card['id'])) {
                    $id = $card['id'];
                    unset($card['id']);
                    $item->update($card);
                }
            } else {
                unset($card['id']);
                $employee->idCards()->create($card);
            }
        }

        if (! $primarySeen) {
            $first = $employee->idCards()->orderBy('sort_order')->first();
            if ($first) {
                $employee->idCards()->where('id', '!=', $first->id)->update(['is_primary' => false]);
                $first->update(['is_primary' => true]);
            }
        }
    }

    /**
     * Convert empty strings to null for all fields.
     */
    protected function cleanEmptyStrings(array $data): array
    {
        foreach ($data as $key => $value) {
            if ($value === '') {
                $data[$key] = null;
            }
        }

        return $data;
    }
}
