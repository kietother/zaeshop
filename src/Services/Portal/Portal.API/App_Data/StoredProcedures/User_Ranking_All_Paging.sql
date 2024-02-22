CREATE OR ALTER PROCEDURE User_Ranking_All_Paging
    @pageNumber INT,
    @pageSize INT,
    @searchTerm NVARCHAR(MAX) = NULL,
    @sortColumn VARCHAR(100) = NULL,
    @sortDirection VARCHAR(4) = NULL,
    @region INT
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

    ;WITH FilteredData AS (
        SELECT ROW_NUMBER() OVER (ORDER BY
            CASE WHEN ISNULL(@sortColumn, '') = '' THEN Id END
        ) AS RowNum,
               Id,
               UserName,
               Avatar,
               RoleType,
               LevelId,
               CurrentExp,
               NextLevelExp,
               Region
        FROM [dbo].[User]
        WHERE Region = @region
          AND Email <> 'ngodangdongkhoi@gmail.com'
          AND LevelId IS NOT NULL
          AND LevelId <> 0
    )
    SELECT COUNT(*) OVER () AS TotalRecords,
           Id,
           UserName,
           Avatar,
           RoleType,
           LevelId,
           CurrentExp,
           NextLevelExp,
           Region,
           1 AS IsTotalRecord
    FROM FilteredData
    WHERE RowNum BETWEEN @offset + 1 AND @offset + @pageSize

    UNION ALL

    SELECT 0 AS TotalRecords,
           0 AS Id,
           NULL AS UserName,
           NULL AS Avatar,
           0 AS RoleType,
           0 AS LevelId,
           0 AS CurrentExp,
           0 AS NextLevelExp,
           0 AS Region,
           0 AS IsTotalRecord
END;
