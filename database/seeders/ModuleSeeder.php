<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Customer\Database\Seeders\CustomerDatabaseSeeder;
use Modules\Menu\Database\Seeders\MenuCategoryProductSeeder;
use Modules\Menu\Database\Seeders\MenuDatabaseSeeder;
use Modules\Outlet\Database\Seeders\OutletDatabaseSeeder;
use Modules\Product\Database\Seeders\ProductAttributeSeeder;
use Modules\Product\Database\Seeders\ProductDatabaseSeeder;
use Modules\Product\Database\Seeders\ProductTypeSeeder;
use Modules\Product\Database\Seeders\ProductVariantSeeder;
use Modules\Wallets\Database\Seeders\WalletsDatabaseSeeder;
use Modules\Employee\Database\Seeders\EmployeeDatabaseSeeder;
use Modules\Order\Database\Seeders\OrderDatabaseSeeder;

class ModuleSeeder extends Seeder
{
    /**
     * seeder modules data migrations
     */
    public function run(): void
    {
        $this->call([
          
            // 1 . school seeder modules
            SchoolDatabaseSeeder::class,

            // 2.  emoloyee seeder modules
            EmployeeDatabaseSeeder::class,

    
        ]);
    }
}
