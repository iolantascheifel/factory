namespace FactoryApi.Dtos;

// This is a Data Transfer Object (DTO) used to receive data from the client.
// It separates the public API model from the internal business model,
// which is a good security practice.
public class MachineUpdateDto
{
    public string NewState { get; set; }
    public string NewOrder { get; set; }
}