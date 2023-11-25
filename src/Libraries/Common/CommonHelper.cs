using System.ComponentModel;
using System.Reflection;
using System.Text.Json;
using Common.Enums;

namespace Common
{
    public static class CommonHelper
    {
        public static string GetDescription(Enum en)
        {
            Type type = en.GetType();

            MemberInfo[] memInfo = type.GetMember(en.ToString());

            if (memInfo.Length > 0)
            {
                object[] attrs = memInfo[0].GetCustomAttributes(typeof(DescriptionAttribute), false);

                if (attrs.Length > 0)
                {
                    return ((DescriptionAttribute)attrs[0]).Description;
                }
            }

            return en.ToString();
        }

        public static string? JoinSeparator(this IEnumerable<string>? list, string separator = ",", bool isSpace = false)
        {
            if (list == null)
                return null;

            if (isSpace)
            {
                return string.Join(separator + " ", list);
            }
            else
            {
                return string.Join(separator, list);
            }
        }

        public static string GetServiceUrl(EServiceHost serviceHost)
        {
            var baseUrls = new Dictionary<EServiceHost, string>
            {
                { EServiceHost.Identity, "http://identity:5287" },
                { EServiceHost.Portal, "http://portal:5288" },
                { EServiceHost.Hangfire, "http://hangfireserver:5286" }
            };

            return baseUrls.TryGetValue(serviceHost, out string? baseUrl) ? baseUrl! : string.Empty;
        }
    }

    public static class JsonSerializationHelper
    {
        private static readonly JsonSerializerOptions s_writeOptions = new()
        {
            WriteIndented = false,
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        private static readonly JsonSerializerOptions s_readOptions = new()
        {
            AllowTrailingCommas = false
        };

        public static string Serialize<T>(T value)
        {
            return JsonSerializer.Serialize(value, s_writeOptions);
        }

        public static T? Deserialize<T>(string json)
        {
            return JsonSerializer.Deserialize<T>(json, s_readOptions);
        }
    }
}