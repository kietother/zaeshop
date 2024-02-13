using System.ComponentModel;

namespace Portal.Domain.Enums
{
    public enum ELevelPublic
    {
        [Description("All User")]
        AllUser = 0,
        [Description("User Premium and User Super Premium")]
        PremiumUser = 1,
        [Description("User Super Premium and over role")]
        SPremiumUser = 2,
        [Description("Partner and over role")]
        Partner = 3,
        [Description("Only Admin")]
        Admin = 4
    }
}
