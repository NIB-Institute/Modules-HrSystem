<?php

namespace App\Concerns\Exports;

use App\Http\Requests\ExportRequest;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Maatwebsite\Excel\Excel as ExcelType;
use Maatwebsite\Excel\Facades\Excel;
use Momentum\Modal\Modal;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

/**
 * Drop this on any dashboard controller that has a Maatwebsite Export
 * class using HasSelectableColumns. You get two endpoints for free:
 *
 *  - exportOptions(): Modal — renders the shared <ResourceExportPage />
 *    overlaid on the parent index, populated with the column catalogue.
 *  - export(ExportRequest): BinaryFileResponse — downloads the file
 *    honouring user-selected columns, format (xlsx/csv) and
 *    template-vs-export mode.
 *
 * The host controller declares three short methods that say *which*
 * resource is being exported:
 *
 *   protected function exportClass(): string     // Export FQCN
 *   protected function exportBaseRoute(): string // 'school.schools.index'
 *   protected function exportRouteName(): string // 'school.schools.export'
 *
 * That's it. No more per-controller boilerplate.
 */
trait ExportsResources
{
    abstract protected function exportClass(): string;

    abstract protected function exportBaseRoute(): string;

    abstract protected function exportRouteName(): string;

    /**
     * Filename slug. Defaults to the snake_case stem of the Export class
     * (e.g. EmployeesExport -> 'employees'). Override if you want
     * something different.
     */
    protected function exportFileSlug(): string
    {
        return Str::of(class_basename($this->exportClass()))
            ->beforeLast('Export')
            ->snake()
            ->lower()
            ->toString();
    }

    /**
     * Title shown in the modal header. Override per controller for i18n.
     */
    protected function exportTitle(): string
    {
        return 'Export '.Str::of(class_basename($this->exportClass()))
            ->beforeLast('Export')
            ->headline()
            ->toString();
    }

    public function exportOptions(): Modal
    {
        $cls = $this->exportClass();

        return Inertia::modal('shared/ResourceExportPage', [
            'exportColumns' => (new $cls())->exportableColumnList(),
            'exportRoute' => route($this->exportRouteName()),
            'title' => $this->exportTitle(),
        ])->baseRoute($this->exportBaseRoute());
    }

    public function export(ExportRequest $request): BinaryFileResponse
    {
        $writerType = $request->fileFormat() === 'csv' ? ExcelType::CSV : ExcelType::XLSX;

        $cls = $this->exportClass();
        $export = (new $cls($request->tableFilters()))
            ->setSelectedColumns($request->selectedColumns())
            ->asTemplate($request->isTemplate());

        $prefix = $request->isTemplate()
            ? $this->exportFileSlug().'_template_'
            : $this->exportFileSlug().'_';

        $filename = $prefix.now()->format('Y-m-d_His').'.'.$request->fileFormat();

        return Excel::download($export, $filename, $writerType);
    }
}
