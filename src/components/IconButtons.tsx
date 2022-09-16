import * as React from 'react';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function IconButtons() {
    return (
        <>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
            <IconButton color="primary">
                <SendIcon />
            </IconButton>
            <IconButton color="secondary">
                <SendIcon />
            </IconButton>
            <IconButton color="warning">
                <SendIcon />
            </IconButton>
            <IconButton color="primary">
                <SendIcon />
            </IconButton>
        </>
    );
}
