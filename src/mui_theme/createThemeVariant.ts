import { PaletteOptions, Theme, createTheme } from '@mui/material';

export default function createThemeVariant(theme: Theme, palette: PaletteOptions) {
    return createTheme({
        ...theme,
        palette: palette,
    });
}
