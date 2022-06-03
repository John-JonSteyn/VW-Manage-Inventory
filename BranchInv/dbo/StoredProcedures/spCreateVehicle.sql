CREATE PROCEDURE [dbo].[spCreateVehicle]
	@Id int,
	@Make text,
	@Model text,
	@Features text,
	@Price text,
	@NumStock int
AS
	BEGIN
		INSERT INTO dbo.Vehicle (Id, Make, Model, Features, Price, Numstock)
		VALUES(@Id, @Make, @Model, @Features, @Price, @NumStock);
	END
RETURN 0
