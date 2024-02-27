import express from 'express'
import StudentController from '../controllers/StudentController'
const router = express.Router()

router.get('/all', StudentController.getStudentDetails)
router.post('/add-student-details', StudentController.AddStudentDetails)



export default router;