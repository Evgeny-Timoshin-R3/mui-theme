import { ERROR_COLOR, INFO_COLOR, SUCCESS_COLOR, WARNING_COLOR } from '../colors/utilityColors';

import { PaletteOptions } from '@mui/material';
import brandedBlue from '../colors/brandedBlue';
import brandedPurple from '../colors/brandedPurple';
import { grey } from '@mui/material/colors';
import paper from '../colors/paper';
import text from '../colors/text';

const cordaDarkPalette: PaletteOptions = {
    mode: 'dark',
    background: { default: brandedBlue[900], paper: brandedBlue[900] },
    primary: {
        main: grey[50],
    },
    secondary: {
        main: brandedPurple[300],
        light: brandedPurple[200],
    },
    text: { primary: text.light },
    error: { main: ERROR_COLOR },
    info: { main: INFO_COLOR },
    success: { main: SUCCESS_COLOR },
    warning: { main: WARNING_COLOR },
};

export default cordaDarkPalette;
