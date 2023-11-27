import AlbumRequestModel from "../../models/album/AlbumRequestModel";
import axiosApiInstance from "../interceptor"

export const createAlbum = async (albumRequestModel: AlbumRequestModel) => {
    const response = await axiosApiInstance.post("/api/album", albumRequestModel);
    return response;
}