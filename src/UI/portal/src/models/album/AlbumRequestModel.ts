export default interface AlbumRequestModel {
    title: string;
    description?: string;
    albumAlertMessageId?: number;
    contentTypeIds?: number[];
}