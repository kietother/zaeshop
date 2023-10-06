using System.Text.Json.Serialization;

namespace Identity.Infrastructure;

public class UserModel
{
    public string Id { get; set; } = null!;
    public string FullName { get; set; } = null!;
    public string Email { get; set; } = null!;
    public bool EmailConfirmed { get; set; }
    public string UserName { get; set; } = null!;

    public string? Roles { get; set; }

    public DateTime CreatedOnUtc { get; set; }
    public DateTime? UpdatedOnUtc { get; set; }
}

public class UserPaging : UserModel
{
    [JsonIgnore]
    public long RowNum { get; set; }

    [JsonIgnore]
    public bool IsTotalRecord { get; set; }
}

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