import * as React from 'react';

import AppMain from '../../components/AppShell/AppMain';
import ApplicationBarComplex from '../ApplicationBars/ApplicationBarComplex';
import BasicSideBar from './AppSideBars/BasicSideBar';
import { Box } from '@mui/material';
import ComplexSideBar from './AppSideBars/ComplexSideBar';

const AppShell: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* App bar examples */}
            <ApplicationBarComplex />
            {/* <StandardApplicationBar /> */}
            {/* <ApplicationBarWithThemeSwitch /> */}

            {/* Side bar examples */}

            {/* <ComplexSideBar /> */}
            <BasicSideBar />

            {/* App Main wrapper for the body of application */}
            <AppMain>{children}</AppMain>
        </Box>
    );
};

export default AppShell;
