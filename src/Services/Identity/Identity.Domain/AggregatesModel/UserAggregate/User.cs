using System.Text.Json.Serialization;
using Identity.Domain.SeedWork;
using Microsoft.AspNetCore.Identity;

namespace Identity.Domain.AggregatesModel.UserAggregate
{
    public class User : IdentityUser, IAggregateRoot
    {
        public string? FullName { get; set; }

        public string? VerificationToken { get; set; }
        public DateTime? VerifiedOnUtc { get; set; }

        public string? ResetPasswordToken { get; set; }
        public DateTime? ResetPasswordTokenExpiresOnUtc { get; set; }
        public DateTime? ResetPasswordOnUtc { get; set; }

        public string? ProviderAccountId { get; set; }

        public DateTime CreatedOnUtc { get; set; }
        public DateTime? UpdatedOnUtc { get; set; }

        [JsonIgnore]
        public virtual ICollection<UserToken> UserTokens { get; set; } = new List<UserToken>();
    }
}