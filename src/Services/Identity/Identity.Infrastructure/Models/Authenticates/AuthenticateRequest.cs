using System.ComponentModel.DataAnnotations;

namespace Identity.Infrastructure.Models.Authenticates
{
    public class AuthenticateRequest
    {
        [Required]
        public string Username { get; set; } = null!;

        [Required]
        public string Password { get; set; } = null!;
    }
}