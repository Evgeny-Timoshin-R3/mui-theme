import * as React from 'react';

import { FormControlLabel, FormGroup } from '@mui/material';

import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
    return (
        <div style={{ width: 100 }}>
            <FormGroup>
                <Checkbox color="secondary" {...label} defaultChecked />
                <Checkbox {...label} checked />
                <Checkbox {...label} />
                <Checkbox {...label} disabled />
                <Checkbox {...label} disabled checked />

                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup>
        </div>
    );
}
