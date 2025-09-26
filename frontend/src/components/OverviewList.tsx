import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { Machine } from "../types/Machine";

interface OverviewListProps {
  machines: Machine[];
  onSelectMachine?: (machine: Machine) => void;
  workerMode?: boolean;
}

const OverviewList: React.FC<OverviewListProps> = ({
  machines,
  onSelectMachine,
  workerMode,
}) => {
  return (
    <Box my={4}>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        All Machines
      </Text>
      <Flex direction="column" gap={4}>
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
                <Flex align="center" gap={2}>
                  <Box
                    w="14px"
                    h="14px"
                    borderRadius="full"
                    bg={machine.state}
                  />
                  <Text fontWeight="medium">{machine.name}</Text>
                </Flex>
                <Text fontSize="sm" mt={1}>
                  State: {machine.state} | Order: {machine.order}
                </Text>
              </Box>
              {!workerMode ? (
                <Button
                  size="sm"
                  bg="blue.800"
                  color="white"
                  _hover={{ bg: "blue.700" }}
                  onClick={() => onSelectMachine && onSelectMachine(machine)}
                >
                  View History
                </Button>
              ) : (
                ""
              )}
            </Box>
          ))
        ) : (
          <Text>No machines found.</Text>
        )}
      </Flex>
    </Box>
  );
};

export default OverviewList;
