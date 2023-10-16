namespace Common.Models
{
    public class ServiceResponse<T>
    {
        public bool IsSuccess { get; private set; }
        public string? ErrorMessage { get; private set; }

        public T? Data { get; private set; }

        public ServiceResponse(T data)
        {
            IsSuccess = true;
            Data = data;
        }

        public ServiceResponse(string error)
        {
            IsSuccess = false;
            ErrorMessage = error;
        }
    }
}
