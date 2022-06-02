using Microsoft.EntityFrameworkCore;
using VWManageInvApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
                      policy  =>
                      {
                          policy.WithOrigins("http://localhost:3000");
                      });
});

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<VehicleContext>(opt =>
    opt.UseInMemoryDatabase("BranchInvDB"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();