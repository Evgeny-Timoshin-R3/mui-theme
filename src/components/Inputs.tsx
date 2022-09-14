import * as React from 'react';

import { IconButton, InputAdornment } from '@mui/material';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { VisibilityOutlined } from '@mui/icons-material';

export default function FormPropsTextFields() {
    return (
        <Box
            component="form"
            sx={{
                marginTop: 6,
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div style={{ width: 800 }}>
                <TextField required id="outlined-required" label="Required" error={true} />
                <TextField disabled id="outlined-disabled" label="Disabled" defaultValue="Hello World" />
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
            </div>
        </Box>
    );
}
