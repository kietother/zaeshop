import { Dispatch } from "@reduxjs/toolkit";
import { fetchUsersFailure, fetchUsersStart, fetchUsersSuccess } from "../reducers/userSlice";
import api from "../../services/interceptor";
import { identityServer } from "../../utils/baseUrls";

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