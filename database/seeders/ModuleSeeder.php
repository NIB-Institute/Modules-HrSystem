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
     * Run all module seeders in dependency order.
     *
     * Usage: php artisan db:seed --class=ModuleSeeder
     *
     * Dependency chain:
     * 1. Customer - Independent
     * 2. Outlet - TypeOutlet → Outlet
     * 3. ProductType - Depends on Outlet (needed by Menu Categories)
     * 4. Menu - MenuType → Menu → Category (Categories use ProductType.slug from DB)
     * 5. Product - Products linked to Outlet + ProductType
     * 6. MenuCategoryProduct - Links products to categories (pivot)
     * 7. Wallets - Depends on Customer
     */
    public function run(): void
    {
        $this->call([
          
            // 8.  emoloyee seeder modules
            EmployeeDatabaseSeeder::class,

    
        ]);
    }
}
