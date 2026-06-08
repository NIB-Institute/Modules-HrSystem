import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::update
* @see app/Http/Controllers/Settings/LoginAlertsController.php:20
* @route '/settings/login-alerts'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/settings/login-alerts',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::update
* @see app/Http/Controllers/Settings/LoginAlertsController.php:20
* @route '/settings/login-alerts'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::update
* @see app/Http/Controllers/Settings/LoginAlertsController.php:20
* @route '/settings/login-alerts'
*/
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::update
* @see app/Http/Controllers/Settings/LoginAlertsController.php:20
* @route '/settings/login-alerts'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::update
* @see app/Http/Controllers/Settings/LoginAlertsController.php:20
* @route '/settings/login-alerts'
*/
updateForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::clearToken
* @see app/Http/Controllers/Settings/LoginAlertsController.php:27
* @route '/settings/login-alerts/token'
*/
export const clearToken = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: clearToken.url(options),
    method: 'delete',
})

clearToken.definition = {
    methods: ["delete"],
    url: '/settings/login-alerts/token',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::clearToken
* @see app/Http/Controllers/Settings/LoginAlertsController.php:27
* @route '/settings/login-alerts/token'
*/
clearToken.url = (options?: RouteQueryOptions) => {
    return clearToken.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::clearToken
* @see app/Http/Controllers/Settings/LoginAlertsController.php:27
* @route '/settings/login-alerts/token'
*/
clearToken.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: clearToken.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::clearToken
* @see app/Http/Controllers/Settings/LoginAlertsController.php:27
* @route '/settings/login-alerts/token'
*/
const clearTokenForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: clearToken.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::clearToken
* @see app/Http/Controllers/Settings/LoginAlertsController.php:27
* @route '/settings/login-alerts/token'
*/
clearTokenForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: clearToken.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

clearToken.form = clearTokenForm

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::sendTest
* @see app/Http/Controllers/Settings/LoginAlertsController.php:34
* @route '/settings/login-alerts/test'
*/
export const sendTest = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendTest.url(options),
    method: 'post',
})

sendTest.definition = {
    methods: ["post"],
    url: '/settings/login-alerts/test',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::sendTest
* @see app/Http/Controllers/Settings/LoginAlertsController.php:34
* @route '/settings/login-alerts/test'
*/
sendTest.url = (options?: RouteQueryOptions) => {
    return sendTest.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::sendTest
* @see app/Http/Controllers/Settings/LoginAlertsController.php:34
* @route '/settings/login-alerts/test'
*/
sendTest.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendTest.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::sendTest
* @see app/Http/Controllers/Settings/LoginAlertsController.php:34
* @route '/settings/login-alerts/test'
*/
const sendTestForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendTest.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::sendTest
* @see app/Http/Controllers/Settings/LoginAlertsController.php:34
* @route '/settings/login-alerts/test'
*/
sendTestForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendTest.url(options),
    method: 'post',
})

sendTest.form = sendTestForm

const LoginAlertsController = { update, clearToken, sendTest }

export default LoginAlertsController