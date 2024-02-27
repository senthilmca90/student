import mongoose from 'mongoose'

const StudentSchema =  mongoose.Schema({
    name: {type: String, default: null},
    email: {type: String, default: null},
    age: {type: Number, default: 0}
})

const studentmodel = mongoose.model('students', StudentSchema)

export default studentmodel