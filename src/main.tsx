import './index.css';

import { darkPalette, lightPalette } from './mui_theme/activePalettes';

import App from './App';
import { CssBaseline } from '@mui/material';
import CustomThemeProvider from './contexts/ThemeModeContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './mui_theme/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CustomThemeProvider
            baseTheme={theme}
            lightPalette={lightPalette}
            darkPalette={darkPalette}
            defaultTheme={'light'}
        >
            <CssBaseline />
            <App />
        </CustomThemeProvider>
    </React.StrictMode>
);
