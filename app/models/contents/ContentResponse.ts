export default interface ContentResponse {
    id: number;
    title: string | null;
    friendlyName: string | null;
    albumId: number;
    albumTitle: string | null;
    albumFriendlyName: string | null;
    contentItems: Array<string> | null;
}