import AlbumRequestModel from "../../models/album/AlbumRequestModel";
import { portalServer } from "../baseUrls";
import axiosApiInstance from "../interceptor"

export const createAlbum = async (albumRequestModel: AlbumRequestModel) => {
    const response = await axiosApiInstance.post(portalServer + "/api/album", albumRequestModel);
    return response;
}

export const updateAlbum = async (id: number, albumRequestModel: AlbumRequestModel) => {
    const response = await axiosApiInstance.put(portalServer + `/api/album/${id}`, albumRequestModel);
    return response;
}

export const deleteAlbum = async (id: number) => {
    const response = await axiosApiInstance.delete(portalServer + `/api/album/${id}`);
    return response;
}