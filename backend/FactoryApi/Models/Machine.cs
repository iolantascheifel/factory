namespace FactoryApi.Models;

public class Machine
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string State { get; set; }
    public string Order { get; set; }
    public List<MachineState> StateHistory { get; set; } = new List<MachineState>();
}