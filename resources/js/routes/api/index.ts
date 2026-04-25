import ai from './ai'
import employee from './employee'
import school from './school'

const api = {
    ai: Object.assign(ai, ai),
    employee: Object.assign(employee, employee),
    school: Object.assign(school, school),
}

export default api