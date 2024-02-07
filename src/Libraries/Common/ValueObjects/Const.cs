namespace Common.ValueObjects
{
    public static class Const
    {
        public static class RoleName
        {
            public const string User = "User";
        }

        public static class RedisCacheKey
        {
            public const string ComicContent = "ComicContent_ComicFriendlyName_{0}_ContentFriendlyName_{1}";
            public const string ViewCount = "ViewCount_{0}";
            public const string LevelCount = "LevelCount_{0}";
        }

        public static class ServiceLogEventName
        {
            public const string ErrorAddView = "Error From Add View From User To Redis";
            public const string StoredViewsCache = "Stored Views Content Comic From Redis Cache";

            public const string ErrorAddExp = "Error From Add Experience From User To Redis";
            public const string StoredExpCache = "Stored Experience View Or Comment To Redis";
        }

        public static class HangfireJobName
        {
            public const string CalculateViewsFromRedis = "Calculate Views From Redis";
            public const string CalculateExperiencesFromRedis = "Calculate Experiences From Redis";
        }
    }
}