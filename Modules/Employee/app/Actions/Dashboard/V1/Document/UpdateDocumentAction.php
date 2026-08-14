<?php

namespace Modules\Employee\Actions\Dashboard\V1\Document;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Modules\Employee\Models\Documents;

class UpdateDocumentAction
{
    private const STORAGE_PATH = 'employee/documents';

    public function execute(
        Documents $document,
        string $name,
        ?string $description = null,
        ?UploadedFile $newFile = null,
        ?string $startDate = null,
        ?string $expiryDate = null,
    ): Documents {
        $document->name = $name;
        $document->description = $description;
        $document->start_date = $startDate;
        $document->expiry_date = $expiryDate;

        if ($newFile) {
            $disk = config('filesystems.document_disk');

            // Delete the old file from disk before storing the new one.
            if ($document->file_path && Storage::disk($disk)->exists($document->file_path)) {
                Storage::disk($disk)->delete($document->file_path);
            }

            $document->file_path = $newFile->store(self::STORAGE_PATH, $disk);
            $document->original_filename = $newFile->getClientOriginalName();
            $document->mime_type = $newFile->getClientMimeType() ?: 'application/octet-stream';
            $document->size_bytes = $newFile->getSize() ?: 0;
            $document->extension = strtolower($newFile->getClientOriginalExtension()) ?: null;
        }

        $document->save();

        return $document->fresh();
    }
}
