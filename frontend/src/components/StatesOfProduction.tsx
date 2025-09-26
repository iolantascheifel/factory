import { Text, Flex, Box } from "@chakra-ui/react";
import React from "react";

const StatesOfProduction: React.FC<{}> = () => {
  return (
    <Box mb={8} color={"blue.900"}>
      <Text fontWeight="medium" mb={3}>
        States of production:
      </Text>

      <Flex direction="column" gap={3}>
        <Flex align="center" gap={2}>
          <Box w="14px" h="14px" borderRadius="full" bg="red.500" />
          <Text>Standing still</Text>
        </Flex>

        <Flex align="center" gap={2}>
          <Box w="14px" h="14px" borderRadius="full" bg="yellow.400" />
          <Text>Starting up / Winding down</Text>
        </Flex>

        <Flex align="center" gap={2}>
          <Box w="14px" h="14px" borderRadius="full" bg="green.500" />
          <Text>Producing normally</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default StatesOfProduction;
