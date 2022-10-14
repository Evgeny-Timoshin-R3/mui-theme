import * as AppRoutes from '../../constants/routes';

import { Box, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import AppSideBar from '../../../lib/components/AppShell/AppSideBar/AppSideBar';
import AppSideBarItem from '../../../lib/components/AppShell/AppSideBar/AppSideBarItem';
import { AppSideBarNestedMenu } from '../../../lib';
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MoveToInboxRoundedIcon from '@mui/icons-material/MoveToInboxRounded';
import NoAccountsRoundedIcon from '@mui/icons-material/NoAccountsRounded';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export default function ReactRouterIntegrationSideBar() {
    //Used as an example to show how other libraries could be potentially used to integrate with Side Bar
    const navigate = useNavigate();

    return (
        <AppSideBar closeOnClickAway highlightSelected highlightItemsBasedOnPath>
            <AppSideBarNestedMenu multipleActiveItems={true} localStorageKey="menu1">
                <AppSideBarItem
                    text="Examples"
                    icon={<BrushRoundedIcon />}
                    // Using onclick to navigate instead of link component as below
                    component={Link}
                    // Without the link prop the highlighting on page reload will break
                    to={AppRoutes.EXAMPLES}
                />
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
                <AppSideBarItem text="Accounts" icon={<AccountTreeRoundedIcon />}>
                    <AppSideBarItem
                        text="Deposits"
                        icon={<MoveToInboxRoundedIcon />}
                        component={Link}
                        to={AppRoutes.DEPOSITS}
                    />
                </AppSideBarItem>

                <AppSideBarItem text="Other" icon={<NoAccountsRoundedIcon />}>
                    <AppSideBarItem
                        text="Deposits"
                        icon={<MoveToInboxRoundedIcon />}
                        component={Link}
                        to={'/someshit'}
                    />
                </AppSideBarItem>
            </AppSideBarNestedMenu>

            <Box sx={{ mt: 30 }} />

            <AppSideBarNestedMenu multipleActiveItems={true} localStorageKey="menu2">
                <AppSideBarItem text="User Settings" icon={<SentimentSatisfiedAltRoundedIcon />}>
                    <AppSideBarItem text="User Stuff" />
                </AppSideBarItem>

                <AppSideBarItem text="Wallet" icon={<AccountBalanceWalletRoundedIcon />}>
                    <AppSideBarItem text="Balances" />
                </AppSideBarItem>
            </AppSideBarNestedMenu>

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
