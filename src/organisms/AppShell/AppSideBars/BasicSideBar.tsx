import AppSideBar from '../../../lib/components/AppShell/AppSideBar/AppSideBar';
import AppSideBarItem from '../../../lib/components/AppShell/AppSideBar/AppSideBarItem';
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
import { Box } from '@mui/material';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MoveToInboxRoundedIcon from '@mui/icons-material/MoveToInboxRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export default function BasicSideBar() {
    return (
        <AppSideBar closeOnClickAway highlightSelected>
            <AppSideBarItem
                text="Home"
                icon={<HouseRoundedIcon />}
                onClick={() => {
                    alert('You clicked something!');
                }}
            />
            <AppSideBarItem text="Inbox" icon={<InboxIcon />} />
            <AppSideBarItem text="Balance" icon={<BalanceRoundedIcon />} />
            <AppSideBarItem text="Deposits" icon={<MoveToInboxRoundedIcon />} />

            <Box sx={{ flexGrow: 1 }} />

            <AppSideBarItem text="Settings" icon={<SettingsRoundedIcon />} />
            <Box sx={{ mb: 2 }} />
        </AppSideBar>
    );
}
