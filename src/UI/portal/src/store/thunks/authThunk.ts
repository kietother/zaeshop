import { Dispatch } from "@reduxjs/toolkit";
import api from "../../services/interceptor";
import LoginModel from "../../models/auth/LoginModel";
import { loginFailure, loginStart, loginSuccess } from "../reducers/authSlice";
import { IdentityServer } from "../../utils/baseUrls";

export const login = (loginModel: LoginModel) => async (dispatch: Dispatch) => {
    try {
        dispatch(loginStart());
        const response = await api.post(IdentityServer + "/api/account/authenticate", loginModel);
        dispatch(loginSuccess({ data: response.data, token: response.data.jwtToken }));
    } catch (err: any) {
        return loginFailure(err.response);
    }
}

export const getRefereshToken = () => async (dispatch: Dispatch) => {
    try {
        dispatch(loginStart());
        const response = await api.post(IdentityServer + "/api/account/refresh-token");
        dispatch(loginSuccess(response.data));
    } catch (err: any) {
        return loginFailure(err.response);
    }
}