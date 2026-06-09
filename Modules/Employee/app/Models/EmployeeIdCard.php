<?php

namespace Modules\Employee\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EmployeeIdCard extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'label',
        'card_number',
        'front_url',
        'back_url',
        'issued_date',
        'expiry_date',
        'is_primary',
        'sort_order',
    ];

    protected $casts = [
        'issued_date' => 'date',
        'expiry_date' => 'date',
        'is_primary' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }
}
