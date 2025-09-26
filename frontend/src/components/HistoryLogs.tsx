import { Box, Text } from "@chakra-ui/react";
import { Machine } from "../types/Machine";

interface HistoryLogsProps {
  selectedMachine?: Machine;
}

export function HistoryLogs({ selectedMachine }: HistoryLogsProps) {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        State History
      </Text>
      {selectedMachine ? (
        <Box>
          {selectedMachine.stateHistory.length > 0 ? (
            selectedMachine.stateHistory.map((state) => (
              <Box key={state.id} mb={2}>
                <Text as="span">
                  {new Date(state.timestamp).toLocaleString()} – {state.state}
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
  );
}

export default HistoryLogs;
