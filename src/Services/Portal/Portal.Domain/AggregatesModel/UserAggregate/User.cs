using Identity.Domain.SeedWork;

namespace Portal.Domain;
public class User : Entity, IAggregateRoot
{
    public string? FullName { get; set; }
    public string IdentityUserId { get; set; } = null!;
}
