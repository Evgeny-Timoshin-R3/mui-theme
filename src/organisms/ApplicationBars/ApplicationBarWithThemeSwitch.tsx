import { Box, IconButton } from '@mui/material';

import AppBarIconWrapper from '../../components/AppShell/ApplicationBar/AppBarIconWrapper';
import AppBarSubLabelImage from '../../components/AppShell/ApplicationBar/AppBarSubLabelImage';
import AppBarSubTitle from '../../components/AppShell/ApplicationBar/AppBarSubTitle';
import AppBarTitle from '../../components/AppShell/ApplicationBar/AppBarTitle';
import ApplicationBar from '../../components/AppShell/ApplicationBar/AppBar';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import LogoR3Dark from '../../svgs/LogoR3Dark';
import LogoR3Light from '../../svgs/LogoR3Light';
import { useThemeModeContext } from '../../contexts/ThemeModeContext';

export default function ApplicationBarWithThemeSwitch() {
    const { mode, setThemeMode } = useThemeModeContext();

    return (
        <ApplicationBar>
            <AppBarIconWrapper>
                {mode === 'dark' ? <LogoR3Light /> : <LogoR3Dark />}
            </AppBarIconWrapper>
            <AppBarTitle>Theming App</AppBarTitle>
            <AppBarSubTitle>Powered By</AppBarSubTitle>
            <AppBarSubLabelImage src={mode === 'light' ? './cordaBlack.png' : './cordaRed.png'} />

            <Box sx={{ flexGrow: 1 }} />

            <IconButton
                onClick={() => {
                    setThemeMode(mode === 'light' ? 'dark' : 'light');
                }}
                color="secondary"
            >
                {mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
        </ApplicationBar>
    );
}
