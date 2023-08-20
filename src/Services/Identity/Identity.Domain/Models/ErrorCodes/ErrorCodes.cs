using System.ComponentModel;

namespace Identity.Domain.Models.ErrorCodes
{
    public enum ErrorCodes
    {
        [Description("User or Password is Not Correct.")]
        UserOrPasswordNotCorrect = 0,
        [Description("User is not exists.")]
        UserNotExists = 1,
        [Description("User not confirmed email.")]
        UserNotConfirmedEmail = 2,
        [Description("User is exists.")]
        UserExists = 3,
        [Description("Referesh token is not active.")]
        RefereshTokenNotActive = 4
    }
}