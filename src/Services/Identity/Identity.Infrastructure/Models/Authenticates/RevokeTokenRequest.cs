using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Identity.Infrastructure.Models.Authenticates
{
    public class RevokeTokenRequest
    {
        public string? Token { get; set; }
    }
}