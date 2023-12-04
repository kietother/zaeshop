import AlbumDetailRequest from "../../models/album-detail-collection/AlbumDetailRequest";
import AlbumExtraInfoRequest from "../../models/album-detail-collection/AlbumExtraInfoRequest";
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