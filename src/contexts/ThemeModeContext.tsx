import { PaletteMode, PaletteOptions, Theme, ThemeProvider } from '@mui/material';
import React, { useMemo } from 'react';

import createCtx from './createCtx';
import createThemeVariant from '../mui_theme/createThemeVariant';
import useLocalStorage from '../hooks/useLocalStorage';

interface ThemeModeContextValue {
    setThemeMode: (mode: PaletteMode) => void;
    mode: PaletteMode;
    theme: Theme;
}

const [useCustomThemeContext, Provider] = createCtx<ThemeModeContextValue>();

export { useCustomThemeContext };

interface ThemeModeContextProps {
    baseTheme: Theme;
    lightPalette: PaletteOptions;
    darkPalette: PaletteOptions;
    defaultTheme?: PaletteMode;
    children?: React.ReactNode;
}

const CustomThemeProvider: React.FC<ThemeModeContextProps> = ({
    baseTheme,
    lightPalette,
    darkPalette,
    defaultTheme = 'light',
    children,
}) => {
    const [mode, setThemeMode] = useLocalStorage<PaletteMode>('theme_color_mode', defaultTheme);

    const theme = useMemo(() => {
        return createThemeVariant(baseTheme, mode === 'light' ? lightPalette : darkPalette);
    }, [mode]);

    return (
        <Provider value={{ mode, setThemeMode, theme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
    );
};

export default CustomThemeProvider;
