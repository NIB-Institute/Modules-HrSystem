import employees from './employees'
import employeeTypes from './employee-types'
import attendances from './attendances'
import documents from './documents'
import locations from './locations'
import permissionRequests from './permission-requests'
import employeePlans from './employee-plans'
import employeePlanAssignments from './employee-plan-assignments'
import employeeAvailabilities from './employee-availabilities'

const employee = {
    employees: Object.assign(employees, employees),
    employeeTypes: Object.assign(employeeTypes, employeeTypes),
    attendances: Object.assign(attendances, attendances),
    documents: Object.assign(documents, documents),
    locations: Object.assign(locations, locations),
    permissionRequests: Object.assign(permissionRequests, permissionRequests),
    employeePlans: Object.assign(employeePlans, employeePlans),
    employeePlanAssignments: Object.assign(employeePlanAssignments, employeePlanAssignments),
    employeeAvailabilities: Object.assign(employeeAvailabilities, employeeAvailabilities),
}

export default employee