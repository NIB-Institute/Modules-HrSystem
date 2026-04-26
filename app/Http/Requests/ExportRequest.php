<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Shared validation for the column-selectable export feature.
 *
 * Every controller that wires the reusable <ExportDialog /> should
 * type-hint this in place of Request when handling the export and
 * download-template endpoints.
 *
 * Inputs:
 *   columns[]   selected column slugs (empty = all)
 *   format      'xlsx' or 'csv'
 *   mode        'export' for data, 'template' for an empty template
 *   filters     additional table filters (search, status, etc.)
 */
class ExportRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'columns'   => ['sometimes', 'array'],
            'columns.*' => ['string', 'max:64'],
            'format'    => ['sometimes', 'in:xlsx,csv'],
            'mode'      => ['sometimes', 'in:export,template'],
            'filters'   => ['sometimes', 'array'],
        ];
    }

    /**
     * @return array<int, string>
     */
    public function selectedColumns(): array
    {
        return array_values(array_filter(
            (array) $this->input('columns', []),
            fn ($v) => is_string($v) && $v !== '',
        ));
    }

    public function fileFormat(): string
    {
        return in_array($this->input('format'), ['xlsx', 'csv'], true)
            ? $this->input('format')
            : 'xlsx';
    }

    public function isTemplate(): bool
    {
        return $this->input('mode') === 'template';
    }

    /**
     * @return array<string, mixed>
     */
    public function tableFilters(): array
    {
        return (array) $this->input('filters', []);
    }
}
