using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Identity.Domain.SeedWork;

namespace Identity.Domain.AggregatesModel.UserAggregate
{
    public class UserToken : Entity, IAggregateRoot
    {
        public string Token { get; set; }
        public int UserId { get; set; }

        public virtual User User { get; set; }
    }
}