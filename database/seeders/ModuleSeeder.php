<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Employee\Database\Seeders\EmployeeDatabaseSeeder;
use Modules\School\Database\Seeders\SchoolDatabaseSeeder;

class ModuleSeeder extends Seeder
{
    /**
     * Seed module-specific data.
     *
     * Run via: php artisan db:seed --class=ModuleSeeder
     */
    public function run(): void
    {
        $this->call([
            SchoolDatabaseSeeder::class,
            EmployeeDatabaseSeeder::class,
        ]);
    }
}
