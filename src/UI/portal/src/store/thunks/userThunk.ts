import { Dispatch } from "@reduxjs/toolkit";
import { fetchUsersFailure, fetchUsersStart, fetchUsersSuccess, userAdded, userUpdated } from "../reducers/userSlice";
import api from "../../services/interceptor";
import { identityServer } from "../../services/baseUrls";
import UserCreateRequestModel from "../../models/user/UserCreateRequestModel";
import UserUpdateRequestModel from "../../models/user/UserUpdateRequestModel";

// GET list user
export const getUsers = () => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchUsersStart());
        const response = await api.get(identityServer + `/api/user`);
        if (response.status === 200) {
            dispatch(fetchUsersSuccess(response.data));
        }
    } catch (err: any) {
        return dispatch(fetchUsersFailure(err.response));
    }
};

// Post create user
export const createUser = (userCreateRequestModel: UserCreateRequestModel) => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchUsersStart());
        const response = await api.post(identityServer + `/api/user`, userCreateRequestModel);
        if (response.status === 200) {
            dispatch(userAdded(response.data));
        }
    } catch (err: any) {
        return dispatch(fetchUsersFailure(err.response));
    }
};

// PUT update user
export const updateUser = (id: string, userUpdateRequestModel: UserUpdateRequestModel) => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchUsersStart());
        const response = await api.put(identityServer + `/api/user/${id}`, userUpdateRequestModel);
        if (response.status === 200) {
            dispatch(userUpdated(response.data));
        }
    } catch (err: any) {
        return dispatch(fetchUsersFailure(err.response));
    }
};