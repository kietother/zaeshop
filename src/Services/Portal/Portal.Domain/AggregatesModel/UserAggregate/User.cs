using System.Text.Json.Serialization;
using Portal.Domain.AggregatesModel.CollectionAggregate;
using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.UserAggregate;
public class User : Entity, IAggregateRoot
{
    public string? FullName { get; set; }
    public string IdentityUserId { get; set; } = null!;

    [JsonIgnore]
    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();
}
