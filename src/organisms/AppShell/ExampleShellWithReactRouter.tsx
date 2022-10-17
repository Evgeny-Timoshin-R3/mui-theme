import * as AppRoutes from '../constants/routes';
import * as React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

import AppMain from '../../lib/components/AppShell/AppMain';
import AppWrapper from '../../lib/components/AppShell/AppWrapper';
import ApplicationBarWithReactRouter from '../ApplicationBars/ApplicationBarWithReactRouter';
import { EXAMPLES } from '../../Examples/Examples';
import ExampleWrapper from '../../ExampleLayout/ExampleWrapper';
import ReactRouterIntegrationSideBar from './AppSideBars/ReactRouterIntegration';

function RouterBreadCrumbs() {
    const location = useLocation();
    return <Typography sx={{ mb: 4, fontWeight: 900 }}>Pathname: {location.pathname}</Typography>;
}

const ExampleShellWithReactRouter: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <AppWrapper>
            <Router>
                <ApplicationBarWithReactRouter />

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
                        <Route path={AppRoutes.HOME} element={<Box>HOME COMPONENT RENDERED</Box>} />
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
