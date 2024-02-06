CREATE OR ALTER PROCEDURE User_RecalculateExperience
(
    @userIds NVARCHAR(MAX)
)
AS
BEGIN
    create table #userLevelTemp
    (
        UserId INT,
        CurrentExp INT,
        EarnedExp INT,
        NewLevelId INT,
        NextTargetExpLEvel INT
    );

    -- Calculate user can earned in current
    INSERT INTO #userLevelTemp
    select
        u.Id as [UserId],
        u.CurrentExp,
        SUM(ul.[Exp]) as [EarnedExp]
    from [User] u
        join [UserLevel] ul on u.Id = ul.UserId
    where EXISTS (SELECT value
    FROM STRING_SPLIT(@userIds, ',')
    WHERE value = u.Id)
    group by u.Id, u.CurrentExp

    -- Update new level if meet conditions
    Update ult
    SET
        ult.NewLevelId = l.Id,
        ult.NextTargetExpLEvel = l.TargetExp
    FROM #userLevelTemp ult
        JOIN [Level] l on ult.EarnedExp >= l.TargetExp and ult.EarnedExp < l.NextExp

    -- Update New User meet conditions
    Update u
    SET
        u.CurrentExp = ult.EarnedExp,
        u.LevelId = ult.NewLevelId,
        u.NextLevelExp = ult.NextTargetExpLEvel
    FROM [User] u
        join #userLevelTemp ult on u.Id = ult.UserId

    drop table #userLevelTemp
END