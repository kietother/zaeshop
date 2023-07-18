namespace Identity.Infrastructure.Models.HangFire
{
    public class UserSendMailModel
    {
        public string? Email { get; set; }
        public string? FullName { get; set; }
        public string? VerificationToken { get; set; }
        public string? ResetPasswordToken { get; set; }
    }
}