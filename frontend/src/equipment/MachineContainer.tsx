import React from "react";
import { Box, Flex, Text, Spacer, Button, ButtonGroup } from "@chakra-ui/react";
import { Machine } from "../types/Machine";

interface MachineProps {
  machine: Machine;
  onButtonClick: (id: string, buttonColor: string) => void;
}

const MachineContainer: React.FC<MachineProps> = ({
  machine,
  onButtonClick,
}) => {
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
          {machine.name}
        </Text>
        <Spacer />
        <ButtonGroup>
          <Button
            size="lg"
            bg="red"
            variant="solid"
            mr={4}
            onClick={() => onButtonClick(machine.id, "red")}
          />
          <Button
            size="lg"
            bg="yellow"
            variant="solid"
            mr={4}
            onClick={() => onButtonClick(machine.id, "yellow")}
          />
          <Button
            size="lg"
            bg="green"
            variant="solid"
            onClick={() => onButtonClick(machine.id, "green")}
          />
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default MachineContainer;
