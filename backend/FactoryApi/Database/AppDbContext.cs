using FactoryApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace FactoryApi.Database;

public class AppDbContext: DbContext
{
    public DbSet<Machine> Machines { get; set; }
    public DbSet<MachineState> MachineStates { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
    {
        
    }
}
