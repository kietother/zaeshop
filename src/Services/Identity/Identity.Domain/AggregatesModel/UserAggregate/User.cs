using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Identity.Domain.SeedWork;
using Microsoft.AspNetCore.Identity;

namespace Identity.Domain.AggregatesModel.UserAggregate
{
    public class User : IdentityUser, IAggregateRoot
    {
        public string? FullName { get; set; }
        [JsonIgnore]
        public virtual ICollection<UserToken> UserTokens { get; set; }
    }
}