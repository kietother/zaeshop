namespace Identity.Domain.SeedWork;

public abstract class Entity
{
    public int Id { get; set; }
    public DateTime CreatedOnUtc { get; set; }
    public DateTime? UpdatedOnUtc { get; set; }

    protected Entity()
    {
        CreatedOnUtc = DateTime.UtcNow;
    }
}