import { ERROR_COLOR, INFO_COLOR, SUCCESS_COLOR, WARNING_COLOR } from '../colors/utilityColors';

import { PaletteOptions } from '@mui/material';
import background from '../colors/background';
import brandedSecondaryBlue from '../colors/brandedSecondaryBlue';
import paper from '../colors/paper';
import text from '../colors/text';

const cordaLightPaletteBlue: PaletteOptions = {
    mode: 'light',
    background: { default: background.light, paper: paper.light },
    primary: {
        main: brandedSecondaryBlue[900],
    },
    secondary: {
        main: brandedSecondaryBlue[300],
    },
    text: { primary: text.dark },
    error: { main: ERROR_COLOR },
    info: { main: INFO_COLOR },
    success: { main: SUCCESS_COLOR },
    warning: { main: WARNING_COLOR },
};

export default cordaLightPaletteBlue;
