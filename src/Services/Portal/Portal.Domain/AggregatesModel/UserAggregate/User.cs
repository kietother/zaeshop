﻿using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.UserAggregate;
public class User : Entity, IAggregateRoot
{
    public string? FullName { get; set; }
    public string IdentityUserId { get; set; } = null!;
}
