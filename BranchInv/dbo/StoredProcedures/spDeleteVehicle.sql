CREATE PROCEDURE [dbo].[spDeleteVehicle]
	@Id int
AS
	BEGIN
		DELETE FROM dbo.Vehicle WHERE Id = @Id
	END
RETURN 0
