namespace Common.Models
{
    public class PagingCommonResponse<T>
    {
        public long? RowNum { get; set; }
        public List<T>? Data { get; set; }
    }
}
