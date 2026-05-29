import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:267
* @route '/dashboard/inventories/import'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/inventories/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:267
* @route '/dashboard/inventories/import'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:267
* @route '/dashboard/inventories/import'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::preview
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:262
* @route '/dashboard/inventories/import/preview'
*/
export const preview = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

preview.definition = {
    methods: ["post"],
    url: '/dashboard/inventories/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::preview
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:262
* @route '/dashboard/inventories/import/preview'
*/
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::preview
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:262
* @route '/dashboard/inventories/import/preview'
*/
preview.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

const importMethod = {
    store: Object.assign(store, store),
    preview: Object.assign(preview, preview),
}

export default importMethod