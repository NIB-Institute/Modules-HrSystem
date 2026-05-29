import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\UserRoleController::create
* @see app/Http/Controllers/Settings/UserRoleController.php:104
* @route '/dashboard/settings/users/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::create
* @see app/Http/Controllers/Settings/UserRoleController.php:104
* @route '/dashboard/settings/users/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::create
* @see app/Http/Controllers/Settings/UserRoleController.php:104
* @route '/dashboard/settings/users/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::create
* @see app/Http/Controllers/Settings/UserRoleController.php:104
* @route '/dashboard/settings/users/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::store
* @see app/Http/Controllers/Settings/UserRoleController.php:178
* @route '/dashboard/settings/users'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/settings/users',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::store
* @see app/Http/Controllers/Settings/UserRoleController.php:178
* @route '/dashboard/settings/users'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::store
* @see app/Http/Controllers/Settings/UserRoleController.php:178
* @route '/dashboard/settings/users'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::index
* @see app/Http/Controllers/Settings/UserRoleController.php:26
* @route '/dashboard/settings/users'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::index
* @see app/Http/Controllers/Settings/UserRoleController.php:26
* @route '/dashboard/settings/users'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::index
* @see app/Http/Controllers/Settings/UserRoleController.php:26
* @route '/dashboard/settings/users'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::index
* @see app/Http/Controllers/Settings/UserRoleController.php:26
* @route '/dashboard/settings/users'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::edit
* @see app/Http/Controllers/Settings/UserRoleController.php:263
* @route '/dashboard/settings/users/{user}/edit'
*/
export const edit = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/users/{user}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::edit
* @see app/Http/Controllers/Settings/UserRoleController.php:263
* @route '/dashboard/settings/users/{user}/edit'
*/
edit.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::edit
* @see app/Http/Controllers/Settings/UserRoleController.php:263
* @route '/dashboard/settings/users/{user}/edit'
*/
edit.get = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::edit
* @see app/Http/Controllers/Settings/UserRoleController.php:263
* @route '/dashboard/settings/users/{user}/edit'
*/
edit.head = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::update
* @see app/Http/Controllers/Settings/UserRoleController.php:341
* @route '/dashboard/settings/users/{user}'
*/
export const update = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/settings/users/{user}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::update
* @see app/Http/Controllers/Settings/UserRoleController.php:341
* @route '/dashboard/settings/users/{user}'
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
* @see app/Http/Controllers/Settings/UserRoleController.php:341
* @route '/dashboard/settings/users/{user}'
*/
update.put = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::manageRoles
* @see app/Http/Controllers/Settings/UserRoleController.php:431
* @route '/dashboard/settings/users/{user}/manage-roles'
*/
export const manageRoles = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageRoles.url(args, options),
    method: 'get',
})

manageRoles.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/users/{user}/manage-roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::manageRoles
* @see app/Http/Controllers/Settings/UserRoleController.php:431
* @route '/dashboard/settings/users/{user}/manage-roles'
*/
manageRoles.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return manageRoles.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::manageRoles
* @see app/Http/Controllers/Settings/UserRoleController.php:431
* @route '/dashboard/settings/users/{user}/manage-roles'
*/
manageRoles.get = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageRoles.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::manageRoles
* @see app/Http/Controllers/Settings/UserRoleController.php:431
* @route '/dashboard/settings/users/{user}/manage-roles'
*/
manageRoles.head = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manageRoles.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::updateRoles
* @see app/Http/Controllers/Settings/UserRoleController.php:466
* @route '/dashboard/settings/users/{user}/manage-roles'
*/
export const updateRoles = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateRoles.url(args, options),
    method: 'put',
})

updateRoles.definition = {
    methods: ["put"],
    url: '/dashboard/settings/users/{user}/manage-roles',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::updateRoles
* @see app/Http/Controllers/Settings/UserRoleController.php:466
* @route '/dashboard/settings/users/{user}/manage-roles'
*/
updateRoles.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return updateRoles.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::updateRoles
* @see app/Http/Controllers/Settings/UserRoleController.php:466
* @route '/dashboard/settings/users/{user}/manage-roles'
*/
updateRoles.put = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateRoles.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::assignRole
* @see app/Http/Controllers/Settings/UserRoleController.php:509
* @route '/dashboard/settings/users/{user}/assign-role'
*/
export const assignRole = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignRole.url(args, options),
    method: 'post',
})

assignRole.definition = {
    methods: ["post"],
    url: '/dashboard/settings/users/{user}/assign-role',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::assignRole
* @see app/Http/Controllers/Settings/UserRoleController.php:509
* @route '/dashboard/settings/users/{user}/assign-role'
*/
assignRole.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return assignRole.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::assignRole
* @see app/Http/Controllers/Settings/UserRoleController.php:509
* @route '/dashboard/settings/users/{user}/assign-role'
*/
assignRole.post = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignRole.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::removeRole
* @see app/Http/Controllers/Settings/UserRoleController.php:524
* @route '/dashboard/settings/users/{user}/remove-role'
*/
export const removeRole = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removeRole.url(args, options),
    method: 'post',
})

removeRole.definition = {
    methods: ["post"],
    url: '/dashboard/settings/users/{user}/remove-role',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::removeRole
* @see app/Http/Controllers/Settings/UserRoleController.php:524
* @route '/dashboard/settings/users/{user}/remove-role'
*/
removeRole.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return removeRole.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::removeRole
* @see app/Http/Controllers/Settings/UserRoleController.php:524
* @route '/dashboard/settings/users/{user}/remove-role'
*/
removeRole.post = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removeRole.url(args, options),
    method: 'post',
})

const UserRoleController = { create, store, index, edit, update, manageRoles, updateRoles, assignRole, removeRole }

export default UserRoleController