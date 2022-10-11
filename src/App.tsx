import './App.css';

import { CssBaseline, Stack } from '@mui/material';

import Alerts from './components/Alerts';
import AppShell from './organisms/AppShell/AppShell';
import AppShellWithReactRouter from './organisms/AppShell/AppShellWithReactRouter';
import { ThemeProvider } from '@mui/material/styles';
import { useThemeModeContext } from './contexts/ThemeModeContext';

function App() {
    const { theme } = useThemeModeContext();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <AppShell /> */}
            <AppShellWithReactRouter />
        </ThemeProvider>
    );
}

export default App;
