<?php

namespace App\Enums;

/**
 * Single source of truth for parent-application permissions (i.e. those
 * not owned by a module). Covers user/role management, settings,
 * activity log, media, dashboard widgets, and API access.
 *
 * Each module additionally exposes its own PermissionEnum
 * (e.g. Modules\Employee\Enums\PermissionEnum,
 * Modules\School\Enums\PermissionEnum). RolesAndPermissionsSeeder
 * aggregates ::values() from all enums when seeding.
 */
enum CorePermissionEnum: string
{
    // ----- media -----
    case MEDIA_VIEW = 'media.view';
    case MEDIA_VIEW_ANY = 'media.view_any';
    case MEDIA_CREATE = 'media.create';
    case MEDIA_UPDATE = 'media.update';
    case MEDIA_DELETE = 'media.delete';
    case MEDIA_RESTORE = 'media.restore';
    case MEDIA_FORCE_DELETE = 'media.force_delete';

    // ----- users -----
    case USERS_VIEW = 'users.view';
    case USERS_VIEW_ANY = 'users.view_any';
    case USERS_CREATE = 'users.create';
    case USERS_UPDATE = 'users.update';
    case USERS_DELETE = 'users.delete';
    case USERS_RESTORE = 'users.restore';
    case USERS_FORCE_DELETE = 'users.force_delete';
    case USERS_ASSIGN_ROLES = 'users.assign_roles';
    case USERS_MANAGE_PERMISSIONS = 'users.manage_permissions';
    case USERS_IMPERSONATE = 'users.impersonate';
    case USERS_SUSPEND = 'users.suspend';
    case USERS_UNSUSPEND = 'users.unsuspend';
    case USERS_FORCE_LOGOUT = 'users.force_logout';

    // ----- roles -----
    case ROLES_VIEW = 'roles.view';
    case ROLES_VIEW_ANY = 'roles.view_any';
    case ROLES_CREATE = 'roles.create';
    case ROLES_UPDATE = 'roles.update';
    case ROLES_DELETE = 'roles.delete';
    case ROLES_RESTORE = 'roles.restore';
    case ROLES_FORCE_DELETE = 'roles.force_delete';

    // ----- permissions -----
    case PERMISSIONS_VIEW = 'permissions.view';
    case PERMISSIONS_VIEW_ANY = 'permissions.view_any';
    case PERMISSIONS_CREATE = 'permissions.create';
    case PERMISSIONS_UPDATE = 'permissions.update';
    case PERMISSIONS_DELETE = 'permissions.delete';
    case PERMISSIONS_RESTORE = 'permissions.restore';
    case PERMISSIONS_FORCE_DELETE = 'permissions.force_delete';

    // ----- settings -----
    case SETTINGS_VIEW = 'settings.view';
    case SETTINGS_VIEW_ANY = 'settings.view_any';
    case SETTINGS_CREATE = 'settings.create';
    case SETTINGS_UPDATE = 'settings.update';
    case SETTINGS_DELETE = 'settings.delete';
    case SETTINGS_RESTORE = 'settings.restore';
    case SETTINGS_FORCE_DELETE = 'settings.force_delete';
    case SETTINGS_MANAGE = 'settings.manage';
    case SETTINGS_VIEW_LOGS = 'settings.view_logs';

    // ----- configurations -----
    case CONFIGURATIONS_VIEW = 'configurations.view';
    case CONFIGURATIONS_VIEW_ANY = 'configurations.view_any';
    case CONFIGURATIONS_CREATE = 'configurations.create';
    case CONFIGURATIONS_UPDATE = 'configurations.update';
    case CONFIGURATIONS_DELETE = 'configurations.delete';
    case CONFIGURATIONS_RESTORE = 'configurations.restore';
    case CONFIGURATIONS_FORCE_DELETE = 'configurations.force_delete';

    // ----- activity_logs -----
    case ACTIVITY_LOGS_VIEW = 'activity_logs.view';
    case ACTIVITY_LOGS_VIEW_ANY = 'activity_logs.view_any';
    case ACTIVITY_LOGS_CREATE = 'activity_logs.create';
    case ACTIVITY_LOGS_UPDATE = 'activity_logs.update';
    case ACTIVITY_LOGS_DELETE = 'activity_logs.delete';
    case ACTIVITY_LOGS_RESTORE = 'activity_logs.restore';
    case ACTIVITY_LOGS_FORCE_DELETE = 'activity_logs.force_delete';
    case ACTIVITY_LOGS_EXPORT = 'activity_logs.export';
    case ACTIVITY_LOGS_CLEAR = 'activity_logs.clear';
    case ACTIVITY_LOGS_VIEW_DETAILS = 'activity_logs.view_details';

    // ----- dashboard -----
    case DASHBOARD_VIEW = 'dashboard.view';
    case DASHBOARD_VIEW_ANALYTICS = 'dashboard.view_analytics';
    case DASHBOARD_EXPORT_REPORTS = 'dashboard.export_reports';
    // Per-module widget visibility on the dashboard
    case DASHBOARD_EMPLOYEE = 'dashboard.employee';
    case DASHBOARD_SCHOOL = 'dashboard.school';

    // ----- api -----
    case API_ACCESS = 'api.access';
    case API_MANAGE_TOKENS = 'api.manage_tokens';

    /**
     * Plain string values for every case. Used by the seeder.
     *
     * @return array<int, string>
     */
    public static function values(): array
    {
        return array_map(static fn (self $c): string => $c->value, self::cases());
    }
}
