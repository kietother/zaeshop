import UserRoleSubcriptionRequest from "../../models/user/UserRoleSubcriptionRequest";
import { portalServer } from "../baseUrls";
import axiosApiInstance from "../interceptor";

export const updateRoleSubscription = async (userid: string, model: UserRoleSubcriptionRequest) => {
    const response = await axiosApiInstance.post(portalServer + `/api/user/${userid}/role-subscription`, model);
    return response;
}