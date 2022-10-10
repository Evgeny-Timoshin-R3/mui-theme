import * as React from 'react';

import AppMain from '../../components/AppShell/AppMain';
import AppSideBar from '../../components/AppShell/AppSideBar/AppSideBar';
import AppSideBarItem from '../../components/AppShell/AppSideBar/AppSideBarItem';
import ApplicationBarComplex from '../ApplicationBars/ApplicationBarComplex';
import ApplicationBarWithThemeSwitch from '../ApplicationBars/ApplicationBarWithThemeSwitch';
import { Box } from '@mui/material';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';

const AppShell: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <ApplicationBarComplex />
            {/* <StandardApplicationBar /> */}
            {/* <ApplicationBarWithThemeSwitch /> */}
            <AppSideBar toggleable={true} closeOnClickAway={true} multipleActiveItems={false}>
                <AppSideBarItem text="Home" icon={<HouseRoundedIcon />} onClick={() => {}} />
                <AppSideBarItem text="Statistics" icon={<ListAltRoundedIcon />} onClick={() => {}}>
                    <AppSideBarItem text="Treasury" onClick={() => {}}>
                        <AppSideBarItem text="Balance" onClick={() => {}} />
                        <AppSideBarItem text="Deposits" onClick={() => {}} />
                    </AppSideBarItem>
                    <AppSideBarItem text="Treasury 2" onClick={() => {}}>
                        <AppSideBarItem text="Balance 2" onClick={() => {}} />
                        <AppSideBarItem text="Deposits 2" onClick={() => {}} />
                    </AppSideBarItem>
                    <AppSideBarItem text="Vault" onClick={() => {}} />
                </AppSideBarItem>
                <AppSideBarItem
                    text="Statistics 2"
                    icon={<ListAltRoundedIcon />}
                    onClick={() => {}}
                >
                    <AppSideBarItem text="Treasury 2" onClick={() => {}}>
                        <AppSideBarItem text="Balance 2" onClick={() => {}} />
                        <AppSideBarItem text="Deposits 2" onClick={() => {}} />
                    </AppSideBarItem>
                    <AppSideBarItem text="Vault" onClick={() => {}} />
                </AppSideBarItem>
                <AppSideBarItem text="Inbox" icon={<InboxIcon />} onClick={() => {}} />
            </AppSideBar>

            <AppMain>{children}</AppMain>
        </Box>
    );
};

export default AppShell;
