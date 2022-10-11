import AppSideBar from '../../../components/AppShell/AppSideBar/AppSideBar';
import AppSideBarItem from '../../../components/AppShell/AppSideBar/AppSideBarItem';
import AppSideBarNestedMenu from '../../../components/AppShell/AppSideBar/AppSideBarMenu/AppSideBarNestedMenu';
import { Box } from '@mui/material';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export default function ComplexSideBar() {
    return (
        <AppSideBar toggleable closeOnClickAway highlightSelected>
            <AppSideBarNestedMenu multipleActiveItems={false}>
                <AppSideBarItem text="Home" icon={<HouseRoundedIcon />} />
                <AppSideBarItem text="Statistics" icon={<ListAltRoundedIcon />}>
                    <AppSideBarItem text="Treasury">
                        <AppSideBarItem text="Balance" />
                        <AppSideBarItem text="Deposits" />
                    </AppSideBarItem>
                    <AppSideBarItem text="Treasury 2">
                        <AppSideBarItem text="Balance 2" />
                        <AppSideBarItem text="Deposits 2" />
                    </AppSideBarItem>
                    <AppSideBarItem text="Vault" />
                </AppSideBarItem>
                <AppSideBarItem text="Statistics 2" icon={<ListAltRoundedIcon />}>
                    <AppSideBarItem text="Treasury 2">
                        <AppSideBarItem text="Balance 2" />
                        <AppSideBarItem text="Deposits 2" />
                    </AppSideBarItem>
                    <AppSideBarItem text="Vault" />
                </AppSideBarItem>
                <AppSideBarItem text="Inbox" icon={<InboxIcon />} />
            </AppSideBarNestedMenu>
            <Box sx={{ flexGrow: 1 }} />
            <AppSideBarItem text="Settings" icon={<SettingsRoundedIcon />} />
            <Box sx={{ mb: 2 }} />
        </AppSideBar>
    );
}
