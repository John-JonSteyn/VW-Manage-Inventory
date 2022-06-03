CREATE PROCEDURE [dbo].[spReadVehicle]

AS
	SELECT [Id], [Make], [Model], [Features], [Price], [NumStock] FROM dbo.Vehicle;
RETURN 0
