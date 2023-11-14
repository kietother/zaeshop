CREATE OR ALTER PROCEDURE Role_All_Paging
    @pageNumber INT,
    @pageSize INT,
	@searchTerm NVARCHAR(MAX) = null,
	@sortColumn VARCHAR(100) = null,
	@sortDirection varchar(4) = 'ASC'
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

    WITH FilteredData
    AS (
		SELECT ROW_NUMBER() OVER (ORDER BY
			CASE WHEN ISNULL(@sortColumn, '') = '' THEN r.Id END,
			CASE WHEN @sortColumn = 'Name' AND @sortDirection = 'ASC' THEN r.Name END,
			CASE WHEN @sortColumn = 'Name' AND @sortDirection = 'DESC' THEN r.Name END DESC,
			CASE WHEN @sortColumn = 'NormalizedName' AND @sortDirection = 'ASC' THEN r.NormalizedName END,
			CASE WHEN @sortColumn = 'NormalizedName' AND @sortDirection = 'DESC' THEN r.NormalizedName END DESC,
            CASE WHEN @sortColumn = 'CreatedOnUtc' AND @sortDirection = 'ASC' THEN a.CreatedOnUtc END,
			CASE WHEN @sortColumn = 'CreatedOnUtc' AND @sortDirection = 'DESC' THEN a.CreatedOnUtc END DESC,
            CASE WHEN @sortColumn = 'UpdatedOnUtc' AND @sortDirection = 'ASC' THEN a.UpdatedOnUtc END,
			CASE WHEN @sortColumn = 'UpdatedOnUtc' AND @sortDirection = 'DESC' THEN a.UpdatedOnUtc END DESC
		) AS RowNum,
               r.Id,
               r.Name,
               r.NormalizedName,
               STRING_AGG(u.FullName, ', ') WITHIN GROUP(ORDER BY u.FullName) AS [Users]
        FROM dbo.AspNetRoles r
            LEFT JOIN dbo.AspNetUserRoles ur
                ON r.Id = ur.RoleId
            LEFT JOIN dbo.[User] u
                ON ur.UserId = u.Id
		WHERE (ISNULL(@searchTerm, '') = '' OR (r.Name LIKE '' + @searchTerm + '%') OR (r.NormalizedName LIKE '' + @searchTerm + '%'))
        GROUP BY r.Id,
               r.Name,
               r.NormalizedName
	)
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
    FROM FilteredData
	WHERE FilteredData.RowNum
		BETWEEN @offset + 1 AND @offset + @pageSize
END