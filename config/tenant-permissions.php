<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Module to Resources Mapping
    |--------------------------------------------------------------------------
    |
    | Maps modules to their permission resources. This is used to group
    | permissions in the UI and determine what permissions belong to each module.
    |
    */
    'module_resources' => [
        'Employee'  => [
            'employees', 'employee_types', 'attendances', 'locations',
            'attendance_scans', 'employee_experiences', 'permission_requests',
            'employee_family_members', 'employee_academic_levels',
            'employee_foreign_languages', 'employee_job_experiences',
            'employee_documents',
        ],
        'School'    => ['schools', 'departments', 'classrooms', 'courses', 'programs', 'equipment'],
        'Report'    => ['reports'],
        'Media'     => ['media'],
        'User Management' => ['users', 'roles', 'permissions'],
        'Settings'  => ['settings', 'configurations', 'login_settings', 'activity_logs'],
        'Dashboard' => ['dashboard', 'dashboard_widgets', 'analytics'],
    ],

    /*
    |--------------------------------------------------------------------------
    | Tenant Type Module Access
    |--------------------------------------------------------------------------
    |
    | Defines which modules are accessible for each tenant type.
    | 'common' modules are available to all tenant users.
    | Add your tenant types and their allowed modules here.
    |
    */
    'tenant_modules' => [
        'common' => ['Dashboard', 'User Management', 'Settings', 'Report', 'Media'],
        'School' => ['School', 'Employee'],
    ],

    /*
    |--------------------------------------------------------------------------
    | Dashboard Widget to Module Mapping
    |--------------------------------------------------------------------------
    |
    | Maps dashboard widget permission actions to their parent modules.
    | Used to filter dashboard widget permissions based on tenant access.
    |
    */
    'widget_modules' => [
        'employee' => 'Employee',
        'school'   => 'School',
    ],
];
