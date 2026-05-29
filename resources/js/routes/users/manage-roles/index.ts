import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\UserRoleController::update
* @see app/Http/Controllers/Settings/UserRoleController.php:466
* @route '/dashboard/settings/users/{user}/manage-roles'
*/
export const update = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/settings/users/{user}/manage-roles',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::update
* @see app/Http/Controllers/Settings/UserRoleController.php:466
* @route '/dashboard/settings/users/{user}/manage-roles'
*/
update.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return update.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::update
* @see app/Http/Controllers/Settings/UserRoleController.php:466
* @route '/dashboard/settings/users/{user}/manage-roles'
*/
update.put = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

const manageRoles = {
    update: Object.assign(update, update),
}

export default manageRoles