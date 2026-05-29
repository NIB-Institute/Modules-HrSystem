import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:14
* @route '/dashboard/media'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:14
* @route '/dashboard/media'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:14
* @route '/dashboard/media'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:14
* @route '/dashboard/media'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MediaController::upload
* @see app/Http/Controllers/MediaController.php:60
* @route '/dashboard/media/upload'
*/
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/dashboard/media/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaController::upload
* @see app/Http/Controllers/MediaController.php:60
* @route '/dashboard/media/upload'
*/
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::upload
* @see app/Http/Controllers/MediaController.php:60
* @route '/dashboard/media/upload'
*/
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

const MediaController = { index, upload }

export default MediaController