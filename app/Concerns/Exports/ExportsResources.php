<?php

namespace App\Concerns\Exports;

use App\Http\Requests\ExportRequest;
use Momentum\Modal\Modal;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

/**
 * Sugar for single-resource controllers. Drop this on a controller, declare:
 *
 *   protected function exportClass(): string     // FQCN
 *   protected function exportBaseRoute(): string // 'school.schools.index'
 *   protected function exportRouteName(): string // 'school.schools.export'
 *
 * ...and you get exportOptions() + export() for free. Behaviour comes from
 * App\Concerns\Exports\ResourceExporter so multi-resource controllers can
 * call the same logic per resource.
 */
trait ExportsResources
{
    abstract protected function exportClass(): string;

    abstract protected function exportBaseRoute(): string;

    abstract protected function exportRouteName(): string;

    protected function exportTitle(): ?string
    {
        return null; // helper falls back to "Export {ResourceName}"
    }

    protected function exportFileSlug(): ?string
    {
        return null; // helper derives from class basename
    }

    public function exportOptions(): Modal
    {
        return ResourceExporter::optionsModal(
            $this->exportClass(),
            $this->exportRouteName(),
            $this->exportBaseRoute(),
            $this->exportTitle(),
        );
    }

    public function export(ExportRequest $request): BinaryFileResponse
    {
        return ResourceExporter::download(
            $this->exportClass(),
            $request,
            $this->exportFileSlug(),
        );
    }
}
