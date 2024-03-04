import express from 'express'
import StudentRoute from './StudentRoute'
import DepartmentRoute from './DepartmentRoute'
const routes = express()

routes.use('/students', StudentRoute)
routes.use('/departments', DepartmentRoute)

export default routes