import { Box, IconButton } from '@mui/material';

import ApplicationBar from '../../components/AppShell/ApplicationBar/ApplicationBar';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import LogoR3Dark from '../../svgs/LogoR3Dark';
import LogoR3Light from '../../svgs/LogoR3Light';
import { useThemeModeContext } from '../../contexts/ThemeModeContext';

export default function ApplicationBarWithThemeSwitch() {
    const { mode, setThemeMode } = useThemeModeContext();

    return (
        <ApplicationBar>
            <ApplicationBar.IconWrapper>
                {mode === 'dark' ? <LogoR3Light /> : <LogoR3Dark />}
            </ApplicationBar.IconWrapper>
            <ApplicationBar.Title>Theming App</ApplicationBar.Title>
            <ApplicationBar.SubLabel>Powered By</ApplicationBar.SubLabel>
            <ApplicationBar.SubLabelImage
                src={mode === 'light' ? './cordaBlack.png' : './cordaRed.png'}
            />

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                    onClick={() => {
                        setThemeMode(mode === 'light' ? 'dark' : 'light');
                    }}
                    sx={{ marginLeft: 3 }}
                >
                    {mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
                </IconButton>
            </Box>
        </ApplicationBar>
    );
}
