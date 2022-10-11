import { Box, IconButton } from '@mui/material';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AppSideBar from '../../../components/AppShell/AppSideBar/AppSideBar';
import AppSideBarItem from '../../../components/AppShell/AppSideBar/AppSideBarItem';
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MoveToInboxRoundedIcon from '@mui/icons-material/MoveToInboxRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export default function BasicSideBar() {
    return (
        <AppSideBar closeOnClickAway highlightSelected>
            <AppSideBarItem text="Inbox" icon={<InboxIcon />} onClick={() => {}} />
            <AppSideBarItem text="Home" icon={<HouseRoundedIcon />} onClick={() => {}} />
            <AppSideBarItem text="Balance" icon={<BalanceRoundedIcon />} onClick={() => {}} />
            <AppSideBarItem text="Deposits" icon={<MoveToInboxRoundedIcon />} onClick={() => {}} />

            <Box sx={{ flexGrow: 1 }} />

            <AppSideBarItem text="Settings" icon={<SettingsRoundedIcon />} onClick={() => {}} />
            <Box sx={{ mb: 2 }} />
        </AppSideBar>
    );
}
