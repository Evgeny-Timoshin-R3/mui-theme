import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import Drawer from './Drawer';
import DrawerHeader from './DrawerHeader';
import DrawerListView from './DrawerListView';
import DrawerTreeView from './DrawerTreeView';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

const ApplicationDrawer = () => {
    const theme = useTheme();

    const [open, setOpen] = useState<boolean>(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Drawer variant="permanent" open={open}>
            {/* Toolbar gives correct spacing under the application bar*/}
            <Toolbar />
            <DrawerHeader>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        margin: 'auto',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <IconButton
                    sx={{
                        marginRight: 'auto',
                        ...(!open && { display: 'none' }),
                    }}
                    onClick={handleDrawerClose}
                >
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />

            <DrawerListView open={open} />
            <div style={{ marginTop: 50 }} />
            <DrawerTreeView open={open} />
            <Divider />
        </Drawer>
    );
};

export default ApplicationDrawer;
