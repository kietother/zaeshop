import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice'
import authSlice from './reducers/authSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice
  }
})

export type StoreState = ReturnType<typeof store.getState>