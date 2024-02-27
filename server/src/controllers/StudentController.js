import StudentModel from '../models/StudentModel'

const AddStudentDetails = (req, res) => {
    console.log(req.body)
    const obj = req.body
    const model = StudentModel.create(obj)
    model.then(result => {
        res.send({result, message: "add student details controller"})

    }).catch(err => {
        res.send({message: "err"})

    })
}

const getStudentDetails = (req, res) => {
    StudentModel.find({}).then(result => res.send(result)).catch(err => res.send(err))
}

export default {AddStudentDetails, getStudentDetails}