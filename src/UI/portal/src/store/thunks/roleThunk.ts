import { Dispatch } from "@reduxjs/toolkit";
import { fetchRolesFailure, fetchRolesStart, fetchRolesSuccess, roleAdded } from "../reducers/roleSlice";
import { identityServer } from "../../services/baseUrls";
import api from "../../services/interceptor";
import RoleCreateRequestModel from "../../models/role/RoleCreateRequestModel";

// GET list role
export const getRoles = (pageIndex: number, pageSize: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchRolesStart());
        const params = {
            pageIndex,
            pageSize
        };
        const response = await api.get(identityServer + `/api/role`, { params });
        if (response.status === 200) {
            dispatch(fetchRolesSuccess(response.data));
        }
    } catch (err: any) {
        return dispatch(fetchRolesFailure(err.response));
    }
};

// Post create user
export const createRole = (roleCreateRequestModel: RoleCreateRequestModel) => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchRolesStart());
        const response = await api.post(identityServer + `/api/role`, roleCreateRequestModel.name, {
            headers: {
                'Content-Type': 'text/plain'
            }
        });
        if (response.status === 200) {
            dispatch(roleAdded(response.data));
        }
    } catch (err: any) {
        return dispatch(fetchRolesFailure(err.response));
    }
};