import AppSideBarItem from './AppSideBarItem';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import setOpacity from '../../../mui_theme/utils/addAlpha';

export default function DrawerListView() {
    return (
        <List>
            <AppSideBarItem
                borderedIcon
                text="Home"
                icon={<HouseRoundedIcon />}
                onClick={() => {}}
            />
            <AppSideBarItem
                borderedIcon
                text="Statistics"
                icon={<ListAltRoundedIcon />}
                onClick={() => {}}
            >
                <AppSideBarItem text="Treasury" onClick={() => {}}>
                    <AppSideBarItem text="Balance" onClick={() => {}} />
                    <AppSideBarItem text="Deposits" onClick={() => {}} />
                </AppSideBarItem>
                <AppSideBarItem text="Vault" onClick={() => {}} />
            </AppSideBarItem>
            <AppSideBarItem borderedIcon text="Inbox" icon={<InboxIcon />} onClick={() => {}} />
        </List>
    );
}
