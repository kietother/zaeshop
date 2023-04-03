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
    }
}