import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::availableChats
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
*/
export const availableChats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: availableChats.url(options),
    method: 'get',
})

availableChats.definition = {
    methods: ["get","head"],
    url: '/settings/telegram/available-chats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::availableChats
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
*/
availableChats.url = (options?: RouteQueryOptions) => {
    return availableChats.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::availableChats
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
*/
availableChats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: availableChats.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::availableChats
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
*/
availableChats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: availableChats.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::availableChats
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
*/
const availableChatsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: availableChats.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::availableChats
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
*/
availableChatsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: availableChats.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\TelegramChatsController::availableChats
* @see app/Http/Controllers/Settings/TelegramChatsController.php:16
* @route '/settings/telegram/available-chats'
*/
availableChatsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: availableChats.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

availableChats.form = availableChatsForm

const telegram = {
    availableChats: Object.assign(availableChats, availableChats),
}

export default telegram