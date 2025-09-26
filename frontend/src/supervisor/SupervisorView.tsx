import React, { useState } from "react";
import { Machine } from "../types/Machine";
import HistoryLogs from "../components/HistoryLogs";
import OverviewList from "../components/OverviewList";
import StatesOfProduction from "../components/StatesOfProduction";

export interface SupervisorProps {
  machines: Machine[];
}

const SupervisorView: React.FC<SupervisorProps> = ({ machines }) => {
  const [selectedMachine, setSelectedMachine] = useState<Machine>();

  const handleSelectMachine = (machine: Machine) => {
    setSelectedMachine(machine);
  };

  return (
    <>
      <StatesOfProduction />
      <OverviewList machines={machines} onSelectMachine={handleSelectMachine} />
      <HistoryLogs selectedMachine={selectedMachine} />
    </>
  );
};

export default SupervisorView;
