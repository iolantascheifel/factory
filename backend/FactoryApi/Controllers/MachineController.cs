using Microsoft.AspNetCore.Mvc;
using FactoryApi.Models;

namespace MyMachineApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MachinesController : ControllerBase
    {
        private static readonly Dictionary<string, string> machineStates = new Dictionary<string, string>();

        [HttpGet]
        public IActionResult GetMachineStates()
        {
            return Ok(machineStates);
        }

        [HttpPost]
        public IActionResult UpdateMachineState([FromBody] MachineStateRequest request)
        {
            if (string.IsNullOrEmpty(request.Machine) || string.IsNullOrEmpty(request.State))
            {
                return BadRequest("Machine name and state are required.");
            }

            machineStates[request.Machine] = request.State;
            Console.WriteLine($"Received update for {request.Machine}: {request.State}");

            return Ok(new { message = $"State for {request.Machine} updated to {request.State}." });
        }
    }
}