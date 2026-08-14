import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:43
* @route '/dashboard/employee-availabilities/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:43
* @route '/dashboard/employee-availabilities/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:43
* @route '/dashboard/employee-availabilities/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:52
* @route '/dashboard/employee-availabilities'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:52
* @route '/dashboard/employee-availabilities'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:33
* @route '/dashboard/employee-availabilities'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:33
* @route '/dashboard/employee-availabilities'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:33
* @route '/dashboard/employee-availabilities'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:61
* @route '/dashboard/employee-availabilities/{employeeAvailability}/edit'
*/
const editForm = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:61
* @route '/dashboard/employee-availabilities/{employeeAvailability}/edit'
*/
editForm.get = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:61
* @route '/dashboard/employee-availabilities/{employeeAvailability}/edit'
*/
editForm.head = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:69
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
export const update = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/employee-availabilities/{employeeAvailability}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:69
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
update.url = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{employeeAvailability}', parsedArgs.employeeAvailability.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:69
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
update.put = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:69
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
const updateForm = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:69
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
updateForm.put = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:78
* @route '/dashboard/employee-availabilities/{employeeAvailability}/delete'
*/
const confirmDeleteForm = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:78
* @route '/dashboard/employee-availabilities/{employeeAvailability}/delete'
*/
confirmDeleteForm.get = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:78
* @route '/dashboard/employee-availabilities/{employeeAvailability}/delete'
*/
confirmDeleteForm.head = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmDelete.form = confirmDeleteForm

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

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:87
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
const destroyForm = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeAvailabilityController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeAvailabilityController.php:87
* @route '/dashboard/employee-availabilities/{employeeAvailability}'
*/
destroyForm.delete = (args: { employeeAvailability: string | number | { uuid: string | number } } | [employeeAvailability: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const employeeAvailabilities = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    index: Object.assign(index, index),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
    destroy: Object.assign(destroy, destroy),
}

export default employeeAvailabilities