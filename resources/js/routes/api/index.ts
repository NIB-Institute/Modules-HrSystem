import ai from './ai'
import employee from './employee'

const api = {
    ai: Object.assign(ai, ai),
    employee: Object.assign(employee, employee),
}

export default api