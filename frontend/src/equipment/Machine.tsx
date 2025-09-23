import { Box, Flex, Text, Spacer, ButtonGroup, Button } from "@chakra-ui/react";
import React from "react";

interface MachineProps {
  name: string;
  activeMachine: string | null;
  onButtonClick: (machineName: string, buttonColor: string) => void;
}

const Machine: React.FC<MachineProps> = ({
  name,
  activeMachine,
  onButtonClick,
}) => {
  const isDisabled = activeMachine !== null && activeMachine !== name;

  return (
    <Box
      bg="blue.800"
      p={4}
      my={2}
      boxShadow="md"
      borderRadius="md"
      color="white"
    >
      <Flex align="center">
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <Spacer />
        <ButtonGroup>
          <Button
            size="lg"
            bg="red"
            variant="solid"
            mr={4}
            onClick={() => onButtonClick(name, "red")}
            disabled={isDisabled}
          />
          <Button
            size="lg"
            bg="yellow"
            variant="solid"
            mr={4}
            onClick={() => onButtonClick(name, "yellow")}
            disabled={isDisabled}
          />
          <Button
            size="lg"
            bg="green"
            variant="solid"
            onClick={() => onButtonClick(name, "green")}
            disabled={isDisabled}
          />
        </ButtonGroup>
      </Flex>
    </Box>
  );
};
export default Machine;
