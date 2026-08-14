<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Adds `rank` (civil-service rank/grade, e.g. ឋានន្តរស័ក្តិ).
     */
    public function up(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->string('rank', 100)->nullable()->after('position');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->dropColumn('rank');
        });
    }
};
