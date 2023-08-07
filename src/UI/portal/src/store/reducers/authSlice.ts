import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../../models/User';

interface AuthState {
    token: string | null;
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    token: localStorage.getItem("token"),
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<{ token: string }>) {
            state.loading = false;
            state.token = action.payload.token;
        },
        loginFailure(state, action: PayloadAction<string>) {
            localStorage.removeItem('token');
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            localStorage.removeItem('token');
            state.token = '';
            state.error = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
