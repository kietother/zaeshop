import { Dispatch } from "@reduxjs/toolkit";
import api from "../../services/interceptor";
import LoginModel from "../../models/auth/LoginModel";
import { loginFailure, loginStart, loginSuccess, logout } from "../reducers/authSlice";
import { identityServer } from "../../services/baseUrls";

export const login = (loginModel: LoginModel) => async (dispatch: Dispatch) => {
    try {
        dispatch(loginStart());
        const response = await api.post(identityServer + "/api/account/authenticate", loginModel);
        dispatch(loginSuccess({ data: response.data, token: response.data.jwtToken }));
    } catch (err: any) {
        return loginFailure(err.response);
    }
}

export const signOut = () => async (dispatch: Dispatch) => {
    try {
        dispatch(loginStart());
        await api.post(identityServer + "/api/account/revoke-token", {});
        dispatch(logout());
    } catch (err: any) {
        return loginFailure(err.response);
    }
}

export const getRefereshToken = () => async (dispatch: Dispatch) => {
    try {
        dispatch(loginStart());
        const response = await api.post(identityServer + "/api/account/refresh-token");
        dispatch(loginSuccess(response.data));
    } catch (err: any) {
        return loginFailure(err.response);
    }
}