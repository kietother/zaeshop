namespace Identity.Domain.Models.ErrorResponses
{
    public class ErrorResult
    {
        public string Description { get; set; } = null!;

        public static ErrorResult Create() {
            return new ErrorResult();
        }
    }
}