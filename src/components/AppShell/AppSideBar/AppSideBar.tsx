import { Box, ClickAwayListener, Toolbar } from '@mui/material';
import { ReactNode, useState } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import Drawer from './Drawer';
import DrawerHeader from './DrawerHeader';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideBarContextProvider from '../../../contexts/SideBarContext';
import { useTheme } from '@mui/material/styles';

interface Props {
    closeOnClickAway?: boolean;
    toggleable?: boolean;
    children?: ReactNode;
}

export default function AppSideBar({
    children,
    closeOnClickAway = false,
    toggleable = true,
}: Props) {
    const theme = useTheme();

    const [open, setOpen] = useState<boolean>(!toggleable ? true : false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClickAway = () => {
        if (closeOnClickAway && toggleable) {
            handleDrawerClose();
        }
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Drawer variant="permanent" open={open}>
                {/* Toolbar gives correct spacing under the application bar*/}
                <Toolbar />
                {toggleable && (
                    <>
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
                                {theme.direction === 'rtl' ? (
                                    <ChevronRightIcon />
                                ) : (
                                    <ChevronLeftIcon />
                                )}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                    </>
                )}

                {!toggleable && <Box sx={{ mt: 2 }} />}

                <SideBarContextProvider value={{ open }}>{children}</SideBarContextProvider>
            </Drawer>
        </ClickAwayListener>
    );
}
