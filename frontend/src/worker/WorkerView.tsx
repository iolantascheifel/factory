import React from "react";
import { Box, Tabs } from "@chakra-ui/react";
import ListOfMachines from "../equipment/ListOfMachines";
import { Machine } from "../types/Machine";
import { useMachineState } from "../hooks/useMachineState";
import StatesOfProduction from "../components/StatesOfProduction";
import OverviewList from "../components/OverviewList";

export interface WorkerViewProps {
  machines: Machine[];
}

const WorkerView: React.FC<WorkerViewProps> = ({ machines }) => {
  const { sendApiRequest } = useMachineState();

  const onButtonClick = (machineId: string, buttonColor: string) => {
    sendApiRequest(machineId, buttonColor);
  };

  return (
    <Box p={8}>
      <StatesOfProduction />
      <Tabs.Root variant="enclosed" colorScheme="blue">
        <Tabs.List>
          <Tabs.Trigger value="control">Control View</Tabs.Trigger>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content p={0} value="control">
          <ListOfMachines machines={machines} onButtonClick={onButtonClick} />
        </Tabs.Content>
        <Tabs.Content p={0} value="overview">
          <OverviewList machines={machines} workerMode={true} />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default WorkerView;
