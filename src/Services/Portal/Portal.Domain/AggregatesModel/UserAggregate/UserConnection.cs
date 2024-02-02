using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.UserAggregate
{
    public class UserConnection : Entity, IAggregateRoot
    {
        public int UserId { get; set; }

        [Column(TypeName = "VARCHAR(100)")]
        public string ConnectionId { get; set; } = null!;

        [JsonIgnore]
        public virtual User User { get; set; } = null!;
    }
}
