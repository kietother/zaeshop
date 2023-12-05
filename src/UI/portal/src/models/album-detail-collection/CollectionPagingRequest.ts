import PagingRequest from "../common/PagingRequest";

export default interface CollectionPagingRequest extends PagingRequest {
    albumId: number;
}