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
      bg="blue.600"
      p={4}
      my={4}
      boxShadow="xl"
      borderRadius="lg"
      color="white"
    >
      <Flex align="center">
        <Text fontSize="md">{machine.name}</Text>
        <Spacer />
        <ButtonGroup gap={2}>
          <Button
            size="md"
            border={"0.3 solid"}
            borderColor={"white"}
            bg="red"
            variant="solid"
            onClick={() => onButtonClick(machine.id, "red")}
          />
          <Button
            size="md"
            bg="yellow"
            variant="solid"
            border={"0.3 solid"}
            borderColor={"white"}
            onClick={() => onButtonClick(machine.id, "yellow")}
          />
          <Button
            size="md"
            bg="green"
            variant="solid"
            border={"0.3 solid"}
            borderColor={"white"}
            onClick={() => onButtonClick(machine.id, "green")}
          />
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default MachineContainer;
