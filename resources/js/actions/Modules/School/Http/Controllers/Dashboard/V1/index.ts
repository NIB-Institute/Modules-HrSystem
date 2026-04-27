import DepartmentController from './DepartmentController'
import ClassroomController from './ClassroomController'
import SchoolImportExportController from './SchoolImportExportController'
import DepartmentTrashController from './DepartmentTrashController'
import ClassroomTrashController from './ClassroomTrashController'
import CourseTrashController from './CourseTrashController'
import ProgramTrashController from './ProgramTrashController'
import EquipmentTrashController from './EquipmentTrashController'
import InventoryTrashController from './InventoryTrashController'
import SchoolTrashController from './SchoolTrashController'
import SchoolController from './SchoolController'
import ProgramController from './ProgramController'
import CourseController from './CourseController'
import InventoryController from './InventoryController'
import EquipmentController from './EquipmentController'

const V1 = {
    DepartmentController: Object.assign(DepartmentController, DepartmentController),
    ClassroomController: Object.assign(ClassroomController, ClassroomController),
    SchoolImportExportController: Object.assign(SchoolImportExportController, SchoolImportExportController),
    DepartmentTrashController: Object.assign(DepartmentTrashController, DepartmentTrashController),
    ClassroomTrashController: Object.assign(ClassroomTrashController, ClassroomTrashController),
    CourseTrashController: Object.assign(CourseTrashController, CourseTrashController),
    ProgramTrashController: Object.assign(ProgramTrashController, ProgramTrashController),
    EquipmentTrashController: Object.assign(EquipmentTrashController, EquipmentTrashController),
    InventoryTrashController: Object.assign(InventoryTrashController, InventoryTrashController),
    SchoolTrashController: Object.assign(SchoolTrashController, SchoolTrashController),
    SchoolController: Object.assign(SchoolController, SchoolController),
    ProgramController: Object.assign(ProgramController, ProgramController),
    CourseController: Object.assign(CourseController, CourseController),
    InventoryController: Object.assign(InventoryController, InventoryController),
    EquipmentController: Object.assign(EquipmentController, EquipmentController),
}

export default V1