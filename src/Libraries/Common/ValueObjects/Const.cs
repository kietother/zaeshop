namespace Common.ValueObjects
{
    public static class Const
    {
        public static class RedisCacheKey
        {
            public const string ComicContent = "ComicContent_ComicFriendlyName_{0}_ContentFriendlyName_{1}";
            public const string ViewCount = "ViewCount_{0}";
        }

        public static class ServiceLogEventName
        {
            public const string Error = "Add View From User To Redis";
        }

        public static class HangfireJobName
        {
            public const string CalculateViewsFromRedis = "Calculate Views From Redis";
        }
    }
}
