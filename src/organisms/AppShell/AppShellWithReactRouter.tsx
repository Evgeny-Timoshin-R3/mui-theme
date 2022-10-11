import * as AppRoutes from '../constants/routes';
import * as React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AppMain from '../../components/AppShell/AppMain';
import ApplicationBarComplex from '../ApplicationBars/ApplicationBarComplex';
import { Box } from '@mui/material';
import ReactRouterIntegrationSideBar from './AppSideBars/ReactRouterIntegration';

const AppShellWithReactRouter: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <ApplicationBarComplex />

            <Router>
                <ReactRouterIntegrationSideBar />
                <AppMain>
                    <Routes>
                        <Route path={AppRoutes.HOME} element={<div>HOME</div>} />
                        <Route path={AppRoutes.INBOX} element={<div>INBOX</div>} />
                        <Route path={AppRoutes.BALANCE} element={<div>BALANCE</div>} />
                        <Route path={AppRoutes.DEPOSITS} element={<div>DEPOSITS</div>} />
                        <Route path={AppRoutes.SETTINGS} element={<div>SETTINGS</div>} />
                    </Routes>
                    {children}
                </AppMain>
            </Router>
        </Box>
    );
};

export default AppShellWithReactRouter;
