namespace Common.Models
{
    public class UserInfomationTokenModel
    {
        public string? Id { get; set; }
        public string? FullName { get; set; }
        public string? ProviderAccountId { get; set; }

        public List<string>? Roles { get; set; }
    }
}
