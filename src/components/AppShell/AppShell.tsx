import * as React from 'react';

import { Box, Toolbar } from '@mui/material';

import ApplicationBarComplex from '../../organisms/ApplicationBars/ApplicationBarComplex';
import ApplicationBarWithThemeSwitch from '../../organisms/ApplicationBars/ApplicationBarWithThemeSwitch';
import ApplicationDrawer from './ApplicationDrawer/ApplicationDrawer';
import ApplicationMain from './ApplicationMain';
import StandardApplicationBar from '../../organisms/ApplicationBars/StandardApplicationBar';

const AppShell: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* <StandardApplicationBar /> */}
            <ApplicationBarComplex />
            {/* <ApplicationBarWithThemeSwitch /> */}
            <ApplicationDrawer />
            <ApplicationMain>
                <Toolbar />
                {children}
            </ApplicationMain>
        </Box>
    );
};

export default AppShell;
