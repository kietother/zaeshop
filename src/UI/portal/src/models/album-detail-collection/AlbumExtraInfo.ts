import { EAlbumStatus } from "../enums/EAlbumStatus";

export default interface AlbumExtraInfo {
    id?: number;
    alternativeName?: string;
    type?: string;
    albumStatus: EAlbumStatus;
    releaseYear?: string;
    authorNames?: string;
    artistNames?: string;
    tags?: string;
}