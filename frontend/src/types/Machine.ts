import { MachineState } from "@/types/MachineState";

export interface Machine {
  id: string;
  name: string;
  state: string;
  order: string;
  stateHistory: MachineState[];
}
