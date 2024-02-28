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

const UpdateStudent = (req, res) => {

    StudentModel.findOneAndUpdate(
        {email: req.body.email}, 
        {name: req.body.name, age: req.body.age},
        {new:true}).then(result => {
        res.send({result, message: "updated student details controller"})

    }).catch(err => {
        res.send({message: "err"})

    })
}

const getStudentById = (req,res) => {
    let id = req.params.id
    StudentModel.findById(id).then(result => {
        res.send(result)
    }).catch(err => {
        res.send({message: "err"})

    })
}

const deleteStudentById = (req, res) => {
    let id = req.params.id

    StudentModel.findByIdAndDelete(id).then(result => {
        res.send({message: 'student delete successfully', id: id})
    }).catch(err => {
        res.send({message: "err"})

    })
}

export default {AddStudentDetails, getStudentDetails, UpdateStudent, getStudentById, deleteStudentById}