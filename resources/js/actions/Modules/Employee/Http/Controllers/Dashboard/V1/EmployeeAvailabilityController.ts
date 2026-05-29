import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:43
* @route '/dashboard/employee-availabilities/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-availabilities/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:43
* @route '/dashboard/employee-availabilities/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:43
* @route '/dashboard/employee-availabilities/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:43
* @route '/dashboard/employee-availabilities/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:52
* @route '/dashboard/employee-availabilities'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/employee-availabilities',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:52
* @route '/dashboard/employee-availabilities'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:52
* @route '/dashboard/employee-availabilities'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:33
* @route '/dashboard/employee-availabilities'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-availabilities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:33
* @route '/dashboard/employee-availabilities'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:33
* @route '/dashboard/employee-availabilities'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:33
* @route '/dashboard/employee-availabilities'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:61
* @route '/dashboard/employee-availabilities/{employeeAvailability}/edit'
*/
export const edit = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-availabilities/{employeeAvailability}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:61
* @route '/dashboard/employee-availabilities/{employeeAvailability}/edit'
*/
edit.url = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeeAvailability: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeeAvailability: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeeAvailability: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeeAvailability: typeof args.employeeAvailability === 'object'
        ? args.employeeAvailability.uuid
        : args.employeeAvailability,
    }

    return edit.definition.url
            .replace('{employeeAvailability}', parsedArgs.employeeAvailability.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:61
* @route '/dashboard/employee-availabilities/{employeeAvailability}/edit'
*/
edit.get = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:61
* @route '/dashboard/employee-availabilities/{employeeAvailability}/edit'
*/
edit.head = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:69
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
const update4cd3e1748995720a2609b37616d0e0c8 = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update4cd3e1748995720a2609b37616d0e0c8.url(args, options),
    method: 'put',
})

update4cd3e1748995720a2609b37616d0e0c8.definition = {
    methods: ["put"],
    url: '/dashboard/employee-availabilities/{employeeAvailability}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:69
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
update4cd3e1748995720a2609b37616d0e0c8.url = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeeAvailability: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeeAvailability: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeeAvailability: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeeAvailability: typeof args.employeeAvailability === 'object'
        ? args.employeeAvailability.uuid
        : args.employeeAvailability,
    }

    return update4cd3e1748995720a2609b37616d0e0c8.definition.url
            .replace('{employeeAvailability}', parsedArgs.employeeAvailability.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:69
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
update4cd3e1748995720a2609b37616d0e0c8.put = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update4cd3e1748995720a2609b37616d0e0c8.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:69
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
const update4cd3e1748995720a2609b37616d0e0c8 = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update4cd3e1748995720a2609b37616d0e0c8.url(args, options),
    method: 'patch',
})

update4cd3e1748995720a2609b37616d0e0c8.definition = {
    methods: ["patch"],
    url: '/dashboard/employee-availabilities/{employeeAvailability}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:69
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
update4cd3e1748995720a2609b37616d0e0c8.url = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeeAvailability: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeeAvailability: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeeAvailability: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeeAvailability: typeof args.employeeAvailability === 'object'
        ? args.employeeAvailability.uuid
        : args.employeeAvailability,
    }

    return update4cd3e1748995720a2609b37616d0e0c8.definition.url
            .replace('{employeeAvailability}', parsedArgs.employeeAvailability.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:69
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
update4cd3e1748995720a2609b37616d0e0c8.patch = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update4cd3e1748995720a2609b37616d0e0c8.url(args, options),
    method: 'patch',
})

export const update = {
    '/dashboard/employee-availabilities/{employeeAvailability}': update4cd3e1748995720a2609b37616d0e0c8,
    '/dashboard/employee-availabilities/{employeeAvailability}': update4cd3e1748995720a2609b37616d0e0c8,
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:78
* @route '/dashboard/employee-availabilities/{employeeAvailability}/delete'
*/
export const confirmDelete = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-availabilities/{employeeAvailability}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:78
* @route '/dashboard/employee-availabilities/{employeeAvailability}/delete'
*/
confirmDelete.url = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeeAvailability: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeeAvailability: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeeAvailability: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeeAvailability: typeof args.employeeAvailability === 'object'
        ? args.employeeAvailability.uuid
        : args.employeeAvailability,
    }

    return confirmDelete.definition.url
            .replace('{employeeAvailability}', parsedArgs.employeeAvailability.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:78
* @route '/dashboard/employee-availabilities/{employeeAvailability}/delete'
*/
confirmDelete.get = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:78
* @route '/dashboard/employee-availabilities/{employeeAvailability}/delete'
*/
confirmDelete.head = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:87
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
export const destroy = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/employee-availabilities/{employeeAvailability}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:87
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
destroy.url = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeeAvailability: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeeAvailability: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeeAvailability: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeeAvailability: typeof args.employeeAvailability === 'object'
        ? args.employeeAvailability.uuid
        : args.employeeAvailability,
    }

    return destroy.definition.url
            .replace('{employeeAvailability}', parsedArgs.employeeAvailability.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:87
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
destroy.delete = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const EmployeeAvailabilityController = { create, store, index, edit, update, confirmDelete, destroy }

export default EmployeeAvailabilityController