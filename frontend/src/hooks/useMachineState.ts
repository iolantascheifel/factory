import { useState } from "react";

export interface MachineState {
  name: string;
  selectedColor: "red" | "yellow" | "green" | null;
}

const initialMachineData: MachineState[] = [
  { name: "Machine 1", selectedColor: null },
  { name: "Machine 2", selectedColor: null },
  { name: "Machine 3", selectedColor: null },
  { name: "Machine 4", selectedColor: null },
];

export const useMachineState = () => {
  const [machineStates, setMachineStates] =
    useState<MachineState[]>(initialMachineData);

  const sendApiRequest = async (machineName: string, buttonColor: string) => {
    console.log(
      `Simulating API call: POST to /api/machines with data: { machine: ${machineName}, state: ${buttonColor} }`,
    );

    // This it to simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // This will be the real call from backend
    // const response = await fetch('/api/machines', { ... });
    // if (!response.ok) { ... }

    setMachineStates((prevStates) =>
      prevStates.map((machine) =>
        machine.name === machineName
          ? {
              ...machine,
              selectedColor: buttonColor as "red" | "yellow" | "green",
            }
          : machine,
      ),
    );
    console.log(`State updated for ${machineName} to ${buttonColor}.`);
  };

  return { machineStates, sendApiRequest };
};
