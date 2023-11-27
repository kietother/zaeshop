export default interface PagingRequest {
    pageIndex: number;
    pageSize: number;
    searchTerm?: string;
    sortColumn?: string;
    sortDirection?: string;
}