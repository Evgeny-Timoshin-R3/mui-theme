import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SxProps,
    Theme,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ReactNode, useRef, useState } from 'react';

import AppSideBarTooltip from './AppSideBarTooltip';
import setOpacity from '../../../mui_theme/utils/addAlpha';
import { useSideBarContext } from '../../../contexts/SideBarContext';

interface Props {
    text: string;
    onClick: () => void;
    borderedIcon?: boolean;
    icon?: ReactNode;
    children?: ReactNode;
}

export default function AppSideBarItem({
    text,
    onClick,
    icon,
    borderedIcon = false,
    children,
}: Props) {
    const { open } = useSideBarContext();
    const [expanded, setExpanded] = useState(false);

    const ref = useRef(null);

    const handleClick = () => {
        onClick();
        if (!open || typeof children === 'undefined') return;
        setExpanded((prev) => !prev);
    };

    const listItemAdditionalStyles: SxProps<Theme> = (theme) => {
        if (!borderedIcon) return {};
        return {
            border: `1px solid ${setOpacity(
                theme.palette.getContrastText(
                    theme.palette.mode === 'light'
                        ? theme.palette.primary.main
                        : theme.palette.background.paper
                ),
                0.4
            )}`,
            padding: 0.7,
            borderRadius: 1,
        };
    };

    return (
        <>
            <AppSideBarTooltip title={open ? '' : text}>
                <ListItem key={'something'} disablePadding sx={{ display: 'block', pl: 0.5 }}>
                    <ListItemButton
                        sx={{ pl: borderedIcon ? 1.2 : undefined }}
                        onClick={handleClick}
                    >
                        <ListItemIcon
                            sx={(theme) => ({
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                ml: 0,
                                justifyContent: 'center',
                                ...listItemAdditionalStyles(theme),
                            })}
                        >
                            {icon && icon}
                        </ListItemIcon>
                        <ListItemText
                            ref={ref}
                            primary={text}
                            sx={{ opacity: open ? 1 : 0, marginLeft: icon ? undefined : 3 }}
                        />
                        {children && (
                            <div style={{ opacity: open ? 1 : 0 }}>
                                {expanded ? <ExpandLess /> : <ExpandMore />}
                            </div>
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
