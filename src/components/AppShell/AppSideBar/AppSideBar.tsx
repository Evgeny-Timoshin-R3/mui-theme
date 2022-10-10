import { Box, ClickAwayListener, Toolbar } from '@mui/material';
import { Children, ReactElement, ReactNode, isValidElement, useState } from 'react';

import AppSideBarItem from './AppSideBarItem';
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
    children?: ReactNode;
    closeOnClickAway?: boolean;
    multipleActiveItems?: boolean;
    toggleable?: boolean;
}

export default function AppSideBar({
    children,
    multipleActiveItems = true,
    closeOnClickAway = false,
    toggleable = true,
}: Props) {
    const theme = useTheme();

    const [open, setOpen] = useState<boolean>(!toggleable ? true : false);
    const [selected, setSelected] = useState<string>('');
    const [expanded, setExpanded] = useState<Map<number, string[]>>(new Map());

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

    const toggleExpanded = (level: number, id: string) => {
        const tempExpanded = new Map(expanded);
        const expandedList = tempExpanded.get(level);
        if (!expandedList) {
            tempExpanded.set(level, [id]);
            setExpanded(tempExpanded);
            return;
        }

        if (expandedList.includes(id)) {
            tempExpanded.set(
                level,
                expandedList.filter((e) => e !== id)
            );
        } else {
            if (!multipleActiveItems) {
                tempExpanded.set(level, [id]);
            } else {
                tempExpanded.set(level, [...expandedList, id]);
            }
        }
        setExpanded(tempExpanded);
    };

    const isExpanded = (level: number, id: string): boolean => {
        const expandedList = expanded.get(level);
        if (!expandedList) return false;
        return expandedList.includes(id);
    };

    const level = -1;

    const renderChildren = (childrenRoot: ReactElement, level: number): ReactNode => {
        level++;
        return (
            <AppSideBarItem {...childrenRoot.props} level={level}>
                {childrenRoot.props &&
                    childrenRoot.props.children &&
                    Children.map(childrenRoot.props.children, (child, i) => {
                        if (isValidElement(child)) {
                            return renderChildren(child, level);
                        }
                    })}
            </AppSideBarItem>
        );
    };

    const iconColor =
        theme.palette.mode === 'light'
            ? theme.palette.primary.contrastText
            : theme.palette.text.primary;

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Drawer variant="permanent" open={open}>
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

                <SideBarContextProvider
                    value={{ open, toggleExpanded, isExpanded, setSelected, isSelected }}
                >
                    {Children.map(children, (child, i) => {
                        if (isValidElement(child)) {
                            return renderChildren(child, level);
                        }
                    })}
                </SideBarContextProvider>
            </Drawer>
        </ClickAwayListener>
    );
}
