import * as React from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
    return (
        <>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup
                color="secondary"
                disableElevation
                aria-label="outlined primary button group"
            >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup
                color="secondary"
                disableElevation
                aria-label="outlined primary button group"
            >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup
                variant="contained"
                disableElevation
                aria-label="outlined primary button group"
            >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup
                color="secondary"
                variant="contained"
                disableElevation
                aria-label="outlined primary button group"
            >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup
                color="secondary"
                variant="text"
                disableElevation
                aria-label="outlined primary button group"
            >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </>
    );
}
