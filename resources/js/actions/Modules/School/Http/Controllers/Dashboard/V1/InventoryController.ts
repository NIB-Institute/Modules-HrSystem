import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::confirmBulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:109
* @route '/dashboard/inventories/bulk-delete'
*/
export const confirmBulkDelete = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

confirmBulkDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::confirmBulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:109
* @route '/dashboard/inventories/bulk-delete'
*/
confirmBulkDelete.url = (options?: RouteQueryOptions) => {
    return confirmBulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::confirmBulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:109
* @route '/dashboard/inventories/bulk-delete'
*/
confirmBulkDelete.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::confirmBulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:109
* @route '/dashboard/inventories/bulk-delete'
*/
confirmBulkDelete.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmBulkDelete.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:120
* @route '/dashboard/inventories/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/inventories/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:120
* @route '/dashboard/inventories/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:120
* @route '/dashboard/inventories/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:50
* @route '/dashboard/inventories/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:50
* @route '/dashboard/inventories/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:50
* @route '/dashboard/inventories/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:50
* @route '/dashboard/inventories/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:58
* @route '/dashboard/inventories'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/inventories',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:58
* @route '/dashboard/inventories'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:58
* @route '/dashboard/inventories'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:37
* @route '/dashboard/inventories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:37
* @route '/dashboard/inventories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:37
* @route '/dashboard/inventories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:37
* @route '/dashboard/inventories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:67
* @route '/dashboard/inventories/{inventory}'
*/
export const show = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/{inventory}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:67
* @route '/dashboard/inventories/{inventory}'
*/
show.url = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inventory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { inventory: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            inventory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inventory: typeof args.inventory === 'object'
        ? args.inventory.uuid
        : args.inventory,
    }

    return show.definition.url
            .replace('{inventory}', parsedArgs.inventory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:67
* @route '/dashboard/inventories/{inventory}'
*/
show.get = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:67
* @route '/dashboard/inventories/{inventory}'
*/
show.head = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:74
* @route '/dashboard/inventories/{inventory}/edit'
*/
export const edit = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/{inventory}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:74
* @route '/dashboard/inventories/{inventory}/edit'
*/
edit.url = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inventory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { inventory: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            inventory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inventory: typeof args.inventory === 'object'
        ? args.inventory.uuid
        : args.inventory,
    }

    return edit.definition.url
            .replace('{inventory}', parsedArgs.inventory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:74
* @route '/dashboard/inventories/{inventory}/edit'
*/
edit.get = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:74
* @route '/dashboard/inventories/{inventory}/edit'
*/
edit.head = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:82
* @route '/dashboard/inventories/{inventory}'
*/
const update3c9f7472a66e9f3d3ee7650c99fbdce8 = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update3c9f7472a66e9f3d3ee7650c99fbdce8.url(args, options),
    method: 'put',
})

update3c9f7472a66e9f3d3ee7650c99fbdce8.definition = {
    methods: ["put"],
    url: '/dashboard/inventories/{inventory}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:82
* @route '/dashboard/inventories/{inventory}'
*/
update3c9f7472a66e9f3d3ee7650c99fbdce8.url = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inventory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { inventory: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            inventory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inventory: typeof args.inventory === 'object'
        ? args.inventory.uuid
        : args.inventory,
    }

    return update3c9f7472a66e9f3d3ee7650c99fbdce8.definition.url
            .replace('{inventory}', parsedArgs.inventory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:82
* @route '/dashboard/inventories/{inventory}'
*/
update3c9f7472a66e9f3d3ee7650c99fbdce8.put = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update3c9f7472a66e9f3d3ee7650c99fbdce8.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:82
* @route '/dashboard/inventories/{inventory}'
*/
const update3c9f7472a66e9f3d3ee7650c99fbdce8 = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update3c9f7472a66e9f3d3ee7650c99fbdce8.url(args, options),
    method: 'patch',
})

update3c9f7472a66e9f3d3ee7650c99fbdce8.definition = {
    methods: ["patch"],
    url: '/dashboard/inventories/{inventory}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:82
* @route '/dashboard/inventories/{inventory}'
*/
update3c9f7472a66e9f3d3ee7650c99fbdce8.url = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inventory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { inventory: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            inventory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inventory: typeof args.inventory === 'object'
        ? args.inventory.uuid
        : args.inventory,
    }

    return update3c9f7472a66e9f3d3ee7650c99fbdce8.definition.url
            .replace('{inventory}', parsedArgs.inventory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:82
* @route '/dashboard/inventories/{inventory}'
*/
update3c9f7472a66e9f3d3ee7650c99fbdce8.patch = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update3c9f7472a66e9f3d3ee7650c99fbdce8.url(args, options),
    method: 'patch',
})

export const update = {
    '/dashboard/inventories/{inventory}': update3c9f7472a66e9f3d3ee7650c99fbdce8,
    '/dashboard/inventories/{inventory}': update3c9f7472a66e9f3d3ee7650c99fbdce8,
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:91
* @route '/dashboard/inventories/{inventory}/delete'
*/
export const confirmDelete = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/{inventory}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:91
* @route '/dashboard/inventories/{inventory}/delete'
*/
confirmDelete.url = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inventory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { inventory: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            inventory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inventory: typeof args.inventory === 'object'
        ? args.inventory.uuid
        : args.inventory,
    }

    return confirmDelete.definition.url
            .replace('{inventory}', parsedArgs.inventory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:91
* @route '/dashboard/inventories/{inventory}/delete'
*/
confirmDelete.get = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:91
* @route '/dashboard/inventories/{inventory}/delete'
*/
confirmDelete.head = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:100
* @route '/dashboard/inventories/{inventory}'
*/
export const destroy = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/inventories/{inventory}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:100
* @route '/dashboard/inventories/{inventory}'
*/
destroy.url = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inventory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { inventory: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            inventory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inventory: typeof args.inventory === 'object'
        ? args.inventory.uuid
        : args.inventory,
    }

    return destroy.definition.url
            .replace('{inventory}', parsedArgs.inventory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:100
* @route '/dashboard/inventories/{inventory}'
*/
destroy.delete = (args: { inventory: string | { uuid: string } } | [inventory: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const InventoryController = { confirmBulkDelete, bulkDelete, create, store, index, show, edit, update, confirmDelete, destroy }

export default InventoryController