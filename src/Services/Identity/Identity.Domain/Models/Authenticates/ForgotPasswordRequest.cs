using System.ComponentModel.DataAnnotations;

namespace Identity.Domain.Models.Authenticates
{
    public class ForgotPasswordRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = null!;
    }
}