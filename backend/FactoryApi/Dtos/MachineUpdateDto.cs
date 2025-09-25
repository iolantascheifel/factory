namespace FactoryApi.Dtos;

// This is a Data Transfer Object (DTO) used to receive data from the client.
// It separates the public API model from the internal business model,
// which is a good security practice.
public class MachineUpdateDto
{
    // The new state to which the machine should be transitioned
    public string NewState { get; set; }
    
    // The optional new production order
    public string NewOrder { get; set; }
}