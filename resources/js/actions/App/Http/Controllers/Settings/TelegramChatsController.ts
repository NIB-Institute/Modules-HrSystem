import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::index
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings/telegram/available-chats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::index
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::index
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::index
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::index
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::index
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::index
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
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

const TelegramChatsController = { index }

export default TelegramChatsController