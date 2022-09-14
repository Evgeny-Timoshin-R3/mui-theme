import './App.css';

import Alerts from './components/Alerts';
import ButtonSizes from './components/ButtonsSizes';
import Checkboxes from './components/Checkboxes';
import Chips from './components/Chips';
import DateTimePickers from './components/DateTimePickers';
import Dropdown from './components/Dropdown';
import FileUploader from './components/FileUploader';
import IconButtons from './components/IconButtons';
import Inputs from './components/Inputs';
import { Stack } from '@mui/material';
import TypographyExamples from './components/Typography';

function App() {
    return (
        <div className="App">
            <Stack direction="column" spacing={8} marginBottom={32}>
                <TypographyExamples />
                <ButtonSizes />
                <IconButtons />
                <Inputs />
                <Alerts />
                <Chips />
                <Checkboxes />
                <DateTimePickers />
                <FileUploader />
                <Dropdown />
            </Stack>
        </div>
    );
}

export default App;
