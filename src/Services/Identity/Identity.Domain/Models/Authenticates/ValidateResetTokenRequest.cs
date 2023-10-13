using System.ComponentModel.DataAnnotations;

namespace Identity.Domain.Models.Authenticates
{
    public class ValidateResetTokenRequest
    {
        [Required]
        public string Token { get; set; } = null!;
    }
}