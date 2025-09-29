using System.Text.Json.Serialization;

namespace FactoryApi.Models;

public class MachineState
{
    public Guid Id { get; set; }
    public DateTimeOffset Timestamp { get; set; }
    public string State { get; set; }
    public Guid MachineId { get; set; }
   
}