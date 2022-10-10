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
    styled,
    useTheme,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ReactNode, useId } from 'react';

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
    onClick: () => void;
    level?: number;
    icon?: ReactNode;
    children?: ReactNode;
}

export default function AppSideBarItem({ text, onClick, level = -1, icon, children }: Props) {
    const theme = useTheme();
    const { open, toggleExpanded, isExpanded, setSelected, isSelected } = useSideBarContext();
    const id = useId();

    const handleClick = () => {
        onClick();
        if (typeof children === 'undefined') {
            setSelected(id);
        }
        if (!open || typeof children === 'undefined') return;
        toggleExpanded(level, id);
    };

    const selected = isSelected(id);
    const expanded = isExpanded(level, id);

    const contentColor = selected
        ? theme.palette.secondary.contrastText
        : expanded
        ? theme.palette.secondary.main
        : theme.palette.secondary.light;

    return (
        <>
            <AppSideBarTooltip title={open ? '' : text}>
                <ListItem
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
                            ...(expanded && {
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
                                    mr: open ? 3 : 'auto',
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
                                opacity: open ? 1 : 0,
                                marginLeft: icon ? undefined : 3,
                                color: contentColor,
                            }}
                        />
                        {children && (
                            <SvgIcon
                                sx={{
                                    color: contentColor,
                                    opacity: open ? 1 : 0,
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
                sx={{ display: children && open ? 'block' : 'none' }}
            >
                <List component="div" disablePadding sx={{ pl: 1.5 }}>
                    {children}
                </List>
            </Collapse>
        </>
    );
}
