using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Identity.Domain.SeedWork;
using Microsoft.EntityFrameworkCore;

namespace Identity.Domain.AggregatesModel.UserAggregate
{
    public class UserToken : Entity, IAggregateRoot
    {
        public string Token { get; set; }
        public string UserId { get; set; }

        public DateTime ExpiresOnUtc { get; set; }
        public string CreatedByIp { get; set; }

        public DateTime? RevokedOnUtc { get; set; }
        public string RevokedByIp { get; set; }
        public string ReplacedByToken { get; set; }
        public string ReasonRevoked { get; set; }

        public bool IsExpired => DateTime.UtcNow >= ExpiresOnUtc;
        public bool IsRevoked => RevokedOnUtc != null;
        public bool IsActive => !IsRevoked && !IsExpired;

        [JsonIgnore]
        public virtual User User { get; set; }
    }
}