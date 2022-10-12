import * as AppRoutes from '../constants/routes';

import { Box, styled, useTheme } from '@mui/material';

import AppBar from '../../components/AppShell/AppBar/AppBar';
import AppBarIconWrapper from '../../components/AppShell/AppBar/AppBarIconWrapper';
import AppBarSubLabelImage from '../../components/AppShell/AppBar/AppBarSubLabelImage';
import AppBarSubTitle from '../../components/AppShell/AppBar/AppBarSubTitle';
import AppBarTitle from '../../components/AppShell/AppBar/AppBarTitle';
import { Link } from 'react-router-dom';
import LogoR3Dark from '../../svgs/LogoR3Dark';
import LogoR3Light from '../../svgs/LogoR3Light';

const StyledLink = styled(Link)(({ theme }) => ({
    marginRight: theme.spacing(2),
    fontSize: 14,
    fontWeight: 300,
    opacity: 0.8,
    marginTop: 4,
    color: theme.palette.getContrastText(theme.palette.background.paper),
    textDecoration: 'none',
    '&:hover': {
        color: theme.palette.secondary.main,
    },
}));

export default function ApplicationBarWithReactRouter() {
    const theme = useTheme();
    return (
        <AppBar>
            <AppBarIconWrapper>
                {theme.palette.mode === 'dark' ? <LogoR3Light /> : <LogoR3Dark />}
            </AppBarIconWrapper>
            <AppBarTitle>Theming App</AppBarTitle>
            <AppBarSubTitle>Powered By</AppBarSubTitle>
            <AppBarSubLabelImage
                src={theme.palette.mode === 'light' ? './cordaBlack.png' : './cordaRed.png'}
            />

            <Box sx={{ flexGrow: 1 }} />

            <StyledLink to={AppRoutes.EXAMPLES}>Examples</StyledLink>
            <StyledLink to={AppRoutes.HOME}>Home</StyledLink>
            <StyledLink to={AppRoutes.INBOX}>Inbox</StyledLink>
            <StyledLink to={AppRoutes.BALANCE}>Balance</StyledLink>
            <StyledLink to={AppRoutes.DEPOSITS}>Deposits</StyledLink>

            <Box sx={{ mr: 3 }} />
        </AppBar>
    );
}
