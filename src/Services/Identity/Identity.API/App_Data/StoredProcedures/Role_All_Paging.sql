CREATE OR ALTER PROCEDURE Role_All_Paging
    @pageNumber INT,
    @pageSize INT
AS
BEGIN
    SET NOCOUNT ON;

    -- Validate parameters
    IF @pageNumber <= 0
        SET @pageNumber = 1;

    -- Default page size
    IF @pageSize <= 0
        SET @pageSize = 10;

    DECLARE @offset INT = (@pageNumber - 1) * @pageSize;

    ;
    WITH FilteredData
    AS (SELECT ROW_NUMBER() OVER (ORDER BY r.Id) AS RowNum,
               r.Id,
               r.Name,
               r.NormalizedName,
               STRING_AGG(u.FullName, ', ')WITHIN GROUP(ORDER BY u.FullName) AS [Users]
        FROM dbo.AspNetRoles r
            LEFT JOIN dbo.AspNetUserRoles ur
                ON r.Id = ur.RoleId
            LEFT JOIN dbo.[User] u
                ON ur.UserId = u.Id
        GROUP BY r.Id,
               r.Name,
               r.NormalizedName),
         PagingRecord
    AS (SELECT *
        FROM FilteredData
        WHERE FilteredData.RowNum
        BETWEEN @offset + 1 AND @offset + @pageSize)
    SELECT COUNT_BIG(1) AS RowNum,
           NULL AS Id,
           NULL AS Name,
           NULL AS NormalizedName,
           NULL AS [Users],
           1 AS IsTotalRecord
    FROM FilteredData
    UNION
    SELECT *,
           0 AS IsTotalRecord
    FROM PagingRecord;
END;