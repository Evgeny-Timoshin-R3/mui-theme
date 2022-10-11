import './App.css';

import { CssBaseline, Stack } from '@mui/material';

import Alerts from './components/Examples/Alerts';
import ExampleShell from './organisms/AppShell/ExampleShell';
import ExampleShellWithReactRouter from './organisms/AppShell/ExampleShellWithReactRouter';
import { ThemeProvider } from '@mui/material/styles';
import { useThemeModeContext } from './contexts/ThemeModeContext';

function App() {
    const { theme } = useThemeModeContext();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <ExampleShell /> */}
            <ExampleShellWithReactRouter />
        </ThemeProvider>
    );
}

export default App;
