import { ERegion } from "../enums/Eregion";

export default interface AlbumDetail {
    id: number;
    title: string;
    description?: string;
    albumAlertMessageId?: number;
    albumAlertMessageName?: string;
    contentTypeIds?: number[];
    isPublic: boolean;
    createdOnUtc: Date;
    updatedOnUtc?: Date;
    views: number;
    viewByTopType?: number | null;
    region: ERegion;
}