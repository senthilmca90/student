import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import empReducer from './slices/empSlice'

export const store = configureStore({
        reducer: {
            users: userReducer,
            employees: empReducer
        }
})