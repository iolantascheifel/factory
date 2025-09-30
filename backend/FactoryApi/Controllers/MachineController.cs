using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FactoryApi.Dtos;
using FactoryApi.Models;
using FactoryApi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization; 

[ApiController]
[Route("api/machines")]
public class MachineController : ControllerBase
{
    private readonly IMachineService _machineService;
    
    public MachineController(IMachineService machineService)
    {
        _machineService = machineService;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Machine>>> Get()
    {
        var machines = await _machineService.GetAllMachinesAsync();
        return Ok(machines);
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<Machine>> GetById(int id)
    {
        var machine = await _machineService.GetMachineByIdAsync(id);
        if (machine == null)
        {
            return NotFound();
        }
        return Ok(machine);
    }
    
    [HttpGet("{id}/history")]
    public async Task<ActionResult<IEnumerable<MachineState>>> GetHistory(int id)
    {
        var history = await _machineService.GetMachineHistoryAsync(id);
        return Ok(history);
    }
    
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateMachineState(int id, [FromBody] MachineUpdateDto updateDto)
    {
        var success = await _machineService.UpdateMachineStateAsync(id, updateDto.NewState, updateDto.NewOrder);
        if (!success)
        {
            return NotFound();
        }
        return NoContent(); 
    }
}