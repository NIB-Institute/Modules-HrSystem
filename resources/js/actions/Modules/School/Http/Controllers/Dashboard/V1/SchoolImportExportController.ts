import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartmentsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:43
* @route '/dashboard/departments/export-options'
*/
export const exportDepartmentsOptions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportDepartmentsOptions.url(options),
    method: 'get',
})

exportDepartmentsOptions.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/export-options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartmentsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:43
* @route '/dashboard/departments/export-options'
*/
exportDepartmentsOptions.url = (options?: RouteQueryOptions) => {
    return exportDepartmentsOptions.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartmentsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:43
* @route '/dashboard/departments/export-options'
*/
exportDepartmentsOptions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportDepartmentsOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartmentsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:43
* @route '/dashboard/departments/export-options'
*/
exportDepartmentsOptions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportDepartmentsOptions.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartmentsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:43
* @route '/dashboard/departments/export-options'
*/
const exportDepartmentsOptionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportDepartmentsOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartmentsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:43
* @route '/dashboard/departments/export-options'
*/
exportDepartmentsOptionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportDepartmentsOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartmentsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:43
* @route '/dashboard/departments/export-options'
*/
exportDepartmentsOptionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportDepartmentsOptions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportDepartmentsOptions.form = exportDepartmentsOptionsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:53
* @route '/dashboard/departments/export'
*/
export const exportDepartments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportDepartments.url(options),
    method: 'get',
})

exportDepartments.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:53
* @route '/dashboard/departments/export'
*/
exportDepartments.url = (options?: RouteQueryOptions) => {
    return exportDepartments.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:53
* @route '/dashboard/departments/export'
*/
exportDepartments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportDepartments.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:53
* @route '/dashboard/departments/export'
*/
exportDepartments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportDepartments.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:53
* @route '/dashboard/departments/export'
*/
const exportDepartmentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportDepartments.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:53
* @route '/dashboard/departments/export'
*/
exportDepartmentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportDepartments.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:53
* @route '/dashboard/departments/export'
*/
exportDepartmentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportDepartments.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportDepartments.form = exportDepartmentsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:58
* @route '/dashboard/departments/import'
*/
export const showImportDepartments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImportDepartments.url(options),
    method: 'get',
})

showImportDepartments.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:58
* @route '/dashboard/departments/import'
*/
showImportDepartments.url = (options?: RouteQueryOptions) => {
    return showImportDepartments.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:58
* @route '/dashboard/departments/import'
*/
showImportDepartments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImportDepartments.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:58
* @route '/dashboard/departments/import'
*/
showImportDepartments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showImportDepartments.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:58
* @route '/dashboard/departments/import'
*/
const showImportDepartmentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportDepartments.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:58
* @route '/dashboard/departments/import'
*/
showImportDepartmentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportDepartments.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:58
* @route '/dashboard/departments/import'
*/
showImportDepartmentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportDepartments.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showImportDepartments.form = showImportDepartmentsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:70
* @route '/dashboard/departments/import'
*/
export const importDepartments = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importDepartments.url(options),
    method: 'post',
})

importDepartments.definition = {
    methods: ["post"],
    url: '/dashboard/departments/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:70
* @route '/dashboard/departments/import'
*/
importDepartments.url = (options?: RouteQueryOptions) => {
    return importDepartments.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:70
* @route '/dashboard/departments/import'
*/
importDepartments.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importDepartments.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:70
* @route '/dashboard/departments/import'
*/
const importDepartmentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importDepartments.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:70
* @route '/dashboard/departments/import'
*/
importDepartmentsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importDepartments.url(options),
    method: 'post',
})

importDepartments.form = importDepartmentsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:65
* @route '/dashboard/departments/import/preview'
*/
export const previewDepartments = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewDepartments.url(options),
    method: 'post',
})

previewDepartments.definition = {
    methods: ["post"],
    url: '/dashboard/departments/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:65
* @route '/dashboard/departments/import/preview'
*/
previewDepartments.url = (options?: RouteQueryOptions) => {
    return previewDepartments.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:65
* @route '/dashboard/departments/import/preview'
*/
previewDepartments.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewDepartments.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:65
* @route '/dashboard/departments/import/preview'
*/
const previewDepartmentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewDepartments.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:65
* @route '/dashboard/departments/import/preview'
*/
previewDepartmentsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewDepartments.url(options),
    method: 'post',
})

previewDepartments.form = previewDepartmentsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadDepartmentsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:75
* @route '/dashboard/departments/template'
*/
export const downloadDepartmentsTemplate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadDepartmentsTemplate.url(options),
    method: 'get',
})

downloadDepartmentsTemplate.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadDepartmentsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:75
* @route '/dashboard/departments/template'
*/
downloadDepartmentsTemplate.url = (options?: RouteQueryOptions) => {
    return downloadDepartmentsTemplate.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadDepartmentsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:75
* @route '/dashboard/departments/template'
*/
downloadDepartmentsTemplate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadDepartmentsTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadDepartmentsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:75
* @route '/dashboard/departments/template'
*/
downloadDepartmentsTemplate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadDepartmentsTemplate.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadDepartmentsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:75
* @route '/dashboard/departments/template'
*/
const downloadDepartmentsTemplateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadDepartmentsTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadDepartmentsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:75
* @route '/dashboard/departments/template'
*/
downloadDepartmentsTemplateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadDepartmentsTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadDepartmentsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:75
* @route '/dashboard/departments/template'
*/
downloadDepartmentsTemplateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadDepartmentsTemplate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

downloadDepartmentsTemplate.form = downloadDepartmentsTemplateForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassroomsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:92
* @route '/dashboard/classrooms/export-options'
*/
export const exportClassroomsOptions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportClassroomsOptions.url(options),
    method: 'get',
})

exportClassroomsOptions.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/export-options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassroomsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:92
* @route '/dashboard/classrooms/export-options'
*/
exportClassroomsOptions.url = (options?: RouteQueryOptions) => {
    return exportClassroomsOptions.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassroomsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:92
* @route '/dashboard/classrooms/export-options'
*/
exportClassroomsOptions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportClassroomsOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassroomsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:92
* @route '/dashboard/classrooms/export-options'
*/
exportClassroomsOptions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportClassroomsOptions.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassroomsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:92
* @route '/dashboard/classrooms/export-options'
*/
const exportClassroomsOptionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportClassroomsOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassroomsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:92
* @route '/dashboard/classrooms/export-options'
*/
exportClassroomsOptionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportClassroomsOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassroomsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:92
* @route '/dashboard/classrooms/export-options'
*/
exportClassroomsOptionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportClassroomsOptions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportClassroomsOptions.form = exportClassroomsOptionsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:102
* @route '/dashboard/classrooms/export'
*/
export const exportClassrooms = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportClassrooms.url(options),
    method: 'get',
})

exportClassrooms.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:102
* @route '/dashboard/classrooms/export'
*/
exportClassrooms.url = (options?: RouteQueryOptions) => {
    return exportClassrooms.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:102
* @route '/dashboard/classrooms/export'
*/
exportClassrooms.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportClassrooms.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:102
* @route '/dashboard/classrooms/export'
*/
exportClassrooms.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportClassrooms.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:102
* @route '/dashboard/classrooms/export'
*/
const exportClassroomsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportClassrooms.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:102
* @route '/dashboard/classrooms/export'
*/
exportClassroomsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportClassrooms.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:102
* @route '/dashboard/classrooms/export'
*/
exportClassroomsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportClassrooms.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportClassrooms.form = exportClassroomsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:107
* @route '/dashboard/classrooms/import'
*/
export const showImportClassrooms = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImportClassrooms.url(options),
    method: 'get',
})

showImportClassrooms.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:107
* @route '/dashboard/classrooms/import'
*/
showImportClassrooms.url = (options?: RouteQueryOptions) => {
    return showImportClassrooms.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:107
* @route '/dashboard/classrooms/import'
*/
showImportClassrooms.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImportClassrooms.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:107
* @route '/dashboard/classrooms/import'
*/
showImportClassrooms.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showImportClassrooms.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:107
* @route '/dashboard/classrooms/import'
*/
const showImportClassroomsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportClassrooms.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:107
* @route '/dashboard/classrooms/import'
*/
showImportClassroomsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportClassrooms.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:107
* @route '/dashboard/classrooms/import'
*/
showImportClassroomsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportClassrooms.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showImportClassrooms.form = showImportClassroomsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:119
* @route '/dashboard/classrooms/import'
*/
export const importClassrooms = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importClassrooms.url(options),
    method: 'post',
})

importClassrooms.definition = {
    methods: ["post"],
    url: '/dashboard/classrooms/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:119
* @route '/dashboard/classrooms/import'
*/
importClassrooms.url = (options?: RouteQueryOptions) => {
    return importClassrooms.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:119
* @route '/dashboard/classrooms/import'
*/
importClassrooms.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importClassrooms.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:119
* @route '/dashboard/classrooms/import'
*/
const importClassroomsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importClassrooms.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:119
* @route '/dashboard/classrooms/import'
*/
importClassroomsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importClassrooms.url(options),
    method: 'post',
})

importClassrooms.form = importClassroomsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:114
* @route '/dashboard/classrooms/import/preview'
*/
export const previewClassrooms = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewClassrooms.url(options),
    method: 'post',
})

previewClassrooms.definition = {
    methods: ["post"],
    url: '/dashboard/classrooms/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:114
* @route '/dashboard/classrooms/import/preview'
*/
previewClassrooms.url = (options?: RouteQueryOptions) => {
    return previewClassrooms.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:114
* @route '/dashboard/classrooms/import/preview'
*/
previewClassrooms.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewClassrooms.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:114
* @route '/dashboard/classrooms/import/preview'
*/
const previewClassroomsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewClassrooms.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewClassrooms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:114
* @route '/dashboard/classrooms/import/preview'
*/
previewClassroomsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewClassrooms.url(options),
    method: 'post',
})

previewClassrooms.form = previewClassroomsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadClassroomsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:124
* @route '/dashboard/classrooms/template'
*/
export const downloadClassroomsTemplate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadClassroomsTemplate.url(options),
    method: 'get',
})

downloadClassroomsTemplate.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadClassroomsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:124
* @route '/dashboard/classrooms/template'
*/
downloadClassroomsTemplate.url = (options?: RouteQueryOptions) => {
    return downloadClassroomsTemplate.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadClassroomsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:124
* @route '/dashboard/classrooms/template'
*/
downloadClassroomsTemplate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadClassroomsTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadClassroomsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:124
* @route '/dashboard/classrooms/template'
*/
downloadClassroomsTemplate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadClassroomsTemplate.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadClassroomsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:124
* @route '/dashboard/classrooms/template'
*/
const downloadClassroomsTemplateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadClassroomsTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadClassroomsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:124
* @route '/dashboard/classrooms/template'
*/
downloadClassroomsTemplateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadClassroomsTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadClassroomsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:124
* @route '/dashboard/classrooms/template'
*/
downloadClassroomsTemplateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadClassroomsTemplate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

downloadClassroomsTemplate.form = downloadClassroomsTemplateForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCoursesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:140
* @route '/dashboard/courses/export-options'
*/
export const exportCoursesOptions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportCoursesOptions.url(options),
    method: 'get',
})

exportCoursesOptions.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/export-options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCoursesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:140
* @route '/dashboard/courses/export-options'
*/
exportCoursesOptions.url = (options?: RouteQueryOptions) => {
    return exportCoursesOptions.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCoursesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:140
* @route '/dashboard/courses/export-options'
*/
exportCoursesOptions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportCoursesOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCoursesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:140
* @route '/dashboard/courses/export-options'
*/
exportCoursesOptions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportCoursesOptions.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCoursesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:140
* @route '/dashboard/courses/export-options'
*/
const exportCoursesOptionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportCoursesOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCoursesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:140
* @route '/dashboard/courses/export-options'
*/
exportCoursesOptionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportCoursesOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCoursesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:140
* @route '/dashboard/courses/export-options'
*/
exportCoursesOptionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportCoursesOptions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportCoursesOptions.form = exportCoursesOptionsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:150
* @route '/dashboard/courses/export'
*/
export const exportCourses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportCourses.url(options),
    method: 'get',
})

exportCourses.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:150
* @route '/dashboard/courses/export'
*/
exportCourses.url = (options?: RouteQueryOptions) => {
    return exportCourses.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:150
* @route '/dashboard/courses/export'
*/
exportCourses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportCourses.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:150
* @route '/dashboard/courses/export'
*/
exportCourses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportCourses.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:150
* @route '/dashboard/courses/export'
*/
const exportCoursesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportCourses.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:150
* @route '/dashboard/courses/export'
*/
exportCoursesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportCourses.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:150
* @route '/dashboard/courses/export'
*/
exportCoursesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportCourses.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportCourses.form = exportCoursesForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:155
* @route '/dashboard/courses/import'
*/
export const showImportCourses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImportCourses.url(options),
    method: 'get',
})

showImportCourses.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:155
* @route '/dashboard/courses/import'
*/
showImportCourses.url = (options?: RouteQueryOptions) => {
    return showImportCourses.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:155
* @route '/dashboard/courses/import'
*/
showImportCourses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImportCourses.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:155
* @route '/dashboard/courses/import'
*/
showImportCourses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showImportCourses.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:155
* @route '/dashboard/courses/import'
*/
const showImportCoursesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportCourses.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:155
* @route '/dashboard/courses/import'
*/
showImportCoursesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportCourses.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:155
* @route '/dashboard/courses/import'
*/
showImportCoursesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportCourses.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showImportCourses.form = showImportCoursesForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:167
* @route '/dashboard/courses/import'
*/
export const importCourses = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importCourses.url(options),
    method: 'post',
})

importCourses.definition = {
    methods: ["post"],
    url: '/dashboard/courses/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:167
* @route '/dashboard/courses/import'
*/
importCourses.url = (options?: RouteQueryOptions) => {
    return importCourses.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:167
* @route '/dashboard/courses/import'
*/
importCourses.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importCourses.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:167
* @route '/dashboard/courses/import'
*/
const importCoursesForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importCourses.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:167
* @route '/dashboard/courses/import'
*/
importCoursesForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importCourses.url(options),
    method: 'post',
})

importCourses.form = importCoursesForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:162
* @route '/dashboard/courses/import/preview'
*/
export const previewCourses = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewCourses.url(options),
    method: 'post',
})

previewCourses.definition = {
    methods: ["post"],
    url: '/dashboard/courses/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:162
* @route '/dashboard/courses/import/preview'
*/
previewCourses.url = (options?: RouteQueryOptions) => {
    return previewCourses.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:162
* @route '/dashboard/courses/import/preview'
*/
previewCourses.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewCourses.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:162
* @route '/dashboard/courses/import/preview'
*/
const previewCoursesForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewCourses.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewCourses
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:162
* @route '/dashboard/courses/import/preview'
*/
previewCoursesForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewCourses.url(options),
    method: 'post',
})

previewCourses.form = previewCoursesForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadCoursesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:172
* @route '/dashboard/courses/template'
*/
export const downloadCoursesTemplate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadCoursesTemplate.url(options),
    method: 'get',
})

downloadCoursesTemplate.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadCoursesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:172
* @route '/dashboard/courses/template'
*/
downloadCoursesTemplate.url = (options?: RouteQueryOptions) => {
    return downloadCoursesTemplate.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadCoursesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:172
* @route '/dashboard/courses/template'
*/
downloadCoursesTemplate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadCoursesTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadCoursesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:172
* @route '/dashboard/courses/template'
*/
downloadCoursesTemplate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadCoursesTemplate.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadCoursesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:172
* @route '/dashboard/courses/template'
*/
const downloadCoursesTemplateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadCoursesTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadCoursesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:172
* @route '/dashboard/courses/template'
*/
downloadCoursesTemplateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadCoursesTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadCoursesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:172
* @route '/dashboard/courses/template'
*/
downloadCoursesTemplateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadCoursesTemplate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

downloadCoursesTemplate.form = downloadCoursesTemplateForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportProgramsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:190
* @route '/dashboard/programs/export-options'
*/
export const exportProgramsOptions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportProgramsOptions.url(options),
    method: 'get',
})

exportProgramsOptions.definition = {
    methods: ["get","head"],
    url: '/dashboard/programs/export-options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportProgramsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:190
* @route '/dashboard/programs/export-options'
*/
exportProgramsOptions.url = (options?: RouteQueryOptions) => {
    return exportProgramsOptions.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportProgramsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:190
* @route '/dashboard/programs/export-options'
*/
exportProgramsOptions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportProgramsOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportProgramsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:190
* @route '/dashboard/programs/export-options'
*/
exportProgramsOptions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportProgramsOptions.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportProgramsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:190
* @route '/dashboard/programs/export-options'
*/
const exportProgramsOptionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportProgramsOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportProgramsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:190
* @route '/dashboard/programs/export-options'
*/
exportProgramsOptionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportProgramsOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportProgramsOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:190
* @route '/dashboard/programs/export-options'
*/
exportProgramsOptionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportProgramsOptions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportProgramsOptions.form = exportProgramsOptionsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:200
* @route '/dashboard/programs/export'
*/
export const exportPrograms = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPrograms.url(options),
    method: 'get',
})

exportPrograms.definition = {
    methods: ["get","head"],
    url: '/dashboard/programs/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:200
* @route '/dashboard/programs/export'
*/
exportPrograms.url = (options?: RouteQueryOptions) => {
    return exportPrograms.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:200
* @route '/dashboard/programs/export'
*/
exportPrograms.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportPrograms.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:200
* @route '/dashboard/programs/export'
*/
exportPrograms.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportPrograms.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:200
* @route '/dashboard/programs/export'
*/
const exportProgramsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportPrograms.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:200
* @route '/dashboard/programs/export'
*/
exportProgramsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportPrograms.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:200
* @route '/dashboard/programs/export'
*/
exportProgramsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportPrograms.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportPrograms.form = exportProgramsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:205
* @route '/dashboard/programs/import'
*/
export const showImportPrograms = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImportPrograms.url(options),
    method: 'get',
})

showImportPrograms.definition = {
    methods: ["get","head"],
    url: '/dashboard/programs/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:205
* @route '/dashboard/programs/import'
*/
showImportPrograms.url = (options?: RouteQueryOptions) => {
    return showImportPrograms.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:205
* @route '/dashboard/programs/import'
*/
showImportPrograms.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImportPrograms.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:205
* @route '/dashboard/programs/import'
*/
showImportPrograms.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showImportPrograms.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:205
* @route '/dashboard/programs/import'
*/
const showImportProgramsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportPrograms.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:205
* @route '/dashboard/programs/import'
*/
showImportProgramsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportPrograms.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:205
* @route '/dashboard/programs/import'
*/
showImportProgramsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportPrograms.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showImportPrograms.form = showImportProgramsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:217
* @route '/dashboard/programs/import'
*/
export const importPrograms = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importPrograms.url(options),
    method: 'post',
})

importPrograms.definition = {
    methods: ["post"],
    url: '/dashboard/programs/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:217
* @route '/dashboard/programs/import'
*/
importPrograms.url = (options?: RouteQueryOptions) => {
    return importPrograms.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:217
* @route '/dashboard/programs/import'
*/
importPrograms.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importPrograms.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:217
* @route '/dashboard/programs/import'
*/
const importProgramsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importPrograms.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:217
* @route '/dashboard/programs/import'
*/
importProgramsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importPrograms.url(options),
    method: 'post',
})

importPrograms.form = importProgramsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:212
* @route '/dashboard/programs/import/preview'
*/
export const previewPrograms = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewPrograms.url(options),
    method: 'post',
})

previewPrograms.definition = {
    methods: ["post"],
    url: '/dashboard/programs/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:212
* @route '/dashboard/programs/import/preview'
*/
previewPrograms.url = (options?: RouteQueryOptions) => {
    return previewPrograms.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:212
* @route '/dashboard/programs/import/preview'
*/
previewPrograms.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewPrograms.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:212
* @route '/dashboard/programs/import/preview'
*/
const previewProgramsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewPrograms.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:212
* @route '/dashboard/programs/import/preview'
*/
previewProgramsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewPrograms.url(options),
    method: 'post',
})

previewPrograms.form = previewProgramsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadProgramsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:222
* @route '/dashboard/programs/template'
*/
export const downloadProgramsTemplate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadProgramsTemplate.url(options),
    method: 'get',
})

downloadProgramsTemplate.definition = {
    methods: ["get","head"],
    url: '/dashboard/programs/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadProgramsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:222
* @route '/dashboard/programs/template'
*/
downloadProgramsTemplate.url = (options?: RouteQueryOptions) => {
    return downloadProgramsTemplate.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadProgramsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:222
* @route '/dashboard/programs/template'
*/
downloadProgramsTemplate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadProgramsTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadProgramsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:222
* @route '/dashboard/programs/template'
*/
downloadProgramsTemplate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadProgramsTemplate.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadProgramsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:222
* @route '/dashboard/programs/template'
*/
const downloadProgramsTemplateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadProgramsTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadProgramsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:222
* @route '/dashboard/programs/template'
*/
downloadProgramsTemplateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadProgramsTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadProgramsTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:222
* @route '/dashboard/programs/template'
*/
downloadProgramsTemplateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadProgramsTemplate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

downloadProgramsTemplate.form = downloadProgramsTemplateForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventoriesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:240
* @route '/dashboard/inventories/export-options'
*/
export const exportInventoriesOptions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportInventoriesOptions.url(options),
    method: 'get',
})

exportInventoriesOptions.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/export-options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventoriesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:240
* @route '/dashboard/inventories/export-options'
*/
exportInventoriesOptions.url = (options?: RouteQueryOptions) => {
    return exportInventoriesOptions.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventoriesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:240
* @route '/dashboard/inventories/export-options'
*/
exportInventoriesOptions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportInventoriesOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventoriesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:240
* @route '/dashboard/inventories/export-options'
*/
exportInventoriesOptions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportInventoriesOptions.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventoriesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:240
* @route '/dashboard/inventories/export-options'
*/
const exportInventoriesOptionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportInventoriesOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventoriesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:240
* @route '/dashboard/inventories/export-options'
*/
exportInventoriesOptionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportInventoriesOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventoriesOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:240
* @route '/dashboard/inventories/export-options'
*/
exportInventoriesOptionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportInventoriesOptions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportInventoriesOptions.form = exportInventoriesOptionsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:250
* @route '/dashboard/inventories/export'
*/
export const exportInventories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportInventories.url(options),
    method: 'get',
})

exportInventories.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:250
* @route '/dashboard/inventories/export'
*/
exportInventories.url = (options?: RouteQueryOptions) => {
    return exportInventories.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:250
* @route '/dashboard/inventories/export'
*/
exportInventories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportInventories.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:250
* @route '/dashboard/inventories/export'
*/
exportInventories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportInventories.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:250
* @route '/dashboard/inventories/export'
*/
const exportInventoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportInventories.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:250
* @route '/dashboard/inventories/export'
*/
exportInventoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportInventories.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:250
* @route '/dashboard/inventories/export'
*/
exportInventoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportInventories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportInventories.form = exportInventoriesForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:255
* @route '/dashboard/inventories/import'
*/
export const showImportInventories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImportInventories.url(options),
    method: 'get',
})

showImportInventories.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:255
* @route '/dashboard/inventories/import'
*/
showImportInventories.url = (options?: RouteQueryOptions) => {
    return showImportInventories.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:255
* @route '/dashboard/inventories/import'
*/
showImportInventories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImportInventories.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:255
* @route '/dashboard/inventories/import'
*/
showImportInventories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showImportInventories.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:255
* @route '/dashboard/inventories/import'
*/
const showImportInventoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportInventories.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:255
* @route '/dashboard/inventories/import'
*/
showImportInventoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportInventories.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:255
* @route '/dashboard/inventories/import'
*/
showImportInventoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportInventories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showImportInventories.form = showImportInventoriesForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:267
* @route '/dashboard/inventories/import'
*/
export const importInventories = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importInventories.url(options),
    method: 'post',
})

importInventories.definition = {
    methods: ["post"],
    url: '/dashboard/inventories/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:267
* @route '/dashboard/inventories/import'
*/
importInventories.url = (options?: RouteQueryOptions) => {
    return importInventories.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:267
* @route '/dashboard/inventories/import'
*/
importInventories.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importInventories.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:267
* @route '/dashboard/inventories/import'
*/
const importInventoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importInventories.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:267
* @route '/dashboard/inventories/import'
*/
importInventoriesForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importInventories.url(options),
    method: 'post',
})

importInventories.form = importInventoriesForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:262
* @route '/dashboard/inventories/import/preview'
*/
export const previewInventories = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewInventories.url(options),
    method: 'post',
})

previewInventories.definition = {
    methods: ["post"],
    url: '/dashboard/inventories/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:262
* @route '/dashboard/inventories/import/preview'
*/
previewInventories.url = (options?: RouteQueryOptions) => {
    return previewInventories.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:262
* @route '/dashboard/inventories/import/preview'
*/
previewInventories.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewInventories.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:262
* @route '/dashboard/inventories/import/preview'
*/
const previewInventoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewInventories.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewInventories
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:262
* @route '/dashboard/inventories/import/preview'
*/
previewInventoriesForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewInventories.url(options),
    method: 'post',
})

previewInventories.form = previewInventoriesForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadInventoriesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:277
* @route '/dashboard/inventories/template'
*/
export const downloadInventoriesTemplate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadInventoriesTemplate.url(options),
    method: 'get',
})

downloadInventoriesTemplate.definition = {
    methods: ["get","head"],
    url: '/dashboard/inventories/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadInventoriesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:277
* @route '/dashboard/inventories/template'
*/
downloadInventoriesTemplate.url = (options?: RouteQueryOptions) => {
    return downloadInventoriesTemplate.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadInventoriesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:277
* @route '/dashboard/inventories/template'
*/
downloadInventoriesTemplate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadInventoriesTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadInventoriesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:277
* @route '/dashboard/inventories/template'
*/
downloadInventoriesTemplate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadInventoriesTemplate.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadInventoriesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:277
* @route '/dashboard/inventories/template'
*/
const downloadInventoriesTemplateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadInventoriesTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadInventoriesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:277
* @route '/dashboard/inventories/template'
*/
downloadInventoriesTemplateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadInventoriesTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadInventoriesTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:277
* @route '/dashboard/inventories/template'
*/
downloadInventoriesTemplateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadInventoriesTemplate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

downloadInventoriesTemplate.form = downloadInventoriesTemplateForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipmentOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:304
* @route '/dashboard/equipment/export-options'
*/
export const exportEquipmentOptions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportEquipmentOptions.url(options),
    method: 'get',
})

exportEquipmentOptions.definition = {
    methods: ["get","head"],
    url: '/dashboard/equipment/export-options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipmentOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:304
* @route '/dashboard/equipment/export-options'
*/
exportEquipmentOptions.url = (options?: RouteQueryOptions) => {
    return exportEquipmentOptions.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipmentOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:304
* @route '/dashboard/equipment/export-options'
*/
exportEquipmentOptions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportEquipmentOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipmentOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:304
* @route '/dashboard/equipment/export-options'
*/
exportEquipmentOptions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportEquipmentOptions.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipmentOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:304
* @route '/dashboard/equipment/export-options'
*/
const exportEquipmentOptionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportEquipmentOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipmentOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:304
* @route '/dashboard/equipment/export-options'
*/
exportEquipmentOptionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportEquipmentOptions.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipmentOptions
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:304
* @route '/dashboard/equipment/export-options'
*/
exportEquipmentOptionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportEquipmentOptions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportEquipmentOptions.form = exportEquipmentOptionsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:314
* @route '/dashboard/equipment/export'
*/
export const exportEquipment = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportEquipment.url(options),
    method: 'get',
})

exportEquipment.definition = {
    methods: ["get","head"],
    url: '/dashboard/equipment/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:314
* @route '/dashboard/equipment/export'
*/
exportEquipment.url = (options?: RouteQueryOptions) => {
    return exportEquipment.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:314
* @route '/dashboard/equipment/export'
*/
exportEquipment.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportEquipment.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:314
* @route '/dashboard/equipment/export'
*/
exportEquipment.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportEquipment.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:314
* @route '/dashboard/equipment/export'
*/
const exportEquipmentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportEquipment.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:314
* @route '/dashboard/equipment/export'
*/
exportEquipmentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportEquipment.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:314
* @route '/dashboard/equipment/export'
*/
exportEquipmentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportEquipment.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportEquipment.form = exportEquipmentForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:319
* @route '/dashboard/equipment/import'
*/
export const showImportEquipment = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImportEquipment.url(options),
    method: 'get',
})

showImportEquipment.definition = {
    methods: ["get","head"],
    url: '/dashboard/equipment/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:319
* @route '/dashboard/equipment/import'
*/
showImportEquipment.url = (options?: RouteQueryOptions) => {
    return showImportEquipment.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:319
* @route '/dashboard/equipment/import'
*/
showImportEquipment.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImportEquipment.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:319
* @route '/dashboard/equipment/import'
*/
showImportEquipment.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showImportEquipment.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:319
* @route '/dashboard/equipment/import'
*/
const showImportEquipmentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportEquipment.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:319
* @route '/dashboard/equipment/import'
*/
showImportEquipmentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportEquipment.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::showImportEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:319
* @route '/dashboard/equipment/import'
*/
showImportEquipmentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImportEquipment.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showImportEquipment.form = showImportEquipmentForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:331
* @route '/dashboard/equipment/import'
*/
export const importEquipment = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importEquipment.url(options),
    method: 'post',
})

importEquipment.definition = {
    methods: ["post"],
    url: '/dashboard/equipment/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:331
* @route '/dashboard/equipment/import'
*/
importEquipment.url = (options?: RouteQueryOptions) => {
    return importEquipment.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:331
* @route '/dashboard/equipment/import'
*/
importEquipment.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importEquipment.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:331
* @route '/dashboard/equipment/import'
*/
const importEquipmentForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importEquipment.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:331
* @route '/dashboard/equipment/import'
*/
importEquipmentForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importEquipment.url(options),
    method: 'post',
})

importEquipment.form = importEquipmentForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:326
* @route '/dashboard/equipment/import/preview'
*/
export const previewEquipment = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewEquipment.url(options),
    method: 'post',
})

previewEquipment.definition = {
    methods: ["post"],
    url: '/dashboard/equipment/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:326
* @route '/dashboard/equipment/import/preview'
*/
previewEquipment.url = (options?: RouteQueryOptions) => {
    return previewEquipment.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:326
* @route '/dashboard/equipment/import/preview'
*/
previewEquipment.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewEquipment.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:326
* @route '/dashboard/equipment/import/preview'
*/
const previewEquipmentForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewEquipment.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::previewEquipment
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:326
* @route '/dashboard/equipment/import/preview'
*/
previewEquipmentForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewEquipment.url(options),
    method: 'post',
})

previewEquipment.form = previewEquipmentForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadEquipmentTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:336
* @route '/dashboard/equipment/template'
*/
export const downloadEquipmentTemplate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadEquipmentTemplate.url(options),
    method: 'get',
})

downloadEquipmentTemplate.definition = {
    methods: ["get","head"],
    url: '/dashboard/equipment/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadEquipmentTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:336
* @route '/dashboard/equipment/template'
*/
downloadEquipmentTemplate.url = (options?: RouteQueryOptions) => {
    return downloadEquipmentTemplate.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadEquipmentTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:336
* @route '/dashboard/equipment/template'
*/
downloadEquipmentTemplate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadEquipmentTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadEquipmentTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:336
* @route '/dashboard/equipment/template'
*/
downloadEquipmentTemplate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadEquipmentTemplate.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadEquipmentTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:336
* @route '/dashboard/equipment/template'
*/
const downloadEquipmentTemplateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadEquipmentTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadEquipmentTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:336
* @route '/dashboard/equipment/template'
*/
downloadEquipmentTemplateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadEquipmentTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::downloadEquipmentTemplate
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:336
* @route '/dashboard/equipment/template'
*/
downloadEquipmentTemplateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadEquipmentTemplate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

downloadEquipmentTemplate.form = downloadEquipmentTemplateForm

const SchoolImportExportController = { exportDepartmentsOptions, exportDepartments, showImportDepartments, importDepartments, previewDepartments, downloadDepartmentsTemplate, exportClassroomsOptions, exportClassrooms, showImportClassrooms, importClassrooms, previewClassrooms, downloadClassroomsTemplate, exportCoursesOptions, exportCourses, showImportCourses, importCourses, previewCourses, downloadCoursesTemplate, exportProgramsOptions, exportPrograms, showImportPrograms, importPrograms, previewPrograms, downloadProgramsTemplate, exportInventoriesOptions, exportInventories, showImportInventories, importInventories, previewInventories, downloadInventoriesTemplate, exportEquipmentOptions, exportEquipment, showImportEquipment, importEquipment, previewEquipment, downloadEquipmentTemplate }

export default SchoolImportExportController