using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Identity.Infrastructure.Models.Users
{
    public class UserRegisterResponseModel
    {
        public string? FullName { get; set; }
        public string? Email { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }

        public string? JwtToken { get; set; }

        [JsonIgnore] // refresh token is returned in http only cookie
        public string? RefreshToken { get; set; }

        [JsonIgnore]
        public DateTime? ExpiresOnUtc { get; set; }
    }
}