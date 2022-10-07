import { PaletteOptions, createTheme } from '@mui/material';

import MuiTheme from './theme';
import ThemeGradients from './themeGradients';

const activeTheme = MuiTheme;
//const activeTheme = ThemeGradients;

export default function createThemeVariant(palette: PaletteOptions) {
    const theme = createTheme({
        ...activeTheme,
        palette: palette,
    });
    return theme;
}
