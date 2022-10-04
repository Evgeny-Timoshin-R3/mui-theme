import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeModeContextProvider from './contexts/ThemeModeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeModeContextProvider>
            <App />
        </ThemeModeContextProvider>
    </React.StrictMode>
);
