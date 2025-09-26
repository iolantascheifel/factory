import React from "react";
import { useState } from "react";
import "./App.css";
import { Box, Button, ButtonGroup, Heading } from "@chakra-ui/react";
import WorkerView from "./worker/WorkerView";
import SupervisorView from "./supervisor/SupervisorView";
import { useFetchMachines } from "./hooks/useFetchMachines";

function App() {
  const [role, setRole] = useState<"worker" | "supervisor">("worker");

  const { machines } = useFetchMachines();

  return (
    <Box p={8}>
      <Heading mb={4}>LEGO Factory</Heading>
      <ButtonGroup gap={4}>
        <Button onClick={() => setRole("worker")}>Worker Mode</Button>
        <Button onClick={() => setRole("supervisor")}>Supervisor Mode</Button>
      </ButtonGroup>
      {role === "worker" ? (
        <WorkerView machines={machines} />
      ) : (
        <SupervisorView machines={machines} />
      )}
    </Box>
  );
}

export default App;
