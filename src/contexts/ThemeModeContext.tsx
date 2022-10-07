import { PaletteMode, Theme } from '@mui/material';
import React, { useMemo } from 'react';
import { darkPalette, lightPalette } from '../mui_theme/activePalettes';

import createCtx from './createCtx';
import createThemeVariant from '../mui_theme/createThemeVariant';
import useLocalStorage from '../hooks/useLocalStorage';

interface ThemeModeContextValue {
    setThemeMode: (mode: PaletteMode) => void;

    mode: PaletteMode;
    theme: Theme;
}

export const [useThemeModeContext, Provider] = createCtx<ThemeModeContextValue>();

interface ThemeModeContextProps {
    children?: React.ReactNode;
}

const ThemeModeContextProvider: React.FC<ThemeModeContextProps> = ({ children }) => {
    const [mode, setThemeMode] = useLocalStorage<PaletteMode>('theme_color_mode', 'dark');

    const theme = useMemo(() => {
        return createThemeVariant(mode === 'light' ? lightPalette : darkPalette);
    }, [mode]);

    return <Provider value={{ mode, setThemeMode, theme }}>{children}</Provider>;
};

export default ThemeModeContextProvider;
