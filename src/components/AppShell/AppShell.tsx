import * as React from 'react';

import ApplicationBarComplex from '../../organisms/ApplicationBars/ApplicationBarComplex';
import ApplicationDrawer from './ApplicationDrawer/ApplicationDrawer';
import ApplicationMain from './ApplicationMain';
import Box from '@mui/material/Box';
import StandardApplicationBar from '../../organisms/ApplicationBars/StandardApplicationBar';
import { Toolbar } from '@mui/material';

const AppShell: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* <StandardApplicationBar /> */}
            <ApplicationBarComplex />
            <ApplicationDrawer />
            <ApplicationMain>
                <Toolbar />
                {children}
            </ApplicationMain>
        </Box>
    );
};

export default AppShell;
