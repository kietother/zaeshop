import AlbumRequestModel from "../../models/album/AlbumRequestModel";
import { portalServer } from "../baseUrls";
import axiosApiInstance from "../interceptor"

export const createAlbum = async (albumRequestModel: AlbumRequestModel) => {
    const response = await axiosApiInstance.post(portalServer + "/api/album", albumRequestModel);
    return response;
}