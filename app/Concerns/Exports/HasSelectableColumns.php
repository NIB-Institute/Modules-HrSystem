<?php

namespace App\Concerns\Exports;

/**
 * Reusable concern for Maatwebsite Excel exports that should let the user
 * pick which columns to include.
 *
 * The export class implements columnMap() returning an associative array
 * keyed by column slug:
 *
 *     [
 *         'employee_code' => ['label' => 'Employee Code', 'value' => fn ($row) => $row->employee_code],
 *         'email'         => ['label' => 'Email',         'value' => fn ($row) => $row->email],
 *     ]
 *
 * Then the controller calls $export->setSelectedColumns($keys) before
 * passing the export to Excel::download(). headings() and map() in the
 * export class can simply forward to selectedHeadings() and
 * selectedRow($row) provided here.
 */
trait HasSelectableColumns
{
    /**
     * Slugs of columns the user has chosen to include. Empty means "all".
     *
     * @var array<int, string>
     */
    protected array $selectedColumns = [];

    /**
     * When true, the export should yield no rows so the resulting file
     * is a header-only template (re-importable). The Export class is
     * responsible for honouring this flag from its query() (e.g. by
     * adding a whereRaw('1 = 0')).
     */
    protected bool $templateMode = false;

    /**
     * @param  array<int, string>  $columns
     */
    public function setSelectedColumns(array $columns): static
    {
        $this->selectedColumns = $columns;

        return $this;
    }

    public function asTemplate(bool $template = true): static
    {
        $this->templateMode = $template;

        return $this;
    }

    public function isTemplateMode(): bool
    {
        return $this->templateMode;
    }

    /**
     * Subclasses define the full column catalogue here.
     *
     * @return array<string, array{label: string, value: callable}>
     */
    abstract public function columnMap(): array;

    /**
     * Heading row honouring the user selection (or all when none picked).
     *
     * @return array<int, string>
     */
    public function selectedHeadings(): array
    {
        return array_map(
            fn (string $key): string => $this->columnMap()[$key]['label'],
            $this->effectiveColumns(),
        );
    }

    /**
     * Project a single row to the selected column values.
     *
     * @return array<int, mixed>
     */
    public function selectedRow(mixed $row): array
    {
        $map = $this->columnMap();

        return array_map(
            fn (string $key): mixed => ($map[$key]['value'])($row),
            $this->effectiveColumns(),
        );
    }

    /**
     * Slugs that will actually be exported, preserving columnMap() order.
     *
     * @return array<int, string>
     */
    protected function effectiveColumns(): array
    {
        $available = array_keys($this->columnMap());

        if ($this->selectedColumns === []) {
            return $available;
        }

        return array_values(array_intersect($available, $this->selectedColumns));
    }

    /**
     * Convert columnMap() into the [{key,label,default}] shape the
     * frontend dialog expects. Modules pass this to Inertia as
     * `availableColumns`.
     *
     * @return array<int, array{key: string, label: string, default: bool}>
     */
    public function exportableColumnList(): array
    {
        return array_values(array_map(
            fn (array $meta, string $key): array => [
                'key'     => $key,
                'label'   => $meta['label'],
                'default' => $meta['default'] ?? true,
            ],
            $this->columnMap(),
            array_keys($this->columnMap()),
        ));
    }
}
