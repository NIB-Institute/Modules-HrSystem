<?php

namespace Database\Seeders;

use App\Enums\CorePermissionEnum;
use Illuminate\Database\Seeder;
use Modules\Employee\Enums\PermissionEnum as EmployeePermission;
use Modules\School\Enums\PermissionEnum as SchoolPermission;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

/**
 * Seeds the database with every permission declared by the parent app
 * (CorePermissionEnum) and each enabled module's PermissionEnum, then
 * sets up role -> permission assignments.
 *
 * To add a new module to the catalogue: drop a PermissionEnum on the
 * module and add it to permissionEnums() below.
 */
class RolesAndPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = $this->collectPermissions();

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }

        $this->createRoles($permissions);

        $this->command->info('Roles and permissions seeded successfully!');
        $this->command->info('Created '.count($permissions).' permissions');
    }

    /**
     * Aggregate permission strings from every PermissionEnum.
     *
     * @return array<int, string>
     */
    protected function collectPermissions(): array
    {
        $sources = array_merge(
            CorePermissionEnum::values(),
            ...array_map(
                static fn (string $enum): array => $enum::values(),
                $this->permissionEnums(),
            ),
        );

        return array_values(array_unique($sources));
    }

    /**
     * Module PermissionEnum FQCNs. Add a class here when introducing
     * a new module that contributes permissions.
     *
     * @return array<int, class-string>
     */
    protected function permissionEnums(): array
    {
        return [
            EmployeePermission::class,
            SchoolPermission::class,
        ];
    }

    /**
     * Create roles with their permissions.
     *
     * @param  array<int, string>  $allPermissions
     */
    protected function createRoles(array $allPermissions): void
    {
        // Super Admin - has all permissions
        $superAdmin = Role::firstOrCreate(['name' => 'super-admin', 'guard_name' => 'web']);
        $superAdmin->syncPermissions($allPermissions);

        // Admin - all except force_delete and the two sensitive ones
        $adminPermissions = array_filter($allPermissions, static function (string $permission): bool {
            return ! str_contains($permission, 'force_delete')
                && $permission !== CorePermissionEnum::USERS_IMPERSONATE->value
                && $permission !== CorePermissionEnum::USERS_MANAGE_PERMISSIONS->value;
        });
        $admin = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'web']);
        $admin->syncPermissions($adminPermissions);

        // Manager - view/create/update only, no delete/restore, no settings
        $managerPermissions = array_filter($allPermissions, static function (string $permission): bool {
            return ! str_contains($permission, 'force_delete')
                && ! str_contains($permission, 'restore')
                && ! str_contains($permission, 'impersonate')
                && ! str_contains($permission, 'manage_permissions')
                && ! str_contains($permission, 'assign_roles')
                && ! str_contains($permission, 'manage_tokens')
                && ! str_starts_with($permission, 'settings.');
        });
        $manager = Role::firstOrCreate(['name' => 'manager', 'guard_name' => 'web']);
        $manager->syncPermissions($managerPermissions);

        // Staff - read everywhere, limited create/update, attendance specifics
        $staffPermissions = array_filter($allPermissions, static function (string $permission): bool {
            if (str_contains($permission, 'view') || str_contains($permission, 'view_any')) {
                return true;
            }
            if (str_contains($permission, 'create')
                && ! str_contains($permission, 'users.')
                && ! str_contains($permission, 'roles.')) {
                return true;
            }
            if (str_contains($permission, 'update') && str_contains($permission, 'attendances')) {
                return true;
            }
            if (str_contains($permission, 'check_in')
                || str_contains($permission, 'check_out')
                || str_contains($permission, 'scan_qr')) {
                return true;
            }
            if ($permission === CorePermissionEnum::DASHBOARD_VIEW->value) {
                return true;
            }
            if ($permission === CorePermissionEnum::USERS_FORCE_LOGOUT->value) {
                return true;
            }

            return false;
        });
        $staff = Role::firstOrCreate(['name' => 'staff', 'guard_name' => 'web']);
        $staff->syncPermissions($staffPermissions);

        // Employee - basic self-service
        $employee = Role::firstOrCreate(['name' => 'employee', 'guard_name' => 'web']);
        $employee->syncPermissions([
            CorePermissionEnum::DASHBOARD_VIEW->value,
            CorePermissionEnum::DASHBOARD_EMPLOYEE->value,
            CorePermissionEnum::USERS_FORCE_LOGOUT->value,
            // Attendance
            EmployeePermission::ATTENDANCES_VIEW->value,
            EmployeePermission::ATTENDANCES_VIEW_ANY->value,
            EmployeePermission::ATTENDANCES_CHECK_IN->value,
            EmployeePermission::ATTENDANCES_CHECK_OUT->value,
            EmployeePermission::ATTENDANCES_SCAN_QR->value,
            // Employee profile
            EmployeePermission::EMPLOYEES_VIEW->value,
            EmployeePermission::EMPLOYEES_VIEW_ANY->value,
            // Permission requests (own)
            EmployeePermission::PERMISSION_REQUESTS_VIEW->value,
            EmployeePermission::PERMISSION_REQUESTS_VIEW_ANY->value,
            EmployeePermission::PERMISSION_REQUESTS_CREATE->value,
            EmployeePermission::PERMISSION_REQUESTS_CREATE_OWN->value,
            EmployeePermission::PERMISSION_REQUESTS_VIEW_OWN->value,
            // Locations (for scanning)
            EmployeePermission::LOCATIONS_VIEW->value,
            EmployeePermission::LOCATIONS_VIEW_ANY->value,
            EmployeePermission::LOCATIONS_SCAN_QR->value,
            // Employee documents (own docs — view/download)
            EmployeePermission::EMPLOYEE_DOCUMENTS_VIEW->value,
            EmployeePermission::EMPLOYEE_DOCUMENTS_VIEW_ANY->value,
            EmployeePermission::EMPLOYEE_DOCUMENTS_DOWNLOAD->value,
        ]);

        // Viewer - read-only
        $viewerPermissions = array_filter($allPermissions, static function (string $permission): bool {
            if (str_contains($permission, 'view')) {
                return true;
            }
            if ($permission === CorePermissionEnum::USERS_FORCE_LOGOUT->value) {
                return true;
            }

            return false;
        });
        $viewer = Role::firstOrCreate(['name' => 'viewer', 'guard_name' => 'web']);
        $viewer->syncPermissions($viewerPermissions);

        $this->command->info('Created roles: super-admin, admin, manager, staff, employee, viewer');
    }
}
