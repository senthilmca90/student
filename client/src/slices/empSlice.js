import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: '',
    email: ''
}

export const empSlice = createSlice({
    name: 'emp',
    initialState,
    reducers: {
        getEmps : (state) => {
            return {...state, name: 'Anbu', email: 'anbu@gmail.com'}
        },
        updateEmp : (state, {type, payload}) => {
            return {...state, name: payload.name, email: payload.email}
        }
    }
})

export const {getEmps, updateEmp} = empSlice.actions

export default empSlice.reducer