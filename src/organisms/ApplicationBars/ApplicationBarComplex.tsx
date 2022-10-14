import { Box, IconButton, useTheme } from '@mui/material';

import AppBar from '../../lib/components/AppShell/AppBar/AppBar';
import AppBarIconWrapper from '../../lib/components/AppShell/AppBar/AppBarIconWrapper';
import AppBarNavigationLink from '../../lib/components/AppShell/AppBar/AppBarNavigationLink';
import AppBarSubLabelImage from '../../lib/components/AppShell/AppBar/AppBarSubLabelImage';
import AppBarSubTitle from '../../lib/components/AppShell/AppBar/AppBarSubTitle';
import AppBarTitle from '../../lib/components/AppShell/AppBar/AppBarTitle';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import LogoR3Dark from '../../lib/svgs/LogoR3Dark';
import LogoR3Light from '../../lib/svgs/LogoR3Light';
import { useCustomThemeContext } from '../../lib/contexts/ThemeModeContext';

export default function ApplicationBarComplex() {
    const { setThemeMode } = useCustomThemeContext();
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
        </AppBar>
    );
}
