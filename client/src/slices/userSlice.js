import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: '',
    email: ''
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers : (state) => {
            return {...state, name: 'Anbu', email: 'anbu@gmail.com'}
        },
        updateUser : (state, {type, payload}) => {
            return {...state, name: payload.name, email: payload.email}
        }
    }
})

export const {getUsers, updateUser} = userSlice.actions

export default userSlice.reducer