using System.ComponentModel.DataAnnotations;

namespace Identity.Domain.Models.Authenticates
{
    public class VerifyEmailRequest
    {
        [Required]
        public string Token { get; set; } = null!;
    }
}