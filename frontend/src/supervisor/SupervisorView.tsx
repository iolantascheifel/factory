import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Machine } from "@/types/Machine";

export interface SupervisorProps {
  machines: Machine[];
}

const SupervisorView: React.FC<SupervisorProps> = ({ machines }) => {
  return (
    <Box p={8}>
      <Text mt={4}>Machine Statuses:</Text>
      <Flex direction="column" mt={4}>
        {machines?.map((machine) => (
          <Box
            key={machine.name}
            bg="gray.700"
            p={4}
            my={2}
            boxShadow="md"
            borderRadius="md"
            color="white"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="lg" fontWeight="bold">
              {machine.name}
            </Text>
            {machine.state ? (
              <Box w="20px" h="20px" borderRadius="full" bg={machine.state} />
            ) : (
              <Text fontSize="sm" fontStyle="italic" color="gray.400">
                No status
              </Text>
            )}
          </Box>
        ))}
      </Flex>
      <Text mt={4}>Historical overview of the states of the equipment:</Text>
    </Box>
  );
};

export default SupervisorView;
