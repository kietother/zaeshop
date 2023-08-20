using System.ComponentModel.DataAnnotations;

namespace Identity.Infrastructure.Models.Users
{
    public class UserUpdateResponseModel
    {
        public string FullName { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}