import * as React from 'react';

import { Box, Stack } from '@mui/material';

import AppMain from '../../components/AppShell/AppMain';
import AppWrapper from '../../components/AppShell/AppWrapper';
import ApplicationBarComplex from '../ApplicationBars/ApplicationBarComplex';
import BasicSideBar from './AppSideBars/BasicSideBar';
import ComplexSideBar from './AppSideBars/ComplexSideBar';
import { EXAMPLES } from '../../components/Examples/Examples';
import ExampleWrapper from '../../components/ExampleLayout/ExampleWrapper';

const ExampleShell: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <AppWrapper>
            {/* App bar examples */}
            <ApplicationBarComplex />
            {/* <StandardApplicationBar /> */}
            {/* <ApplicationBarWithThemeSwitch /> */}

            {/* Side bar examples */}
            {/* <ComplexSideBar /> */}
            <BasicSideBar />

            {/* App Main wrapper for the body of application */}
            <AppMain>
                <Stack direction="column" spacing={8} marginBottom={10} marginTop={2}>
                    {[EXAMPLES[0]].map((example) => (
                        <ExampleWrapper title={example[0] as string}>{example[1]}</ExampleWrapper>
                    ))}
                </Stack>
                {children}
            </AppMain>
        </AppWrapper>
    );
};

export default ExampleShell;
