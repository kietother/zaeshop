export default interface AlbumPagingResponse {
    id: number;
    title: string;
    description?: string;
    albumAlertMessageId?: number;
    albumAlertMessageName?: string;
    contentTypes?: string;
    createdOnUtc: Date;
    updatedOnUtc?: Date;
}