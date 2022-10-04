import { PaletteOptions, createTheme } from '@mui/material';

import MuiTheme from './theme';

export default function createThemeVariant(palette: PaletteOptions) {
    const theme = createTheme({
        ...MuiTheme,
        palette: palette,
    });
    return theme;
}
