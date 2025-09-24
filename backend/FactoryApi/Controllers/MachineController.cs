using Microsoft.AspNetCore.Mvc;  
using FactoryApi.Models;  
using FactoryApi.Services;   
namespace FactoryApi.Controllers  
{  
    [ApiController]  
    [Route("api/[controller]")]  
    public class MachinesController : ControllerBase  
    {  
        private readonly CosmosDbService _cosmosDbService;  
        public MachinesController(CosmosDbService cosmosDbService)  
        {            _cosmosDbService = cosmosDbService;  
        }                [HttpPost]  
        public async Task<IActionResult> UpdateMachineState([FromBody] MachineStateRequest request)  
        {            if (string.IsNullOrEmpty(request.Machine) || string.IsNullOrEmpty(request.State))  
            {                return BadRequest("Machine name and state are required.");  
            }            await _cosmosDbService.AddItemAsync(request);  
  
            Console.WriteLine($"Received update for {request.Machine}: {request.State}");  
  
            return Ok(new { message = $"State for {request.Machine} updated to {request.State}." });  
        }    }}