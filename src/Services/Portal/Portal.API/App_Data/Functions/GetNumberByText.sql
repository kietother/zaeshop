CREATE OR ALTER FUNCTION GetNumberByText (@title nvarchar(max))
RETURNS decimal(10,2)
AS
BEGIN
    DECLARE @result decimal(10,2) = NULL

    IF @title LIKE '%[0-9]%'
    BEGIN
        SET @result = CAST(SUBSTRING(@title, PATINDEX('%[0-9]%', @title), LEN(@title)) AS decimal(10,2))
    END

    RETURN @result
END