export default interface ServerResponse<T> {
    isSuccess: boolean;
    errorMessage?: string;
    data?: T;
}