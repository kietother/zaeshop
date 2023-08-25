CREATE OR ALTER PROCEDURE User_All_Paging
  @pageNumber INT,
  @pageSize	  INT
AS
BEGIN
SET NOCOUNT ON;

-- Validate parameters

IF @pageNumber<=0
	SET @pageNumber=1;

IF @pageSize<=0
	SET @pageSize=10; -- Default page size

DECLARE
  @offset INT=(@pageNumber-1)*@pageSize;

;
WITH FilteredData
	 AS (SELECT ROW_NUMBER( ) OVER (ORDER BY u.Id) AS RowNum,
				u.Id,
				u.FullName,
				u.UserName,
				u.Email,
				u.EmailConfirmed,
				u.CreatedOnUtc,
				u.UpdatedOnUtc
		   FROM [User] u),
	 TotalRecords
	 AS (SELECT COUNT_BIG( 1 ) AS RowNum
		   FROM FilteredData),
	 PagingRecord
	 AS (SELECT*
		   FROM FilteredData
		   WHERE RowNum BETWEEN @offset+1 AND @offset+@pageSize)
SELECT RowNum,
	   NULL AS Id,
	   NULL AS FullName,
	   NULL AS UserName,
	   NULL AS Email,
	   NULL AS EmailConfirmed,
	   NULL AS CreatedOnUtc,
	   NULL AS UpdatedOnUtc
FROM TotalRecords
UNION
SELECT*
FROM PagingRecord
END
