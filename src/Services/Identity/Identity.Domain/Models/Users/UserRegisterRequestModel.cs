namespace Identity.Domain.Models.Users
{
    public class UserRegisterRequestModel
    {
        public string FullName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;

        public bool IsAcceptTerm { get; set; }
    }

    public class SyncUserFromIdentityResponseModel
    {
        public int PortalId { get; set; }
        public bool IsSuccess { get; set; }
        public string? Message { get; set; }
    }
}