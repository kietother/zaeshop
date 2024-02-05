using System.Text.Json.Serialization;
using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.UserAggregate
{
    public class Level : Entity
    {
        public string Name { get; set; } = null!;
        public string? Description { get; set; }

        /// <summary>
        /// Total Exps's User must reach to this level
        /// </summary>
        public int TargetExp { get; set; }

        /// <summary>
        /// Next Exp's User must reach to next level
        /// </summary>
        public int NextExp { get; set; }

        [JsonIgnore]
        public virtual ICollection<User> Users { get; set; } = new List<User>();

        [JsonIgnore]
        public virtual ICollection<UserLevel> UserLevels { get; set; } = new List<UserLevel>();
    }
}
