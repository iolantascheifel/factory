import { Box } from "@chakra-ui/react";
import Machine from "../equipment/Machine";

interface ListOfMachinesProps {
  activeMachine: string | null;
  onButtonClick: (machineName: string, buttonColor: string) => void;
}

const ListOfMachines: React.FC<ListOfMachinesProps> = ({
  activeMachine,
  onButtonClick,
}) => {
  return (
    <Box>
      <Machine
        name={"Machine 1"}
        activeMachine={activeMachine}
        onButtonClick={onButtonClick}
      />
      <Machine
        name={"Machine 2"}
        activeMachine={activeMachine}
        onButtonClick={onButtonClick}
      />
      <Machine
        name={"Machine 3"}
        activeMachine={activeMachine}
        onButtonClick={onButtonClick}
      />
      <Machine
        name={"Machine 4"}
        activeMachine={activeMachine}
        onButtonClick={onButtonClick}
      />
    </Box>
  );
};

export default ListOfMachines;
