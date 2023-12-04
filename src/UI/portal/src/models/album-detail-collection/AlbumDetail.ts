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
}