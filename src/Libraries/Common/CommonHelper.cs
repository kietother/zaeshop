using System.ComponentModel;
using System.Reflection;

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
    }
}