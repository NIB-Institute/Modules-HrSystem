import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:48
* @route '/dashboard/employee-plan-assignments/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-plan-assignments/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:48
* @route '/dashboard/employee-plan-assignments/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:48
* @route '/dashboard/employee-plan-assignments/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:48
* @route '/dashboard/employee-plan-assignments/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:62
* @route '/dashboard/employee-plan-assignments'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/employee-plan-assignments',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:62
* @route '/dashboard/employee-plan-assignments'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:62
* @route '/dashboard/employee-plan-assignments'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::bulkAssign
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:71
* @route '/dashboard/employee-plan-assignments/bulk-assign'
*/
export const bulkAssign = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAssign.url(options),
    method: 'post',
})

bulkAssign.definition = {
    methods: ["post"],
    url: '/dashboard/employee-plan-assignments/bulk-assign',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::bulkAssign
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:71
* @route '/dashboard/employee-plan-assignments/bulk-assign'
*/
bulkAssign.url = (options?: RouteQueryOptions) => {
    return bulkAssign.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::bulkAssign
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:71
* @route '/dashboard/employee-plan-assignments/bulk-assign'
*/
bulkAssign.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkAssign.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:38
* @route '/dashboard/employee-plan-assignments'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-plan-assignments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:38
* @route '/dashboard/employee-plan-assignments'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:38
* @route '/dashboard/employee-plan-assignments'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:38
* @route '/dashboard/employee-plan-assignments'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:95
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}/edit'
*/
export const edit = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-plan-assignments/{employeePlanAssignment}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:95
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}/edit'
*/
edit.url = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeePlanAssignment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeePlanAssignment: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeePlanAssignment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeePlanAssignment: typeof args.employeePlanAssignment === 'object'
        ? args.employeePlanAssignment.uuid
        : args.employeePlanAssignment,
    }

    return edit.definition.url
            .replace('{employeePlanAssignment}', parsedArgs.employeePlanAssignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:95
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}/edit'
*/
edit.get = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:95
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}/edit'
*/
edit.head = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:88
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}'
*/
export const show = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-plan-assignments/{employeePlanAssignment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:88
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}'
*/
show.url = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeePlanAssignment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeePlanAssignment: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeePlanAssignment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeePlanAssignment: typeof args.employeePlanAssignment === 'object'
        ? args.employeePlanAssignment.uuid
        : args.employeePlanAssignment,
    }

    return show.definition.url
            .replace('{employeePlanAssignment}', parsedArgs.employeePlanAssignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:88
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}'
*/
show.get = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:88
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}'
*/
show.head = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:103
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}'
*/
export const update = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/employee-plan-assignments/{employeePlanAssignment}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:103
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}'
*/
update.url = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeePlanAssignment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeePlanAssignment: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeePlanAssignment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeePlanAssignment: typeof args.employeePlanAssignment === 'object'
        ? args.employeePlanAssignment.uuid
        : args.employeePlanAssignment,
    }

    return update.definition.url
            .replace('{employeePlanAssignment}', parsedArgs.employeePlanAssignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:103
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}'
*/
update.put = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:112
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}/delete'
*/
export const confirmDelete = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-plan-assignments/{employeePlanAssignment}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:112
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}/delete'
*/
confirmDelete.url = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeePlanAssignment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeePlanAssignment: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeePlanAssignment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeePlanAssignment: typeof args.employeePlanAssignment === 'object'
        ? args.employeePlanAssignment.uuid
        : args.employeePlanAssignment,
    }

    return confirmDelete.definition.url
            .replace('{employeePlanAssignment}', parsedArgs.employeePlanAssignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:112
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}/delete'
*/
confirmDelete.get = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:112
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}/delete'
*/
confirmDelete.head = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:121
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}'
*/
export const destroy = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/employee-plan-assignments/{employeePlanAssignment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:121
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}'
*/
destroy.url = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeePlanAssignment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeePlanAssignment: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeePlanAssignment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeePlanAssignment: typeof args.employeePlanAssignment === 'object'
        ? args.employeePlanAssignment.uuid
        : args.employeePlanAssignment,
    }

    return destroy.definition.url
            .replace('{employeePlanAssignment}', parsedArgs.employeePlanAssignment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanAssignmentController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanAssignmentController.php:121
* @route '/dashboard/employee-plan-assignments/{employeePlanAssignment}'
*/
destroy.delete = (args: { employeePlanAssignment: string | number | { uuid: string | number } } | [employeePlanAssignment: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const employeePlanAssignments = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    bulkAssign: Object.assign(bulkAssign, bulkAssign),
    index: Object.assign(index, index),
    edit: Object.assign(edit, edit),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
    destroy: Object.assign(destroy, destroy),
}

export default employeePlanAssignments