import AlbumDetailRequest from "../../models/album-detail-collection/AlbumDetailRequest";
import AlbumExtraInfoRequest from "../../models/album-detail-collection/AlbumExtraInfoRequest";
import CollectionRequestModel from "../../models/album-detail-collection/CollectionRequestModel";
import { portalServer } from "../baseUrls";
import axiosApiInstance from "../interceptor";

// Update albumDetail
export const updateAlbumDetail = async (id: string | undefined, albumDetail: AlbumDetailRequest) => {
    const resposne = await axiosApiInstance.put(portalServer + `/api/album/${id}`, albumDetail);
    return resposne;
}

// Update album extra info
export const updateAlbumExtraInfo = async (id: string | undefined, albumExtraInfo: AlbumExtraInfoRequest) => {
    const response = await axiosApiInstance.put(portalServer + `/api/album/${id}/extra-info`, albumExtraInfo);
    return response;
}

// Create collection
export const createCollection = async (collectionRequestModel: CollectionRequestModel) => {
    const response = await axiosApiInstance.post(portalServer + `/api/collection`, collectionRequestModel);
    return response;
}

// Update collection
export const updateCollection = async (id: number | undefined, collectionRequestModel: CollectionRequestModel) => {
    const response = await axiosApiInstance.put(portalServer + `/api/collection/${id}`, collectionRequestModel);
    return response;
}

// Delete collection
export const deleteCollection = async (id: number | undefined) => {
    const response = await axiosApiInstance.delete(portalServer + `/api/collection/${id}`);
    return response;
}