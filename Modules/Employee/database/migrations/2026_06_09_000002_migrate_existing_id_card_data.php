<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        $rows = DB::table('employees')
            ->select([
                'id',
                'id_card_number',
                'id_card_front_url',
                'id_card_back_url',
                'id_card_issued_date',
                'id_card_expiry_date',
            ])
            ->where(function ($q) {
                $q->whereNotNull('id_card_number')
                    ->orWhereNotNull('id_card_front_url')
                    ->orWhereNotNull('id_card_back_url')
                    ->orWhereNotNull('id_card_issued_date')
                    ->orWhereNotNull('id_card_expiry_date');
            })
            ->get();

        $now = now();

        foreach ($rows as $row) {
            DB::table('employee_id_cards')->insert([
                'employee_id' => $row->id,
                'label' => 'Primary ID',
                'card_number' => $row->id_card_number,
                'front_url' => $row->id_card_front_url,
                'back_url' => $row->id_card_back_url,
                'issued_date' => $row->id_card_issued_date,
                'expiry_date' => $row->id_card_expiry_date,
                'is_primary' => true,
                'sort_order' => 0,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }

    public function down(): void
    {
        DB::table('employee_id_cards')->truncate();
    }
};
