import { useUpdateMachine } from "./useUpdateMachine";
import { useFetchMachines } from "./useFetchMachines";

export const useMachineState = () => {
  const { machines, loading, error, fetchMachines } = useFetchMachines();
  const { updateMachine, isUpdating, updateError } = useUpdateMachine();

  const mapColorToState = (color: string) => {
    switch (color) {
      case "red":
        return "red";
      case "yellow":
        return "yellow";
      case "green":
        return "green";
      default:
        return "Unknown";
    }
  };

  const sendApiRequest = async (machineId: string, buttonColor: string) => {
    const newState = mapColorToState(buttonColor);

    const updateDto = {
      newState: newState,
      newOrder: "PO-12345",
    };

    try {
      await updateMachine(machineId, updateDto);
      if (!isUpdating && !updateError) {
        fetchMachines();
      }
    } catch (e) {
      console.error("Failed to update machine:", e);
    }
  };

  return {
    machines,
    loading,
    error,
    sendApiRequest,
    isUpdating,
    updateError,
  };
};
