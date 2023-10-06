using System.Text.Json.Serialization;

namespace Identity.Infrastructure.Models.Roles;

public class RoleModel
{
    public string Id { get; set; } = null!;
    public string Name { get; set; } = null!;
    public string NormalizedName { get; set; } = null!;
}

public class RolePaging : RoleModel
{
    public string? Users { get; set; }

    [JsonIgnore]
    public long RowNum { get; set; }

    [JsonIgnore]
    public bool IsTotalRecord { get; set; }
}

public class RoleCreateRequestModel
{
    public string Name { get; set; } = null!;
}

public class RoleUpdateRequestModel
{
    public string Name { get; set; } = null!;
    public List<int>? Users { get; set; }
}