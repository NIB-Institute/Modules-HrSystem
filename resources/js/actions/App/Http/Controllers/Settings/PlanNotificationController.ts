import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::index
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings/employee/plan-notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::index
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::index
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::index
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::index
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::index
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::index
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
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
* @see \App\Http\Controllers\Settings\PlanNotificationController::update
* @see app/Http/Controllers/Settings/PlanNotificationController.php:35
* @route '/settings/employee/plan-notifications'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/settings/employee/plan-notifications',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::update
* @see app/Http/Controllers/Settings/PlanNotificationController.php:35
* @route '/settings/employee/plan-notifications'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::update
* @see app/Http/Controllers/Settings/PlanNotificationController.php:35
* @route '/settings/employee/plan-notifications'
*/
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::update
* @see app/Http/Controllers/Settings/PlanNotificationController.php:35
* @route '/settings/employee/plan-notifications'
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
* @see \App\Http\Controllers\Settings\PlanNotificationController::update
* @see app/Http/Controllers/Settings/PlanNotificationController.php:35
* @route '/settings/employee/plan-notifications'
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
* @see \App\Http\Controllers\Settings\PlanNotificationController::sendTest
* @see app/Http/Controllers/Settings/PlanNotificationController.php:42
* @route '/settings/employee/plan-notifications/test'
*/
export const sendTest = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendTest.url(options),
    method: 'post',
})

sendTest.definition = {
    methods: ["post"],
    url: '/settings/employee/plan-notifications/test',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::sendTest
* @see app/Http/Controllers/Settings/PlanNotificationController.php:42
* @route '/settings/employee/plan-notifications/test'
*/
sendTest.url = (options?: RouteQueryOptions) => {
    return sendTest.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::sendTest
* @see app/Http/Controllers/Settings/PlanNotificationController.php:42
* @route '/settings/employee/plan-notifications/test'
*/
sendTest.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendTest.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::sendTest
* @see app/Http/Controllers/Settings/PlanNotificationController.php:42
* @route '/settings/employee/plan-notifications/test'
*/
const sendTestForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendTest.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::sendTest
* @see app/Http/Controllers/Settings/PlanNotificationController.php:42
* @route '/settings/employee/plan-notifications/test'
*/
sendTestForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendTest.url(options),
    method: 'post',
})

sendTest.form = sendTestForm

const PlanNotificationController = { index, update, sendTest }

export default PlanNotificationController