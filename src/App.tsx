import './App.css';

import Alerts from './components/Alerts';
import AppShell from './components/AppShell/AppShell';
import BasicButtonGroup from './components/ButtonGroup';
import ButtonSizes from './components/ButtonsSizes';
import Checkboxes from './components/Checkboxes';
import Chips from './components/Chips';
import DateTimePickers from './components/DateTimePickers';
import Dropdown from './components/Dropdown';
import FileUploader from './components/FileUploader';
import IconButtons from './components/IconButtons';
import Inputs from './components/Inputs';
import Notifications from './components/Notifications';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SimpleBottomNavigation from './components/BottomNavigation';
import { Stack } from '@mui/material';
import TypographyExamples from './components/Typography';

function App() {
    return (
        <div className="App">
            <AppShell>
                <div>
                    <Stack direction="column" spacing={8} marginBottom={32}>
                        <TypographyExamples />
                        <ButtonSizes />
                        <IconButtons />
                        <BasicButtonGroup />
                        <Inputs />
                        <Alerts />
                        <Chips />
                        <Checkboxes />
                        <DateTimePickers />
                        <FileUploader />
                        <Dropdown />
                        <Notifications />
                        <SignIn />
                        <SignUp />
                        <SimpleBottomNavigation />
                    </Stack>
                </div>
            </AppShell>
        </div>
    );
}

export default App;
