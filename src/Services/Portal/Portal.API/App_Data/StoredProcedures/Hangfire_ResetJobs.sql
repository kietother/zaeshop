CREATE OR ALTER PROCEDURE Hangfire_ResetJobs
AS
BEGIN
	UPDATE dbo.HangfireScheduleJob
	SET IsRunning = 0
END