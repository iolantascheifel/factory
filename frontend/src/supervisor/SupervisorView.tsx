import { Box, Text } from "@chakra-ui/react";
import ListOfEquipments from "../equipment/ListOfEquipments";

export interface SupervisorProps {}

const SupervisorView: React.FC<SupervisorProps> = () => {
  return (
    <Box p={8}>
      <Text>Supervisor</Text>
      <ListOfEquipments />
    </Box>
  );
};

export default SupervisorView;
