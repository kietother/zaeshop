namespace Identity.Domain.Models.ErrorResponses
{
    public class ApiException : ApiResponse
    {
        public ApiException(int statusCode, string? message = null, string? description = null) : base(statusCode, message)
        {
            Description = description;
        }

        public string? Description { get; }
    }
}
