import { Box, ClickAwayListener, Toolbar } from '@mui/material';
import { ReactNode, useState } from 'react';

import AppDrawer from './AppDrawer/AppDrawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DrawerHeader from './AppDrawer/DrawerHeader';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Provider as SideBarContextProvider } from '../../../contexts/SideBarContext';
import { useLocalStorage } from '../../../hooks';
import { useTheme } from '@mui/material/styles';

interface Props {
    children?: ReactNode;
    closeOnClickAway?: boolean;
    multipleActiveItems?: boolean;
    toggleable?: boolean;
    highlightSelected?: boolean;
    highlightItemsBasedOnPath?: boolean;
    closeOnSelected?: boolean;
}
const AppSideBar: React.FC<Props> = ({
    children,
    closeOnClickAway = false,
    toggleable = true,
    highlightSelected = false,
    highlightItemsBasedOnPath = false,
    closeOnSelected = false,
}) => {
    const theme = useTheme();
    const [open, setOpen] = useLocalStorage<boolean>(
        'app_sidebar_open',
        !toggleable ? true : false
    );
    const [selected, setSelected] = useState<string>('');

    const setSelectedHandler = (id: string) => {
        if (!highlightSelected) return;
        if (closeOnSelected) {
            setOpen(false);
        }
        setSelected(id);
    };

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

    const isSelected = (id: string) => {
        return selected === id;
    };

    const iconColor =
        theme.palette.mode === 'light'
            ? theme.palette.primary.contrastText
            : theme.palette.text.primary;

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <AppDrawer variant="permanent" open={open}>
                {/* Toolbar gives correct spacing under the application bar*/}
                <Toolbar />
                {toggleable && (
                    <>
                        <DrawerHeader>
                            <IconButton
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    color: iconColor,
                                    margin: 'auto',
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <IconButton
                                sx={{
                                    color: iconColor,
                                    marginRight: 'auto',
                                    ...(!open && { display: 'none' }),
                                }}
                                onClick={handleDrawerClose}
                            >
                                <ChevronLeftIcon />
                            </IconButton>
                        </DrawerHeader>
                    </>
                )}

                {!toggleable && <Box sx={{ mt: 2 }} />}

                <SideBarContextProvider
                    value={{
                        open,
                        setOpen,
                        isSelected,
                        setSelected: setSelectedHandler,
                        highlightItemsBasedOnPath,
                    }}
                >
                    {children}
                </SideBarContextProvider>
            </AppDrawer>
        </ClickAwayListener>
    );
};

export default AppSideBar;
