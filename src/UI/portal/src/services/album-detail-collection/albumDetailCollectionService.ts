import AlbumDetailRequest from "../../models/album-detail-collection/AlbumDetailRequest";
import AlbumExtraInfo from "../../models/album-detail-collection/AlbumExtraInfo";
import { portalServer } from "../baseUrls";
import axiosApiInstance from "../interceptor";

// Update albumDetail
export const updateAlbumDetail = async (id: number, albumDetail: AlbumDetailRequest) => {
    const resposne = await axiosApiInstance.put(portalServer + `/api/album/${id}`, albumDetail);
    return resposne;
}

// Update album extra info
export const updateAlbumExtraInfo = async (id: number, albumExtraInfo: AlbumExtraInfo) => {
    const response = await axiosApiInstance.put(portalServer + `/api/album/${id}/extra-info`, albumExtraInfo);
    return response;
}