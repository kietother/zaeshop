namespace Identity.API.Attributes
{
    [AttributeUsage(AttributeTargets.All, AllowMultiple = false)]
    //[AttributeUsage(AttributeTargets.Method)]
    public class AllowAnonymousAttribute : Attribute
    {
    }
}