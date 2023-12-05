import { AxiosRequestConfig } from "axios";
import { portalServer } from "../baseUrls";
import axiosApiInstance from "../interceptor";

export const createContentItems = async (id: number, formData: FormData) => {
    const config: AxiosRequestConfig = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
    const response = await axiosApiInstance.post(portalServer + `/api/collection/${id}/content-items`, formData, config);
    return response;
}