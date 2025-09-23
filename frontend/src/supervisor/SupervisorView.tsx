import {Box, Text} from "@chakra-ui/react";

export interface SupervisorProps {}

const SupervisorView: React.FC<SupervisorProps> = () => {
    return (
        <Box p={8}>
            <Text>Supervisor</Text>
        </Box>
    )
}

export default SupervisorView;