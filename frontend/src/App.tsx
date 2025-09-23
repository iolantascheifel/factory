import React from "react";
import { useState } from "react";
import "./App.css";
import { Box, Button, ButtonGroup, Heading } from "@chakra-ui/react";
import WorkerView from "./worker/WorkerView";
import SupervisorView from "./supervisor/SupervisorView";
import { useMachineState } from "./hooks/useMachineState";

function App() {
  const [role, setRole] = useState<"worker" | "supervisor">("worker");
  const { machineStates, sendApiRequest } = useMachineState();
  const [activeMachine, setActiveMachine] = useState<string | null>(null);

  const handleMachineButtonClick = (
    machineName: string,
    buttonColor: string,
  ) => {
    setActiveMachine(machineName);
    sendApiRequest(machineName, buttonColor).finally(() => {
      setActiveMachine(null);
    });
  };

  return (
    <Box p={8}>
      <Heading mb={4}>LEGO Factory</Heading>
      <ButtonGroup gap={4}>
        <Button onClick={() => setRole("worker")}>Worker Mode</Button>
        <Button onClick={() => setRole("supervisor")}>Supervisor Mode</Button>
      </ButtonGroup>
      {role === "worker" ? (
        <WorkerView
          activeMachine={activeMachine}
          onButtonClick={handleMachineButtonClick}
          machineStates={machineStates}
        />
      ) : (
        <SupervisorView machineStates={machineStates} />
      )}
    </Box>
  );
}

export default App;
