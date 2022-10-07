import * as React from 'react';

import AppMain from '../../components/AppShell/AppMain';
import AppSideBar from '../../components/AppShell/AppSideBar/AppSideBar';
import ApplicationBarComplex from '../ApplicationBars/ApplicationBarComplex';
import ApplicationBarWithThemeSwitch from '../ApplicationBars/ApplicationBarWithThemeSwitch';
import { Box } from '@mui/material';
import DrawerListView from '../../components/AppShell/AppSideBar/DrawerListView';
import StandardApplicationBar from '../ApplicationBars/StandardApplicationBar';

const AppShell: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <ApplicationBarComplex />
            {/* <StandardApplicationBar /> */}
            {/* <ApplicationBarWithThemeSwitch /> */}

            <AppSideBar toggleable={true} closeOnClickAway={true}>
                <DrawerListView />
            </AppSideBar>

            <AppMain>{children}</AppMain>
        </Box>
    );
};

export default AppShell;
