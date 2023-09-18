CREATE OR ALTER PROCEDURE User_All_Paging
  @pageNumber INT,
  @pageSize	  INT
AS
BEGIN
	SET NOCOUNT ON;
	
	-- Validate parameters
	IF @pageNumber<=0
	SET @pageNumber = 1;
	
	-- Default page size
	IF @pageSize <= 0
	SET @pageSize = 10;
	
	DECLARE @offset INT = (@pageNumber - 1) * @pageSize;
	
	;
	WITH FilteredData
	AS
	(SELECT
			ROW_NUMBER() OVER (ORDER BY u.Id) AS RowNum,
			u.Id,
			u.FullName,
			u.UserName,
			u.Email,
			u.EmailConfirmed,
			u.CreatedOnUtc,
			u.UpdatedOnUtc,
			STRING_AGG(r.Name, ', ') WITHIN GROUP (ORDER BY r.Name) AS [Roles]
		FROM [User] u
		LEFT JOIN AspNetUserRoles ur ON u.Id = ur.UserId
		LEFT JOIN AspNetRoles r ON ur.RoleId = r.Id
		GROUP BY u.Id,
				 u.FullName,
				 u.UserName,
				 u.Email,
				 u.EmailConfirmed,
				 u.CreatedOnUtc,
				 u.UpdatedOnUtc),
	PagingRecord
	AS
	(SELECT
			*
		FROM FilteredData
		WHERE RowNum BETWEEN @offset + 1 AND @offset + @pageSize)
	SELECT
		COUNT_BIG(1) AS RowNum,
		NULL AS Id,
		NULL AS FullName,
		NULL AS UserName,
		NULL AS Email,
		NULL AS EmailConfirmed,
		NULL AS CreatedOnUtc,
		NULL AS UpdatedOnUtc,
		NULL AS [Roles],
		1 as IsTotalRecord
	FROM FilteredData
	UNION
	SELECT
		*,
		0 as IsTotalRecord
	FROM PagingRecord
END