import * as AppRoutes from '../../constants/routes';

import { Link, useNavigate } from 'react-router-dom';

import AppSideBar from '../../../components/AppShell/AppSideBar/AppSideBar';
import AppSideBarItem from '../../../components/AppShell/AppSideBar/AppSideBarItem';
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
import { Box } from '@mui/material';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MoveToInboxRoundedIcon from '@mui/icons-material/MoveToInboxRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export default function ReactRouterIntegrationSideBar() {
    //Used as an example to show how other libraries could be potentially used to integrate with Side Bar
    const navigate = useNavigate();

    return (
        <AppSideBar closeOnClickAway highlightSelected>
            <AppSideBarItem
                text="Home"
                icon={<HouseRoundedIcon />}
                // Using onclick to navigate instead of link component as below
                onClick={() => {
                    navigate(AppRoutes.HOME);
                }}
                // Without the link prop the highlighting on page reload will break
                to={AppRoutes.HOME}
            />
            <AppSideBarItem
                text="Inbox"
                icon={<InboxIcon />}
                component={Link}
                to={AppRoutes.INBOX}
            />

            <AppSideBarItem
                text="Balance"
                icon={<BalanceRoundedIcon />}
                component={Link}
                to={AppRoutes.BALANCE}
            />
            <AppSideBarItem
                text="Deposits"
                icon={<MoveToInboxRoundedIcon />}
                component={Link}
                to={AppRoutes.DEPOSITS}
            />

            <Box sx={{ flexGrow: 1 }} />
            <AppSideBarItem
                text="Settings"
                icon={<SettingsRoundedIcon />}
                component={Link}
                to={AppRoutes.SETTINGS}
            />
            <Box sx={{ mb: 2 }} />
        </AppSideBar>
    );
}
