import { portalServer } from "../baseUrls";
import axiosApiInstance from "../interceptor";
import ContentItemBulkUploadModel from "../../models/content-item/ContentItemBulkUploadModel";

export const createContentItems = async (id: number, formData: FormData) => {
    const response = await axiosApiInstance.post(portalServer + `/api/collection/${id}/content-items`, formData);
    return response;
}

export const bulkUpdateContentItems = async (id: number, model: ContentItemBulkUploadModel) => {
    const response = await axiosApiInstance.put(portalServer + `/api/collection/${id}/content-items`, model);
    return response;
}