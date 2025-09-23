import { Box, ButtonGroup, Button, Text } from "@chakra-ui/react";
import ListOfEquipments from "../equipment/ListOfEquipments";

export interface WorkerViewProps {}

const WorkerView: React.FC<WorkerViewProps> = () => {
  return (
    <Box>
      <Text>States of production</Text>
      <ListOfEquipments />
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
    </Box>
  );
};

export default WorkerView;
