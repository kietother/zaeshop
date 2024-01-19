namespace Identity.Domain.Models.Users
{
    public class UserRegisterResponseModel
    {
        public string Id { get; set; } = null!;
        public string? FullName { get; set; }
        public string? Email { get; set; }
        public string? Username { get; set; }
    }
    public class SyncUserFromIdentityRequestModel
    {
        public string IdentityId { get; set; } = null!;
        public string FullName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string? Username { get; set; }
    }
}