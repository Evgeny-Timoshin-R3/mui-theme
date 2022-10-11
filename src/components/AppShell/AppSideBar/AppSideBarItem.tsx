import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SvgIcon,
    SxProps,
    Theme,
    useTheme,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ReactNode, useId, useMemo } from 'react';

import AppSideBarTooltip from './AppSideBarTooltip';
import { useSideBarContext } from '../../../contexts/SideBarContext';

const expandedButtonMixin = (theme: Theme): SxProps<Theme> => {
    return { marginLeft: '-3px', borderLeft: `3px ${theme.palette.secondary.light} solid` };
};

const selectedButtonMixin = (theme: Theme): SxProps<Theme> => {
    return {
        background: theme.palette.secondary.main,
        '&:hover': {
            background: theme.palette.secondary.light,
        },
    };
};

interface Props {
    text: string;
    icon?: ReactNode;
    level?: number;
    children?: ReactNode;
    onClick: () => void;
    toggleExpanded?: (level: number, id: string) => void;
    isExpanded?: (level: number, id: string) => boolean;
    component?: any;
    to?: string;
}

export default function AppSideBarItem({
    text,
    onClick,
    level = -1,
    icon,
    children,
    toggleExpanded,
    isExpanded,
    component,
    to,
}: Props) {
    const theme = useTheme();
    const {
        open: isSideBarOpen,
        setOpen: setOpenSideBar,
        isSelected,
        setSelected,
    } = useSideBarContext();
    const id = useId();

    const isExpandable = useMemo(() => {
        return typeof children !== 'undefined';
    }, [children]);

    const expanded = useMemo(() => {
        if (isExpanded) {
            return isExpanded(level, id);
        }
        return false;
    }, [isExpanded, level, id]);

    const handleClick = () => {
        onClick();
        if (!isExpandable) {
            setSelected(id);
        }

        if (isExpandable && !isSideBarOpen) {
            setOpenSideBar(true);
        }

        if (isExpandable && toggleExpanded) {
            toggleExpanded(level, id);
        }
    };

    const selected = isSelected(id);

    const contentColor = selected
        ? theme.palette.secondary.contrastText
        : expanded
        ? theme.palette.secondary.main
        : theme.palette.secondary.light;

    return (
        <>
            <AppSideBarTooltip title={isSideBarOpen ? '' : text}>
                <ListItem
                    component={component}
                    to={to}
                    color="secondary"
                    key={'something'}
                    disablePadding
                    sx={{
                        display: 'block',
                        pl: 0.5,
                    }}
                >
                    <ListItemButton
                        sx={(theme) => ({
                            ...(expanded &&
                                isSideBarOpen && {
                                    ...expandedButtonMixin(theme),
                                }),
                            ...(selected && {
                                ...selectedButtonMixin(theme),
                            }),
                        })}
                        onClick={handleClick}
                        color="secondary"
                    >
                        {icon && (
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: isSideBarOpen ? 3 : 'auto',
                                    ml: 0,
                                    justifyContent: 'center',
                                    color: contentColor,
                                }}
                            >
                                {icon}
                            </ListItemIcon>
                        )}
                        <ListItemText
                            primary={text}
                            sx={{
                                opacity: isSideBarOpen ? 1 : 0,
                                marginLeft: !icon ? 6 : undefined,
                                color: contentColor,
                            }}
                        />
                        {isExpandable && (
                            <SvgIcon
                                sx={{
                                    color: contentColor,
                                    opacity: isSideBarOpen ? 1 : 0,
                                }}
                            >
                                {expanded ? <ExpandLess /> : <ExpandMore />}
                            </SvgIcon>
                        )}
                    </ListItemButton>
                </ListItem>
            </AppSideBarTooltip>
            <Collapse
                in={expanded}
                timeout={250}
                unmountOnExit
                sx={{ display: isExpandable && isSideBarOpen ? 'block' : 'none' }}
            >
                <List component="div" disablePadding sx={{ pl: 1.5 }}>
                    {children}
                </List>
            </Collapse>
        </>
    );
}
