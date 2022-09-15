import * as React from 'react';

import ApplicationBar from './ApplicationBar/ApplicationBar';
import ApplicationDrawer from './ApplicationDrawer/ApplicationDrawer';
import ApplicationMain from './ApplicationMain';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Toolbar } from '@mui/material';

const AppShell: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <ApplicationBar />
            <ApplicationDrawer />
            <ApplicationMain>
                <Toolbar />
                {children}
            </ApplicationMain>
        </Box>
    );
};

export default AppShell;
