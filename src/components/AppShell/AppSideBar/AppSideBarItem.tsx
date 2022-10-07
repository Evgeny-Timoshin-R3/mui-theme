import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ReactNode, useRef, useState } from 'react';

import AppSideBarTooltip from './AppSideBarTooltip';
import { useSideBarContext } from '../../../contexts/SideBarContext';

interface Props {
    text: string;
    onClick: () => void;
    color?: string;
    icon?: ReactNode;
    children?: ReactNode;
}

export default function AppSideBarItem({ text, onClick, icon, children, color }: Props) {
    const { open } = useSideBarContext();
    const [expanded, setExpanded] = useState(false);

    const ref = useRef(null);

    const handleClick = () => {
        onClick();
        if (!open || typeof children === 'undefined') return;
        setExpanded((prev) => !prev);
    };

    return (
        <>
            <AppSideBarTooltip title={open ? '' : text}>
                <ListItem key={'something'} disablePadding sx={{ display: 'block', pl: 0.5 }}>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
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
