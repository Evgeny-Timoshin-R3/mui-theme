import { IconButton, useTheme } from '@mui/material';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useCustomThemeContext } from '../../../contexts';

export default function AppBarThemeSwitcher() {
    const { setThemeMode } = useCustomThemeContext();
    const theme = useTheme();
    return (
        <IconButton
            onClick={() => {
                setThemeMode(theme.palette.mode === 'light' ? 'dark' : 'light');
            }}
            color="secondary"
        >
            {theme.palette.mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
        </IconButton>
    );
}
