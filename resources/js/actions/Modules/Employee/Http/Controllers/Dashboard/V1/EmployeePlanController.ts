import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:46
* @route '/dashboard/employee-plans/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-plans/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:46
* @route '/dashboard/employee-plans/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:46
* @route '/dashboard/employee-plans/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:46
* @route '/dashboard/employee-plans/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:46
* @route '/dashboard/employee-plans/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:46
* @route '/dashboard/employee-plans/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:46
* @route '/dashboard/employee-plans/create'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:54
* @route '/dashboard/employee-plans'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/employee-plans',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:54
* @route '/dashboard/employee-plans'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:54
* @route '/dashboard/employee-plans'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:54
* @route '/dashboard/employee-plans'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:54
* @route '/dashboard/employee-plans'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:36
* @route '/dashboard/employee-plans'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-plans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:36
* @route '/dashboard/employee-plans'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:36
* @route '/dashboard/employee-plans'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:36
* @route '/dashboard/employee-plans'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:36
* @route '/dashboard/employee-plans'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:36
* @route '/dashboard/employee-plans'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:36
* @route '/dashboard/employee-plans'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:74
* @route '/dashboard/employee-plans/{employeePlan}/edit'
*/
export const edit = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-plans/{employeePlan}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:74
* @route '/dashboard/employee-plans/{employeePlan}/edit'
*/
edit.url = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeePlan: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeePlan: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeePlan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeePlan: typeof args.employeePlan === 'object'
        ? args.employeePlan.uuid
        : args.employeePlan,
    }

    return edit.definition.url
            .replace('{employeePlan}', parsedArgs.employeePlan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:74
* @route '/dashboard/employee-plans/{employeePlan}/edit'
*/
edit.get = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:74
* @route '/dashboard/employee-plans/{employeePlan}/edit'
*/
edit.head = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:74
* @route '/dashboard/employee-plans/{employeePlan}/edit'
*/
const editForm = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:74
* @route '/dashboard/employee-plans/{employeePlan}/edit'
*/
editForm.get = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:74
* @route '/dashboard/employee-plans/{employeePlan}/edit'
*/
editForm.head = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:66
* @route '/dashboard/employee-plans/{employeePlan}'
*/
export const show = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-plans/{employeePlan}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:66
* @route '/dashboard/employee-plans/{employeePlan}'
*/
show.url = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeePlan: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeePlan: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeePlan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeePlan: typeof args.employeePlan === 'object'
        ? args.employeePlan.uuid
        : args.employeePlan,
    }

    return show.definition.url
            .replace('{employeePlan}', parsedArgs.employeePlan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:66
* @route '/dashboard/employee-plans/{employeePlan}'
*/
show.get = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:66
* @route '/dashboard/employee-plans/{employeePlan}'
*/
show.head = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:66
* @route '/dashboard/employee-plans/{employeePlan}'
*/
const showForm = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:66
* @route '/dashboard/employee-plans/{employeePlan}'
*/
showForm.get = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:66
* @route '/dashboard/employee-plans/{employeePlan}'
*/
showForm.head = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:82
* @route '/dashboard/employee-plans/{employeePlan}'
*/
const update725045ebf2e59ef65e44f8cf5abf470c = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update725045ebf2e59ef65e44f8cf5abf470c.url(args, options),
    method: 'put',
})

update725045ebf2e59ef65e44f8cf5abf470c.definition = {
    methods: ["put"],
    url: '/dashboard/employee-plans/{employeePlan}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:82
* @route '/dashboard/employee-plans/{employeePlan}'
*/
update725045ebf2e59ef65e44f8cf5abf470c.url = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeePlan: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeePlan: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeePlan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeePlan: typeof args.employeePlan === 'object'
        ? args.employeePlan.uuid
        : args.employeePlan,
    }

    return update725045ebf2e59ef65e44f8cf5abf470c.definition.url
            .replace('{employeePlan}', parsedArgs.employeePlan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:82
* @route '/dashboard/employee-plans/{employeePlan}'
*/
update725045ebf2e59ef65e44f8cf5abf470c.put = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update725045ebf2e59ef65e44f8cf5abf470c.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:82
* @route '/dashboard/employee-plans/{employeePlan}'
*/
const update725045ebf2e59ef65e44f8cf5abf470cForm = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update725045ebf2e59ef65e44f8cf5abf470c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:82
* @route '/dashboard/employee-plans/{employeePlan}'
*/
update725045ebf2e59ef65e44f8cf5abf470cForm.put = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update725045ebf2e59ef65e44f8cf5abf470c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update725045ebf2e59ef65e44f8cf5abf470c.form = update725045ebf2e59ef65e44f8cf5abf470cForm
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:82
* @route '/dashboard/employee-plans/{employeePlan}'
*/
const update725045ebf2e59ef65e44f8cf5abf470c = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update725045ebf2e59ef65e44f8cf5abf470c.url(args, options),
    method: 'patch',
})

update725045ebf2e59ef65e44f8cf5abf470c.definition = {
    methods: ["patch"],
    url: '/dashboard/employee-plans/{employeePlan}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:82
* @route '/dashboard/employee-plans/{employeePlan}'
*/
update725045ebf2e59ef65e44f8cf5abf470c.url = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeePlan: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeePlan: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeePlan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeePlan: typeof args.employeePlan === 'object'
        ? args.employeePlan.uuid
        : args.employeePlan,
    }

    return update725045ebf2e59ef65e44f8cf5abf470c.definition.url
            .replace('{employeePlan}', parsedArgs.employeePlan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:82
* @route '/dashboard/employee-plans/{employeePlan}'
*/
update725045ebf2e59ef65e44f8cf5abf470c.patch = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update725045ebf2e59ef65e44f8cf5abf470c.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:82
* @route '/dashboard/employee-plans/{employeePlan}'
*/
const update725045ebf2e59ef65e44f8cf5abf470cForm = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update725045ebf2e59ef65e44f8cf5abf470c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:82
* @route '/dashboard/employee-plans/{employeePlan}'
*/
update725045ebf2e59ef65e44f8cf5abf470cForm.patch = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update725045ebf2e59ef65e44f8cf5abf470c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update725045ebf2e59ef65e44f8cf5abf470c.form = update725045ebf2e59ef65e44f8cf5abf470cForm

export const update = {
    '/dashboard/employee-plans/{employeePlan}': update725045ebf2e59ef65e44f8cf5abf470c,
    '/dashboard/employee-plans/{employeePlan}': update725045ebf2e59ef65e44f8cf5abf470c,
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:91
* @route '/dashboard/employee-plans/{employeePlan}/delete'
*/
export const confirmDelete = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-plans/{employeePlan}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:91
* @route '/dashboard/employee-plans/{employeePlan}/delete'
*/
confirmDelete.url = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeePlan: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeePlan: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeePlan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeePlan: typeof args.employeePlan === 'object'
        ? args.employeePlan.uuid
        : args.employeePlan,
    }

    return confirmDelete.definition.url
            .replace('{employeePlan}', parsedArgs.employeePlan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:91
* @route '/dashboard/employee-plans/{employeePlan}/delete'
*/
confirmDelete.get = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:91
* @route '/dashboard/employee-plans/{employeePlan}/delete'
*/
confirmDelete.head = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:91
* @route '/dashboard/employee-plans/{employeePlan}/delete'
*/
const confirmDeleteForm = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:91
* @route '/dashboard/employee-plans/{employeePlan}/delete'
*/
confirmDeleteForm.get = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:91
* @route '/dashboard/employee-plans/{employeePlan}/delete'
*/
confirmDeleteForm.head = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:100
* @route '/dashboard/employee-plans/{employeePlan}'
*/
export const destroy = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/employee-plans/{employeePlan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:100
* @route '/dashboard/employee-plans/{employeePlan}'
*/
destroy.url = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employeePlan: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employeePlan: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employeePlan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employeePlan: typeof args.employeePlan === 'object'
        ? args.employeePlan.uuid
        : args.employeePlan,
    }

    return destroy.definition.url
            .replace('{employeePlan}', parsedArgs.employeePlan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:100
* @route '/dashboard/employee-plans/{employeePlan}'
*/
destroy.delete = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:100
* @route '/dashboard/employee-plans/{employeePlan}'
*/
const destroyForm = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePlanController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePlanController.php:100
* @route '/dashboard/employee-plans/{employeePlan}'
*/
destroyForm.delete = (args: { employeePlan: string | { uuid: string } } | [employeePlan: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const EmployeePlanController = { create, store, index, edit, show, update, confirmDelete, destroy }

export default EmployeePlanController