using Portal.Domain.SeedWork;

namespace Portal.Domain.AggregatesModel.AlbumAggregate
{
    public class AlbumAlertMessage : Entity
    {
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
    }
}
