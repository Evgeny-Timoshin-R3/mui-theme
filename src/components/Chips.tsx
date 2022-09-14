import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Chips() {
    return (
        <Stack direction="row" spacing={2}>
            <Chip label="CHIP/BADGE" color="primary" />
            <Chip label="CHIP/BADGE" color="secondary" />
            <Chip label="CHIP/BADGE" color="error" />
            <Chip label="CHIP/BADGE" color="success" />
            <Chip label="CHIP/BADGE" color="info" />
            <Chip label="CHIP/BADGE" color="warning" />
            <Chip label="CHIP/BADGE" />
            <Chip label="CHIP/BADGE" variant="outlined" />
        </Stack>
    );
}
