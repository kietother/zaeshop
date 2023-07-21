namespace Identity.Domain.Models.ErrorResponses
{
    public class ApiExceptionResponse : ApiResponse
    {
        public ApiExceptionResponse(int statusCode, string? message = null, string? description = null) : base(statusCode, message)
        {
            Description = description;
        }

        public string? Description { get; }
    }
}
