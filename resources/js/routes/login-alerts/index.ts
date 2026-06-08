import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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
* @see \App\Http\Controllers\Settings\LoginAlertsController::test
* @see app/Http/Controllers/Settings/LoginAlertsController.php:34
* @route '/settings/login-alerts/test'
*/
export const test = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(options),
    method: 'post',
})

test.definition = {
    methods: ["post"],
    url: '/settings/login-alerts/test',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::test
* @see app/Http/Controllers/Settings/LoginAlertsController.php:34
* @route '/settings/login-alerts/test'
*/
test.url = (options?: RouteQueryOptions) => {
    return test.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::test
* @see app/Http/Controllers/Settings/LoginAlertsController.php:34
* @route '/settings/login-alerts/test'
*/
test.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::test
* @see app/Http/Controllers/Settings/LoginAlertsController.php:34
* @route '/settings/login-alerts/test'
*/
const testForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: test.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\LoginAlertsController::test
* @see app/Http/Controllers/Settings/LoginAlertsController.php:34
* @route '/settings/login-alerts/test'
*/
testForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: test.url(options),
    method: 'post',
})

test.form = testForm

const loginAlerts = {
    update: Object.assign(update, update),
    clearToken: Object.assign(clearToken, clearToken),
    test: Object.assign(test, test),
}

export default loginAlerts