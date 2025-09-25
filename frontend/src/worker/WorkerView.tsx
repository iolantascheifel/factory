import React from "react";
import { Box, Button, ButtonGroup, Text, Tabs } from "@chakra-ui/react";
import ListOfMachines from "../equipment/ListOfMachines";
import SupervisorView from "../supervisor/SupervisorView";
import { Machine } from "@/types/Machine";

export interface WorkerViewProps {
  onButtonClick: (machineName: string, buttonColor: string) => void;
  machines: Machine[];
}

const WorkerView: React.FC<WorkerViewProps> = ({ machines, onButtonClick }) => {
  return (
    <Box p={8}>
      <Text>States of production</Text>
      <ButtonGroup m={8}>
        <Button bg="red" variant="solid">
          Standing still
        </Button>
        <Button bg="yellow" variant="solid">
          Starting up / Winding down
        </Button>
        <Button bg="green" variant="solid">
          Producing normally
        </Button>
      </ButtonGroup>
      <Tabs.Root variant="enclosed" colorScheme="blue">
        <Tabs.List>
          <Tabs.Trigger value="control">Control View</Tabs.Trigger>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content p={0} value="control">
          <ListOfMachines
            machines={machines || []}
            onButtonClick={onButtonClick}
          />
        </Tabs.Content>
        <Tabs.Content p={0} value="overview">
          <SupervisorView machines={machines} />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default WorkerView;
