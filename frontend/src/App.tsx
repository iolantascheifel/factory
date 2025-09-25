import React from "react";
import { useState } from "react";
import "./App.css";
import { Box, Button, ButtonGroup, Heading } from "@chakra-ui/react";
import WorkerView from "./worker/WorkerView";
import SupervisorView from "./supervisor/SupervisorView";
import { useGetAllMachines } from "./hooks/useGetAllMachines";

function App() {
  const [role, setRole] = useState<"worker" | "supervisor">("worker");

  const { machines } = useGetAllMachines();

  return (
    <Box p={8}>
      <Heading mb={4}>LEGO Factory</Heading>
      <ButtonGroup gap={4}>
        <Button onClick={() => setRole("worker")}>Worker Mode</Button>
        <Button onClick={() => setRole("supervisor")}>Supervisor Mode</Button>
      </ButtonGroup>
      {role === "worker" ? (
        <WorkerView onButtonClick={() => {}} machines={machines} />
      ) : (
        <SupervisorView machines={machines} />
      )}
    </Box>
  );
}

export default App;
