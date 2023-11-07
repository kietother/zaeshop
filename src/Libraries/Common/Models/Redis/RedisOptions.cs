namespace Common.Models.Redis
{
    public class RedisOptions
    {
        public string Host { get; set; } = null!;
        public string Port { get; set; } = null!;
        public string InstanceName { get; set; } = null!;
    }
}
