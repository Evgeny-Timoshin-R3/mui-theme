import * as React from 'react';

import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { VisibilityOutlined } from '@mui/icons-material';

export default function FormPropsTextFields() {
    return (
        <>
            <TextField required id="outlined-required" label="Required" error={true} />
            <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                InputProps={{
                    endAdornment: (
                        <IconButton color="secondary">
                            <VisibilityOutlined />
                        </IconButton>
                    ),
                }}
            />
            <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField id="outlined-search" label="Search field" type="search" />
            <TextField
                id="outlined-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
            />
        </>
    );
}
