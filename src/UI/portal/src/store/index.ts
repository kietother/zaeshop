import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice'
import authSlice from './reducers/authSlice'
import roleSlice from './reducers/roleSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    role: roleSlice
  }
})

export type StoreState = ReturnType<typeof store.getState>