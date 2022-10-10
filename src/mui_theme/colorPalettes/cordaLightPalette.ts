import { ERROR_COLOR, INFO_COLOR, SUCCESS_COLOR, WARNING_COLOR } from '../colors/utilityColors';

import { PaletteOptions } from '@mui/material';
import background from '../colors/background';
import brandedBlue from '../colors/brandedBlue';
import brandedPurple from '../colors/brandedPurple';
import paper from '../colors/paper';
import text from '../colors/text';

const cordaLightPalette: PaletteOptions = {
    mode: 'light',
    background: { default: background.light, paper: paper.light },
    primary: {
        main: brandedBlue[900],
    },
    secondary: {
        main: brandedPurple[300],
        light: brandedPurple[200],
    },
    text: { primary: text.dark },
    error: { main: ERROR_COLOR },
    info: { main: INFO_COLOR },
    success: { main: SUCCESS_COLOR },
    warning: { main: WARNING_COLOR },
};

export default cordaLightPalette;
