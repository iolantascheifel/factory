import React, { useState } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { Machine } from "@/types/Machine";

export interface SupervisorProps {
  machines: Machine[];
}

const SupervisorView: React.FC<SupervisorProps> = ({ machines }) => {
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);

  const handleSelectMachine = (machine: Machine) => {
    setSelectedMachine(machine);
  };

  return (
    <Box>
      <Text fontSize="xl" mb={4}>
        Supervisor Overview
      </Text>
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={8}>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            All Machines
          </Text>
          <Flex>
            {machines && machines.length > 0 ? (
              machines.map((machine) => (
                <Box
                  key={machine.id}
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Text fontWeight="bold">{machine.name}</Text>
                    <Text fontSize="sm">
                      State: {machine.state} | Order: {machine.order}
                    </Text>
                    <Box
                      w="20px"
                      h="20px"
                      borderRadius="full"
                      bg={machine.state}
                    />
                  </Box>
                  <Button
                    size="sm"
                    onClick={() => handleSelectMachine(machine)}
                  >
                    View History
                  </Button>
                </Box>
              ))
            ) : (
              <Text>No machines found.</Text>
            )}
          </Flex>
        </Box>
        {/* History Display */}
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            State History
          </Text>
          {selectedMachine ? (
            <Box>
              {selectedMachine.stateHistory.length > 0 ? (
                selectedMachine.stateHistory.map((state) => (
                  <Box key={state.id}>
                    {/*<ListIcon as={MdHistory} color="blue.500" />*/}
                    <Text as="span">
                      {new Date(state.timestamp).toLocaleString()} -{" "}
                      {state.state}
                    </Text>
                  </Box>
                ))
              ) : (
                <Text>No history available for this machine.</Text>
              )}
            </Box>
          ) : (
            <Text>Select a machine to view its history.</Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SupervisorView;
