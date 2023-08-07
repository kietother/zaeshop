import { Dispatch } from "@reduxjs/toolkit";
import api from "../../services/interceptor";
import LoginModel from "../../models/auth/LoginModel";
import { loginFailure, loginStart, loginSuccess } from "../reducers/authSlice";

export const login = (loginModel: LoginModel) => async (dispatch: Dispatch) => {
    try {
        dispatch(loginStart());
        const response = await api.post("/api/account/authenticate", loginModel);
        dispatch(loginSuccess(response.data));
    } catch (err: any) {
        return loginFailure(err.response);
    }
}

export const getRefereshToken = () => async (dispatch: Dispatch) => {
    try {
        dispatch(loginStart());
        const response = await api.post("/api/account/referesh-token");
        dispatch(loginSuccess(response.data));
    } catch (err: any) {
        return loginFailure(err.response);
    }
}