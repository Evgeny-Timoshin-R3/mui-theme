import { Box, IconButton, useTheme } from '@mui/material';

import AppBarIconWrapper from '../../components/AppShell/ApplicationBar/AppBarIconWrapper';
import AppBarNavigationLink from '../../components/AppShell/ApplicationBar/AppBarNavigationLink';
import AppBarSubLabelImage from '../../components/AppShell/ApplicationBar/AppBarSubLabelImage';
import AppBarSubTitle from '../../components/AppShell/ApplicationBar/AppBarSubTitle';
import AppBarTitle from '../../components/AppShell/ApplicationBar/AppBarTitle';
import ApplicationBar from '../../components/AppShell/ApplicationBar/AppBar';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import LogoR3Dark from '../../svgs/LogoR3Dark';
import LogoR3Light from '../../svgs/LogoR3Light';
import { useThemeModeContext } from '../../contexts/ThemeModeContext';

export default function ApplicationBarComplex() {
    const { setThemeMode } = useThemeModeContext();
    const theme = useTheme();
    return (
        <ApplicationBar>
            <AppBarIconWrapper>
                {theme.palette.mode === 'dark' ? <LogoR3Light /> : <LogoR3Dark />}
            </AppBarIconWrapper>
            <AppBarTitle>Theming App</AppBarTitle>
            <AppBarSubTitle>Powered By</AppBarSubTitle>
            <AppBarSubLabelImage
                src={theme.palette.mode === 'light' ? './cordaBlack.png' : './cordaRed.png'}
            />

            <Box sx={{ flexGrow: 1 }} />

            <AppBarNavigationLink href={'/'}>Home</AppBarNavigationLink>
            <AppBarNavigationLink href={'/about'}>About</AppBarNavigationLink>
            <AppBarNavigationLink href={'/contact'}>Contact</AppBarNavigationLink>

            <Box sx={{ mr: 3 }} />

            <IconButton
                onClick={() => {
                    setThemeMode(theme.palette.mode === 'light' ? 'dark' : 'light');
                }}
                color="secondary"
            >
                {theme.palette.mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
        </ApplicationBar>
    );
}
