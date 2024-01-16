export default interface AlbumRequestModel {
    title: string;
    description?: string;
    albumAlertMessageId?: number;
    contentTypeIds?: number[];
    fileName?: string;
    base64File?: string;
    isUpdateThumbnail: boolean;
    fileNameOriginal?: string;
    base64FileOriginal?: string;
    isUpdateOriginalUrl: boolean;
}