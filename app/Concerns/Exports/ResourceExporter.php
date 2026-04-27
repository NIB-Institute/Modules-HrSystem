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
 * Shared backend logic behind the column-selectable export feature.
 *
 * - Single-resource controllers can use the App\Concerns\Exports\ExportsResources
 *   trait (which delegates here).
 * - Multi-resource controllers (e.g. SchoolImportExportController which
 *   exports Departments, Programs, Courses, Classrooms, Equipment) call
 *   these helpers directly per resource.
 *
 * Either way: one source of truth for "render the modal" and
 * "stream the file" so behaviour stays consistent across the app.
 */
class ResourceExporter
{
    /**
     * Build the Inertia modal payload for the shared
     * resources/js/pages/shared/ResourceExportPage.vue page.
     *
     * @param  class-string  $exportClass  Maatwebsite Export FQCN using HasSelectableColumns
     * @param  string  $exportRouteName    Named route that handles the file download (e.g. 'school.departments.export')
     * @param  string  $baseRouteName      Parent index route the modal overlays (e.g. 'school.departments.index')
     */
    public static function optionsModal(
        string $exportClass,
        string $exportRouteName,
        string $baseRouteName,
        ?string $title = null,
    ): Modal {
        return Inertia::modal('shared/ResourceExportPage', [
            'exportColumns' => (new $exportClass())->exportableColumnList(),
            'exportRoute' => route($exportRouteName),
            'title' => $title ?? self::guessTitle($exportClass),
        ])->baseRoute($baseRouteName);
    }

    /**
     * Stream the file download honouring the user's column / format /
     * mode selection from the dialog.
     *
     * @param  class-string  $exportClass
     */
    public static function download(
        string $exportClass,
        ExportRequest $request,
        ?string $fileSlug = null,
    ): BinaryFileResponse {
        $writerType = $request->fileFormat() === 'csv' ? ExcelType::CSV : ExcelType::XLSX;

        $export = (new $exportClass($request->tableFilters()))
            ->setSelectedColumns($request->selectedColumns())
            ->asTemplate($request->isTemplate());

        $slug = $fileSlug ?? self::guessFileSlug($exportClass);
        $prefix = $request->isTemplate() ? "{$slug}_template_" : "{$slug}_";
        $filename = $prefix.now()->format('Y-m-d_His').'.'.$request->fileFormat();

        return Excel::download($export, $filename, $writerType);
    }

    /**
     * EmployeesExport -> 'employees', SchoolsExport -> 'schools', etc.
     */
    public static function guessFileSlug(string $exportClass): string
    {
        return Str::of(class_basename($exportClass))
            ->beforeLast('Export')
            ->snake()
            ->lower()
            ->toString();
    }

    /**
     * EmployeesExport -> 'Export Employees'.
     */
    public static function guessTitle(string $exportClass): string
    {
        return 'Export '.Str::of(class_basename($exportClass))
            ->beforeLast('Export')
            ->headline()
            ->toString();
    }
}
