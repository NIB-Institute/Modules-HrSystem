<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            // Date the employee becomes a confirmed/permanent staff member
            // (typically right after probation ends).
            $table->date('confirmation_date')->nullable()->after('probation_end_date');

            // Date employment ends, for any reason (termination or retirement).
            $table->date('termination_date')->nullable()->after('confirmation_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->dropColumn(['confirmation_date', 'termination_date']);
        });
    }
};
