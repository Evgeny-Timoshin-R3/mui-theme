import * as React from 'react';

import Button from '@mui/material/Button';

export default function ButtonSizes() {
    return (
        <>
            <div>
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
                <Button size="large" disabled>
                    Disabled
                </Button>
            </div>
            <div>
                <Button variant="outlined" size="small">
                    Small
                </Button>
                <Button variant="outlined" size="medium">
                    Medium
                </Button>
                <Button variant="outlined" size="large">
                    Large
                </Button>
                <Button variant="outlined" size="large" disabled>
                    Disabled
                </Button>
            </div>
            <div>
                <Button variant="contained" size="small">
                    Small
                </Button>
                <Button variant="contained" size="medium">
                    Medium
                </Button>
                <Button variant="contained" size="large">
                    Large
                </Button>

                <Button variant="contained" size="large" disabled>
                    Disabled
                </Button>
            </div>
        </>
    );
}
