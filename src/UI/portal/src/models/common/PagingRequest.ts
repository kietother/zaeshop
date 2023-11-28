export default interface PagingRequest {
    pageNumber: number;
    pageSize: number;
    searchTerm?: string;
    sortColumn?: string;
    sortDirection?: string;
}