import React from 'react';
import {useState} from "react";
import './App.css';
import { Box, Button, Heading } from "@chakra-ui/react";
import WorkerView from "./worker/WorkerView";
import SupervisorView from "./supervisor/SupervisorView";

function App() {
    const [role, setRole] = useState<"worker" | "supervisor">("worker");

  return (
      <Box p={8}>
        <Heading mb={4}>LEGO Factory</Heading>
        <Button onClick={() => setRole("worker")}>Worker Mode</Button>
          <Button onClick={() => setRole("supervisor")}>Supervisor Mode</Button>
          {role === "worker" ? <WorkerView /> : <SupervisorView />}
      </Box>
  );
}

export default App;