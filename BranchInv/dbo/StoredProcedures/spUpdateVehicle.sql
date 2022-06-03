CREATE PROCEDURE [dbo].[UpdateVehicle]
	@Id int,
	@Make text,
	@Model text,
	@Features text,
	@Price text,
	@NumStock int
AS
	BEGIN
		UPDATE dbo.Vehicle
		SET Make = @Make,
			Model = @Model,
			Features = @Features,
			Price = @Price,
			NumStock = @NumStock
		WHERE Id = @Id
	END
RETURN 0
