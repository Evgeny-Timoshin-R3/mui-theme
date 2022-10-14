import './index.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import CustomThemeProvider, { useCustomThemeContext } from './lib/contexts/ThemeModeContext';
import { darkPalette, lightPalette } from './mui_theme/activePalettes';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './mui_theme/theme';

function AppWrapper() {
    const { theme } = useCustomThemeContext();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CustomThemeProvider
            baseTheme={theme}
            lightPalette={lightPalette}
            darkPalette={darkPalette}
            defaultTheme={'light'}
        >
            <AppWrapper />
        </CustomThemeProvider>
    </React.StrictMode>
);
