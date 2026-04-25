import Employee from './Employee'
import School from './School'

const Modules = {
    Employee: Object.assign(Employee, Employee),
    School: Object.assign(School, School),
}

export default Modules