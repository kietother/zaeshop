import PagingRequest from "../common/PagingRequest";

export default interface AlbumPagingRequest extends PagingRequest {
    topType?: string | null;
    region?: string | null;
}