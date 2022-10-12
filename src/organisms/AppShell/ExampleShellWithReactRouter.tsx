import * as AppRoutes from '../constants/routes';
import * as React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

import AppMain from '../../components/AppShell/AppMain';
import AppWrapper from '../../components/AppShell/AppWrapper';
import ApplicationBarComplex from '../ApplicationBars/ApplicationBarComplex';
import { EXAMPLES } from '../../components/Examples/Examples';
import ExampleWrapper from '../../components/ExampleLayout/ExampleWrapper';
import ReactRouterIntegrationSideBar from './AppSideBars/ReactRouterIntegration';

function RouterBreadCrumbs() {
    const location = useLocation();
    return <Typography sx={{ mb: 4, fontWeight: 900 }}>Pathname: {location.pathname}</Typography>;
}

const ExampleShellWithReactRouter: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <AppWrapper>
            <ApplicationBarComplex />

            <Router>
                <ReactRouterIntegrationSideBar />
                <AppMain>
                    <RouterBreadCrumbs />
                    <Routes>
                        <Route
                            path={AppRoutes.EXAMPLES}
                            element={
                                <Stack
                                    direction="column"
                                    spacing={8}
                                    marginBottom={10}
                                    marginTop={2}
                                >
                                    {EXAMPLES.map((example) => (
                                        <ExampleWrapper title={example[0] as string}>
                                            {example[1]}
                                        </ExampleWrapper>
                                    ))}
                                </Stack>
                            }
                        />
                        <Route
                            path={AppRoutes.HOME}
                            element={<Box sx={{ flexGrow: 1 }}>HOME COMPONENT RENDERED</Box>}
                        />
                        <Route
                            path={AppRoutes.INBOX}
                            element={<Box>INBOX COMPONENT RENDERED</Box>}
                        />
                        <Route
                            path={AppRoutes.BALANCE}
                            element={<Box>BALANCE COMPONENT RENDERED</Box>}
                        />
                        <Route
                            path={AppRoutes.DEPOSITS}
                            element={<Box>DEPOSITS COMPONENT RENDERED</Box>}
                        />
                        <Route
                            path={AppRoutes.SETTINGS}
                            element={<Box>SETTINGS COMPONENT RENDERED</Box>}
                        />
                    </Routes>
                    {children}
                </AppMain>
            </Router>
        </AppWrapper>
    );
};

export default ExampleShellWithReactRouter;
