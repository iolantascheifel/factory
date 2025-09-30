using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FactoryApi.Database;
using FactoryApi.Models;
using FactoryApi.Services;
using Microsoft.EntityFrameworkCore;


public class MachineService : IMachineService
{
    private AppDbContext _db;
    
    public MachineService(AppDbContext context)
    {
       _db = context;
    }
    
    public async Task<IEnumerable<Machine>> GetAllMachinesAsync()
    {
        return await _db.Machines
            .Include((m) => m.StateHistory)
            .ToListAsync();
    }
    
    public async Task<Machine?> GetMachineByIdAsync(int id)
    {
        return await _db.Machines
            .Include((m) => m.StateHistory)
            .FirstOrDefaultAsync((m) => m.Id == id);
    }
    
    public async Task<bool> UpdateMachineStateAsync(int id, string newState, string newOrder)
    {
        var machine = await _db.Machines.FirstOrDefaultAsync(m => m.Id == id);
        if (machine == null)
        {
            return false;
        }
        
        machine.StateHistory.Add(new MachineState
        {
            MachineId = machine.Id,
            Timestamp = DateTime.UtcNow,
            State = newState
        });
        
        machine.State = newState;
        if (!string.IsNullOrEmpty(newOrder))
        {
            machine.Order = newOrder;
        }

        await _db.SaveChangesAsync();
        return true;
    }
    
    public async Task<IEnumerable<MachineState>> GetMachineHistoryAsync(int id)
    {
        var machine = await _db.Machines
            .Include((m) => m.StateHistory)
            .FirstOrDefaultAsync((m) => m.Id == id);
        if (machine == null)
        {
            return Enumerable.Empty<MachineState>();
        }
        
        return machine.StateHistory;
    }
}
