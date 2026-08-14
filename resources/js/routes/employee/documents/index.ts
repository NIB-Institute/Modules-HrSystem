import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:42
* @route '/dashboard/documents/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/documents/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:42
* @route '/dashboard/documents/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:42
* @route '/dashboard/documents/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:42
* @route '/dashboard/documents/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:42
* @route '/dashboard/documents/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:42
* @route '/dashboard/documents/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:42
* @route '/dashboard/documents/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:48
* @route '/dashboard/documents'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/documents',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:48
* @route '/dashboard/documents'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:48
* @route '/dashboard/documents'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:48
* @route '/dashboard/documents'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:48
* @route '/dashboard/documents'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:31
* @route '/dashboard/documents'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/documents',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:31
* @route '/dashboard/documents'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:31
* @route '/dashboard/documents'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:31
* @route '/dashboard/documents'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:31
* @route '/dashboard/documents'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:31
* @route '/dashboard/documents'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:31
* @route '/dashboard/documents'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:63
* @route '/dashboard/documents/{document}/edit'
*/
export const edit = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/documents/{document}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:63
* @route '/dashboard/documents/{document}/edit'
*/
edit.url = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { document: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            document: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        document: typeof args.document === 'object'
        ? args.document.uuid
        : args.document,
    }

    return edit.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:63
* @route '/dashboard/documents/{document}/edit'
*/
edit.get = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:63
* @route '/dashboard/documents/{document}/edit'
*/
edit.head = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:63
* @route '/dashboard/documents/{document}/edit'
*/
const editForm = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:63
* @route '/dashboard/documents/{document}/edit'
*/
editForm.get = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:63
* @route '/dashboard/documents/{document}/edit'
*/
editForm.head = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:70
* @route '/dashboard/documents/{document}'
*/
export const update = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/documents/{document}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:70
* @route '/dashboard/documents/{document}'
*/
update.url = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { document: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            document: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        document: typeof args.document === 'object'
        ? args.document.uuid
        : args.document,
    }

    return update.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:70
* @route '/dashboard/documents/{document}'
*/
update.put = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:70
* @route '/dashboard/documents/{document}'
*/
const updateForm = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:70
* @route '/dashboard/documents/{document}'
*/
updateForm.put = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::download
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:107
* @route '/dashboard/documents/{document}/download'
*/
export const download = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/dashboard/documents/{document}/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::download
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:107
* @route '/dashboard/documents/{document}/download'
*/
download.url = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { document: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            document: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        document: typeof args.document === 'object'
        ? args.document.uuid
        : args.document,
    }

    return download.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::download
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:107
* @route '/dashboard/documents/{document}/download'
*/
download.get = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::download
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:107
* @route '/dashboard/documents/{document}/download'
*/
download.head = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::download
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:107
* @route '/dashboard/documents/{document}/download'
*/
const downloadForm = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::download
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:107
* @route '/dashboard/documents/{document}/download'
*/
downloadForm.get = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::download
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:107
* @route '/dashboard/documents/{document}/download'
*/
downloadForm.head = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

download.form = downloadForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:86
* @route '/dashboard/documents/{document}/delete'
*/
export const confirmDelete = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/documents/{document}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:86
* @route '/dashboard/documents/{document}/delete'
*/
confirmDelete.url = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { document: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            document: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        document: typeof args.document === 'object'
        ? args.document.uuid
        : args.document,
    }

    return confirmDelete.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:86
* @route '/dashboard/documents/{document}/delete'
*/
confirmDelete.get = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:86
* @route '/dashboard/documents/{document}/delete'
*/
confirmDelete.head = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:86
* @route '/dashboard/documents/{document}/delete'
*/
const confirmDeleteForm = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:86
* @route '/dashboard/documents/{document}/delete'
*/
confirmDeleteForm.get = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:86
* @route '/dashboard/documents/{document}/delete'
*/
confirmDeleteForm.head = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmDelete.form = confirmDeleteForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:93
* @route '/dashboard/documents/{document}'
*/
export const destroy = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/documents/{document}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:93
* @route '/dashboard/documents/{document}'
*/
destroy.url = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { document: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { document: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            document: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        document: typeof args.document === 'object'
        ? args.document.uuid
        : args.document,
    }

    return destroy.definition.url
            .replace('{document}', parsedArgs.document.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:93
* @route '/dashboard/documents/{document}'
*/
destroy.delete = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:93
* @route '/dashboard/documents/{document}'
*/
const destroyForm = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\DocumentController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/DocumentController.php:93
* @route '/dashboard/documents/{document}'
*/
destroyForm.delete = (args: { document: string | { uuid: string } } | [document: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const documents = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    index: Object.assign(index, index),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    download: Object.assign(download, download),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
    destroy: Object.assign(destroy, destroy),
}

export default documents