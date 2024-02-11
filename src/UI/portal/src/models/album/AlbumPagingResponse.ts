import { ERegion } from "../enums/Eregion";

export default interface AlbumPagingResponse {
    id: number;
    title: string;
    description?: string;
    albumAlertMessageId?: number;
    albumAlertMessageName?: string;
    contentTypeIds?: string;
    contentTypes?: string;
    createdOnUtc: Date;
    updatedOnUtc?: Date;
    cdnThumbnailUrl?: string;
    cdnOriginalUrl?: string;
    views: number;
    viewByTopType?: number | null;
    region: ERegion;
}