import AppSideBar from '../../../components/AppShell/AppSideBar/AppSideBar';
import AppSideBarItem from '../../../components/AppShell/AppSideBar/AppSideBarItem';
import AppSideBarMenu from '../../../components/AppShell/AppSideBar/AppSideBarMenu/AppSideBarMenu';
import { Box } from '@mui/material';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export default function ComplexSideBar() {
    return (
        <AppSideBar toggleable closeOnClickAway highlightSelected>
            <AppSideBarMenu multipleActiveItems={false}>
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
            </AppSideBarMenu>
            <Box sx={{ flexGrow: 1 }} />
            <AppSideBarItem text="Settings" icon={<SettingsRoundedIcon />} onClick={() => {}} />
            <Box sx={{ mb: 2 }} />
        </AppSideBar>
    );
}
