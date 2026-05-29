import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
import importMethod7367d2 from './import'
import trash from './trash'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:240
* @route '/dashboard/inventories/export-options'
*/
export const exportOptions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportOptions.url(options),
    method: 'get',
})

exportOptions.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/export-options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:240
* @route '/dashboard/inventories/export-options'
*/
exportOptions.url = (options?: RouteQueryOptions) => {
    return exportOptions.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:240
* @route '/dashboard/inventories/export-options'
*/
exportOptions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:240
* @route '/dashboard/inventories/export-options'
*/
exportOptions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportOptions.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:250
* @route '/dashboard/inventories/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:250
* @route '/dashboard/inventories/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:250
* @route '/dashboard/inventories/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:250
* @route '/dashboard/inventories/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:255
* @route '/dashboard/inventories/import'
*/
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

importMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:255
* @route '/dashboard/inventories/import'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:255
* @route '/dashboard/inventories/import'
*/
importMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:255
* @route '/dashboard/inventories/import'
*/
importMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: importMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:277
* @route '/dashboard/inventories/template'
*/
export const template = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

template.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:277
* @route '/dashboard/inventories/template'
*/
template.url = (options?: RouteQueryOptions) => {
    return template.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:277
* @route '/dashboard/inventories/template'
*/
template.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:277
* @route '/dashboard/inventories/template'
*/
template.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: template.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:123
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
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:123
* @route '/dashboard/inventories/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:123
* @route '/dashboard/inventories/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::generateTag
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:137
* @route '/dashboard/inventories/generate-tag'
*/
export const generateTag = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateTag.url(options),
    method: 'get',
})

generateTag.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/generate-tag',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::generateTag
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:137
* @route '/dashboard/inventories/generate-tag'
*/
generateTag.url = (options?: RouteQueryOptions) => {
    return generateTag.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::generateTag
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:137
* @route '/dashboard/inventories/generate-tag'
*/
generateTag.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateTag.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::generateTag
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:137
* @route '/dashboard/inventories/generate-tag'
*/
generateTag.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generateTag.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:53
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
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:53
* @route '/dashboard/inventories/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:53
* @route '/dashboard/inventories/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:53
* @route '/dashboard/inventories/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:61
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
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:61
* @route '/dashboard/inventories'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:61
* @route '/dashboard/inventories'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:40
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
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:40
* @route '/dashboard/inventories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:40
* @route '/dashboard/inventories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:40
* @route '/dashboard/inventories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:70
* @route '/dashboard/inventories/{inventory}'
*/
export const show = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/{inventory}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:70
* @route '/dashboard/inventories/{inventory}'
*/
show.url = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:70
* @route '/dashboard/inventories/{inventory}'
*/
show.get = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:70
* @route '/dashboard/inventories/{inventory}'
*/
show.head = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:77
* @route '/dashboard/inventories/{inventory}/edit'
*/
export const edit = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/{inventory}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:77
* @route '/dashboard/inventories/{inventory}/edit'
*/
edit.url = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:77
* @route '/dashboard/inventories/{inventory}/edit'
*/
edit.get = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:77
* @route '/dashboard/inventories/{inventory}/edit'
*/
edit.head = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:85
* @route '/dashboard/inventories/{inventory}'
*/
export const update = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/inventories/{inventory}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:85
* @route '/dashboard/inventories/{inventory}'
*/
update.url = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{inventory}', parsedArgs.inventory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:85
* @route '/dashboard/inventories/{inventory}'
*/
update.put = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:94
* @route '/dashboard/inventories/{inventory}/delete'
*/
export const deleteMethod = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/{inventory}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:94
* @route '/dashboard/inventories/{inventory}/delete'
*/
deleteMethod.url = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return deleteMethod.definition.url
            .replace('{inventory}', parsedArgs.inventory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:94
* @route '/dashboard/inventories/{inventory}/delete'
*/
deleteMethod.get = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:94
* @route '/dashboard/inventories/{inventory}/delete'
*/
deleteMethod.head = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:103
* @route '/dashboard/inventories/{inventory}'
*/
export const destroy = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/inventories/{inventory}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\InventoryController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:103
* @route '/dashboard/inventories/{inventory}'
*/
destroy.url = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
* @see Modules/School/app/Http/Controllers/Dashboard/V1/InventoryController.php:103
* @route '/dashboard/inventories/{inventory}'
*/
destroy.delete = (args: { inventory: string | number | { uuid: string | number } } | [inventory: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const inventories = {
    exportOptions: Object.assign(exportOptions, exportOptions),
    export: Object.assign(exportMethod, exportMethod),
    import: Object.assign(importMethod, importMethod7367d2),
    template: Object.assign(template, template),
    trash: Object.assign(trash, trash),
    bulkDelete: Object.assign(bulkDelete, bulkDelete),
    generateTag: Object.assign(generateTag, generateTag),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    delete: Object.assign(deleteMethod, deleteMethod),
    destroy: Object.assign(destroy, destroy),
}

export default inventories