import { CSSObject, Theme, styled } from '@mui/material/styles';

import MuiDrawer from '@mui/material/Drawer';
import { grey } from '@mui/material/colors';

const openedMixin = (theme: Theme): CSSObject => ({
    width: 240,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const themeColors = (theme: Theme): CSSObject => ({
    backgroundColor:
        theme.palette.mode === 'light'
            ? theme.palette.primary.main
            : theme.palette.background.default,
    color: grey[50],
    '& .MuiSvgIcon-root': {
        color: grey[50],
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': { ...openedMixin(theme), ...themeColors(theme) },
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': { ...closedMixin(theme), ...themeColors(theme) },
        }),
    })
);

export default Drawer;
