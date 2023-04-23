using System.ComponentModel.DataAnnotations;

namespace Identity.Infrastructure.Models.Authenticates
{
    public class ValidateResetTokenRequest
    {
        [Required]
        public string Token { get; set; } = null!;
    }
}