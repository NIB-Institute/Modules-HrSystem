import departments from './departments'
import classrooms from './classrooms'
import courses from './courses'
import programs from './programs'
import inventories from './inventories'
import equipment from './equipment'
import schools from './schools'

const school = {
    departments: Object.assign(departments, departments),
    classrooms: Object.assign(classrooms, classrooms),
    courses: Object.assign(courses, courses),
    programs: Object.assign(programs, programs),
    inventories: Object.assign(inventories, inventories),
    equipment: Object.assign(equipment, equipment),
    schools: Object.assign(schools, schools),
}

export default school