import { Dispatch } from "@reduxjs/toolkit";
import api from "../../services/interceptor";
import LoginModel from "../../models/auth/LoginModel";
import { loginFailure, loginStart, loginSuccess, logout } from "../reducers/authSlice";
import { identityServer } from "../../services/baseUrls";
import { toast } from "react-toastify";
import i18n from "../../utils/i18n";

export const login = (loginModel: LoginModel) => async (dispatch: Dispatch) => {
    const toastId = toast.loading(i18n.t("toast.please_wait"));
    try {
        dispatch(loginStart());
        const response = await api.post(identityServer + "/api/account/authenticate", loginModel);
        dispatch(loginSuccess({ data: response.data, token: response.data.jwtToken }));

        toast.update(toastId, {
            render: i18n.t("toast.login_sucessfully"), type: toast.TYPE.SUCCESS, isLoading: false,
            autoClose: 2000
        });
    } catch (err: any) {
        toast.update(toastId, {
            render: i18n.t("toast.user_or_password_is_incorrect"), type: toast.TYPE.ERROR, isLoading: false,
            autoClose: 2000
        });
        return loginFailure(err.message);
    }
}

export const signOut = () => async (dispatch: Dispatch) => {
    const toastId = toast.loading(i18n.t("toast.please_wait"));
    try {
        dispatch(loginStart());
        await api.post(identityServer + "/api/account/revoke-token", {});
        dispatch(logout());

        toast.update(toastId, {
            render: i18n.t("toast.logout_sucessfully"), type: toast.TYPE.SUCCESS, isLoading: false,
            autoClose: 2000
        });
    } catch (err: any) {
        toast.update(toastId, {
            render: i18n.t("toast.some_thing_is_wrong"), type: toast.TYPE.ERROR, isLoading: false,
            autoClose: 2000
        });
        return loginFailure(err.message);
    }
}

export const getRefereshToken = () => async (dispatch: Dispatch) => {
    try {
        dispatch(loginStart());
        const response = await api.post(identityServer + "/api/account/refresh-token");
        dispatch(loginSuccess(response.data));
    } catch (err: any) {
        return loginFailure(err.message);
    }
}