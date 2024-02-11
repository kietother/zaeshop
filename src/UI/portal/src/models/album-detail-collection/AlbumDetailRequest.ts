export default interface AlbumDetailRequest {
    title: string;
    description?: string;
    albumAlertMessageId?: number;
    contentTypeIds?: number[];
    isPublic: boolean;
    createdOnUtc: Date;
    updatedOnUtc?: Date;
    region: string;
}