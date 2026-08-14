<?php

namespace Modules\Employee\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Documents extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'employee_documents';

    protected $fillable = [
        'uuid',
        'name',
        'original_filename',
        'file_path',
        'mime_type',
        'size_bytes',
        'extension',
        'description',
        'start_date',
        'expiry_date',
        'uploaded_by',
    ];

    protected $casts = [
        'size_bytes' => 'integer',
        'start_date' => 'date',
        'expiry_date' => 'date',
    ];

    protected $appends = ['url', 'human_size'];

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = (string) Str::uuid();
            }
        });

        // Remove the file from disk when the model is permanently deleted.
        static::forceDeleted(function (Documents $model) {
            $disk = Storage::disk(config('filesystems.document_disk'));
            if ($model->file_path && $disk->exists($model->file_path)) {
                $disk->delete($model->file_path);
            }
        });
    }

    public function getRouteKeyName(): string
    {
        return 'uuid';
    }

    public function uploader(): BelongsTo
    {
        return $this->belongsTo(User::class, 'uploaded_by');
    }

    /**
     * Public URL for the file, resolved via the configured document disk
     * (local 'public' disk + storage symlink, or a cloud disk like R2/S3).
     */
    protected function url(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->file_path
                ? Storage::disk(config('filesystems.document_disk'))->url($this->file_path)
                : null,
        );
    }

    /**
     * Human-readable size (e.g. "2.4 MB").
     */
    protected function humanSize(): Attribute
    {
        return Attribute::make(get: function () {
            $bytes = (int) $this->size_bytes;
            if ($bytes < 1024) {
                return $bytes . ' B';
            }
            $units = ['KB', 'MB', 'GB', 'TB'];
            $i = -1;
            do {
                $bytes /= 1024;
                $i++;
            } while ($bytes >= 1024 && $i < count($units) - 1);
            return round($bytes, 1) . ' ' . $units[$i];
        });
    }
}
