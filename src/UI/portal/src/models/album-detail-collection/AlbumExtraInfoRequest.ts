import { EAlbumStatus } from "../enums/EAlbumStatus";

export default interface AlbumExtraInfoRequest {
    id?: number;
    alternativeName?: string;
    type?: string;
    albumStatus: EAlbumStatus;
    releaseYear?: string;
    authorNames?: string;
    artistNames?: string;
    tags?: string;
}