import { Box } from "@chakra-ui/react";
import { Machine } from "../types/Machine";
import MachineContainer from "../equipment/MachineContainer";

interface ListOfMachinesProps {
  machines?: Machine[];
  onButtonClick: (machineName: string, buttonColor: string) => void;
}

const ListOfMachines: React.FC<ListOfMachinesProps> = ({
  machines,
  onButtonClick,
}) => {
  return (
    <Box>
      {machines?.map((machine) => (
        <MachineContainer machine={machine} onButtonClick={onButtonClick} />
      ))}
    </Box>
  );
};

export default ListOfMachines;
