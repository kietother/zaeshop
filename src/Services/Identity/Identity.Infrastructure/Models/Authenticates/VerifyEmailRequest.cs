using System.ComponentModel.DataAnnotations;

namespace Identity.Infrastructure.Models.Authenticates
{
    public class VerifyEmailRequest
    {
        [Required]
        public string Token { get; set; } = null!;
    }
}