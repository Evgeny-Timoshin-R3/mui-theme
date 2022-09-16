import './App.css';

import Alerts from './components/Alerts';
import AppShell from './components/AppShell/AppShell';
import BasicButtonGroup from './components/ButtonGroup';
import ButtonSizes from './components/ButtonsSizes';
import Checkboxes from './components/Checkboxes';
import Chips from './components/Chips';
import DateTimePickers from './components/DateTimePickers';
import Dropdown from './components/Dropdown';
import ExampleWrapper from './components/ExampleLayout/ExampleWrapper';
import FileUploader from './components/FileUploader';
import IconButtons from './components/IconButtons';
import Inputs from './components/Inputs';
import Notifications from './components/Notifications';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SimpleBottomNavigation from './components/BottomNavigation';
import { Stack } from '@mui/material';
import TypographyExamples from './components/Typography';

const examples = [
    ['Typography Examples', <TypographyExamples />],
    ['Button Sizes', <ButtonSizes />],
    ['Icon Buttons', <IconButtons />],
    ['Button groups', <BasicButtonGroup />],
    ['Inputs', <Inputs />],
    ['Alerts', <Alerts />],
    ['Chips', <Chips />],
    ['Checkboxes', <Checkboxes />],
    ['Date Time Pickers', <DateTimePickers />],
    ['File Uploaded', <FileUploader />],
    ['Dropdown', <Dropdown />],
    ['Notifications', <Notifications />],
    ['Sign In', <SignIn />],
    ['Sign Up', <SignUp />],
    ['Bottom Nav', <SimpleBottomNavigation />],
];

function App() {
    return (
        <div className="App">
            <AppShell>
                <Stack direction="column" spacing={8} marginBottom={32} marginTop={12}>
                    {examples.map((example) => (
                        <ExampleWrapper title={example[0] as string}>{example[1]}</ExampleWrapper>
                    ))}
                </Stack>
            </AppShell>
        </div>
    );
}

export default App;
