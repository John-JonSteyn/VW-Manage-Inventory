using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace VWManageInvApi.Models
{
    public class VehiclesdContext : DbContext
    {
        public VehiclesdContext(DbContextOptions<VehiclesdContext> options)
            : base(options)
        {
        }
        public DbSet<Vehiclesd> Inventory { get; set; } = null!;
    }
}