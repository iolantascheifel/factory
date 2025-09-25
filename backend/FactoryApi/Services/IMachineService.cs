using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FactoryApi.Models;

namespace FactoryApi.Services
{
    public interface IMachineService
    {
        Task<IEnumerable<Machine>> GetAllMachinesAsync();
        Task<Machine?> GetMachineByIdAsync(Guid id);
        Task<bool> UpdateMachineStateAsync(Guid id, string newState, string newOrder);
        Task<IEnumerable<MachineState>> GetMachineHistoryAsync(Guid id);
    }
}

