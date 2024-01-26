CREATE OR ALTER PROCEDURE Collection_Album_RecalculateViews (
	@collectionIds NVARCHAR(MAX)
)
AS
BEGIN
	SELECT
		c.Id,
		SUM(cv.[View] )AS [Views]
	INTO #viewCollections
	FROM dbo.Collection c
		JOIN dbo.CollectionView cv ON cv.CollectionId = c.Id
	WHERE EXISTS (SELECT value FROM STRING_SPLIT(@collectionIds, ',') WHERE value = c.Id)
	GROUP BY c.Id

	UPDATE c
	SET [Views] = vc.[Views]
	FROM dbo.Collection c
		JOIN #viewCollections vc ON vc.Id = c.Id

	SELECT 
		a.Id,
		SUM(c.[Views]) AS [Views]
	INTO #viewAlbums
	FROM dbo.Album a
		JOIN dbo.Collection c ON c.AlbumId = a.Id
	WHERE EXISTS (SELECT value FROM STRING_SPLIT(@collectionIds, ',') WHERE value = c.Id)
	GROUP BY a.Id

	UPDATE a
	SET [Views] = va.[Views]
	FROM dbo.Album a
		JOIN #viewAlbums va ON va.Id = a.Id
END