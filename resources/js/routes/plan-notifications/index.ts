import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::edit
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/settings/employee/plan-notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::edit
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::edit
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
*/
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::edit
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
*/
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::edit
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
*/
const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::edit
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
*/
editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::edit
* @see app/Http/Controllers/Settings/PlanNotificationController.php:22
* @route '/settings/employee/plan-notifications'
*/
editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

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
* @see \App\Http\Controllers\Settings\PlanNotificationController::test
* @see app/Http/Controllers/Settings/PlanNotificationController.php:42
* @route '/settings/employee/plan-notifications/test'
*/
export const test = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(options),
    method: 'post',
})

test.definition = {
    methods: ["post"],
    url: '/settings/employee/plan-notifications/test',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::test
* @see app/Http/Controllers/Settings/PlanNotificationController.php:42
* @route '/settings/employee/plan-notifications/test'
*/
test.url = (options?: RouteQueryOptions) => {
    return test.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::test
* @see app/Http/Controllers/Settings/PlanNotificationController.php:42
* @route '/settings/employee/plan-notifications/test'
*/
test.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::test
* @see app/Http/Controllers/Settings/PlanNotificationController.php:42
* @route '/settings/employee/plan-notifications/test'
*/
const testForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: test.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\PlanNotificationController::test
* @see app/Http/Controllers/Settings/PlanNotificationController.php:42
* @route '/settings/employee/plan-notifications/test'
*/
testForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: test.url(options),
    method: 'post',
})

test.form = testForm

const planNotifications = {
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    test: Object.assign(test, test),
}

export default planNotifications