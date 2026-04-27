import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \DefStudio\Telegraph\Controllers\WebhookController::handle
* @see vendor/defstudio/telegraph/src/Controllers/WebhookController.php:14
* @route '/telegraph/{token}/webhook'
*/
export const handle = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handle.url(args, options),
    method: 'post',
})

handle.definition = {
    methods: ["post"],
    url: '/telegraph/{token}/webhook',
} satisfies RouteDefinition<["post"]>

/**
* @see \DefStudio\Telegraph\Controllers\WebhookController::handle
* @see vendor/defstudio/telegraph/src/Controllers/WebhookController.php:14
* @route '/telegraph/{token}/webhook'
*/
handle.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return handle.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \DefStudio\Telegraph\Controllers\WebhookController::handle
* @see vendor/defstudio/telegraph/src/Controllers/WebhookController.php:14
* @route '/telegraph/{token}/webhook'
*/
handle.post = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handle.url(args, options),
    method: 'post',
})

const WebhookController = { handle }

export default WebhookController