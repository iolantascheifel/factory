import { Box, Text } from "@chakra-ui/react";
import { Machine } from "../types/Machine";
import MachineContainer from "../equipment/MachineContainer";

interface ListOfMachinesProps {
  machines?: Machine[];
  onButtonClick: (id: string, buttonColor: string) => void;
}

const ListOfMachines: React.FC<ListOfMachinesProps> = ({
  machines,
  onButtonClick,
}) => {
  return (
    <Box>
      {machines && machines?.length > 0 ? (
        machines?.map((machine) => (
          <MachineContainer machine={machine} onButtonClick={onButtonClick} />
        ))
      ) : (
        <Text>No machines found or an error occurred.</Text>
      )}
    </Box>
  );
};

export default ListOfMachines;
