import {Box, ButtonGroup, Button} from "@chakra-ui/react";

export interface WorkerViewProps {}

const WorkerView: React.FC<WorkerViewProps> = () => {
    return (
        <Box>
            <ButtonGroup m={8}>
                <Button bg="red" variant="solid">Standing still</Button>
                <Button bg="yellow" variant="solid">Starting up / Winding down</Button>
                <Button bg="green" variant="solid">Producing normally</Button>
            </ButtonGroup>
        </Box>
    );
}

export default WorkerView;