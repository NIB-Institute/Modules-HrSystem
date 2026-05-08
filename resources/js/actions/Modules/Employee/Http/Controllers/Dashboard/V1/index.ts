import EmployeeTrashController from './EmployeeTrashController'
import EmployeeTypeTrashController from './EmployeeTypeTrashController'
import AttendanceTrashController from './AttendanceTrashController'
import EmployeeController from './EmployeeController'
import EmployeeImportExportController from './EmployeeImportExportController'
import EmployeePasswordController from './EmployeePasswordController'
import EmployeeTypeController from './EmployeeTypeController'
import LocationController from './LocationController'
import SelfServiceAttendanceController from './SelfServiceAttendanceController'
import AttendanceController from './AttendanceController'
import PermissionRequestController from './PermissionRequestController'
import EmployeePlanController from './EmployeePlanController'
import EmployeeAvailabilityController from './EmployeeAvailabilityController'

const V1 = {
    EmployeeTrashController: Object.assign(EmployeeTrashController, EmployeeTrashController),
    EmployeeTypeTrashController: Object.assign(EmployeeTypeTrashController, EmployeeTypeTrashController),
    AttendanceTrashController: Object.assign(AttendanceTrashController, AttendanceTrashController),
    EmployeeController: Object.assign(EmployeeController, EmployeeController),
    EmployeeImportExportController: Object.assign(EmployeeImportExportController, EmployeeImportExportController),
    EmployeePasswordController: Object.assign(EmployeePasswordController, EmployeePasswordController),
    EmployeeTypeController: Object.assign(EmployeeTypeController, EmployeeTypeController),
    LocationController: Object.assign(LocationController, LocationController),
    SelfServiceAttendanceController: Object.assign(SelfServiceAttendanceController, SelfServiceAttendanceController),
    AttendanceController: Object.assign(AttendanceController, AttendanceController),
    PermissionRequestController: Object.assign(PermissionRequestController, PermissionRequestController),
    EmployeePlanController: Object.assign(EmployeePlanController, EmployeePlanController),
    EmployeeAvailabilityController: Object.assign(EmployeeAvailabilityController, EmployeeAvailabilityController),
}

export default V1