import { Box, IconButton } from '@mui/material';

import AppBar from '../../components/AppShell/AppBar/AppBar';
import AppBarIconWrapper from '../../components/AppShell/AppBar/AppBarIconWrapper';
import AppBarSubLabelImage from '../../components/AppShell/AppBar/AppBarSubLabelImage';
import AppBarSubTitle from '../../components/AppShell/AppBar/AppBarSubTitle';
import AppBarTitle from '../../components/AppShell/AppBar/AppBarTitle';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import LogoR3Dark from '../../svgs/LogoR3Dark';
import LogoR3Light from '../../svgs/LogoR3Light';
import { useCustomThemeContext } from '../../contexts/ThemeModeContext';

export default function ApplicationBarWithThemeSwitch() {
    const { mode, setThemeMode } = useCustomThemeContext();

    return (
        <AppBar>
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
        </AppBar>
    );
}
