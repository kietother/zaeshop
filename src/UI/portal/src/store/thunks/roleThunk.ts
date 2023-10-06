import { Dispatch } from "@reduxjs/toolkit";
import { fetchRolesFailure, fetchRolesStart, fetchRolesSuccess, roleAdded, roleDeleted, roleUpdated } from "../reducers/roleSlice";
import { identityServer } from "../../services/baseUrls";
import api from "../../services/interceptor";
import RoleCreateRequestModel from "../../models/role/RoleCreateRequestModel";
import RoleUpdateRequestModel from "../../models/role/RoleUpdateRequestModel";

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
        const response = await api.post(identityServer + `/api/role`, roleCreateRequestModel);
        if (response.status === 200) {
            dispatch(roleAdded(response.data));
        }
    } catch (err: any) {
        return dispatch(fetchRolesFailure(err.response));
    }
};

// PUT update role
export const updateRole = (id: string, roleUpdateRequestModel: RoleUpdateRequestModel) => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchRolesStart());
        const response = await api.put(identityServer + `/api/role/${id}`, roleUpdateRequestModel);
        if (response.status === 200) {
            dispatch(roleUpdated({ id, updatedrole: response.data }));
        }
    } catch (err: any) {
        return dispatch(fetchRolesFailure(err.response));
    }
};

// DELETE delete Role
export const deleteRole = (id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchRolesStart());
        const response = await api.delete(identityServer + `/api/role/${id}`);
        if (response.status === 200) {
            dispatch(roleDeleted(id));
        }
    } catch (err: any) {
        return dispatch(fetchRolesFailure(err.response));
    }
};