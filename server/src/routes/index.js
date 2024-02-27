import express from 'express'
import StudentRoute from './StudentRoute'
const routes = express()

routes.use('/users', StudentRoute)

export default routes