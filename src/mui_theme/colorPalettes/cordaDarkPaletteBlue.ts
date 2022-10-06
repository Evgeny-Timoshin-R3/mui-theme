import { ERROR_COLOR, INFO_COLOR, SUCCESS_COLOR, WARNING_COLOR } from '../colors/utilityColors';

import { PaletteOptions } from '@mui/material';
import background from '../colors/background';
import brandedSecondaryBlue from '../colors/brandedSecondaryBlue';
import brandedSecondaryRed from '../colors/brandedSecondaryRed';
import paper from '../colors/paper';
import text from '../colors/text';

const cordaDarkPaletteBlue: PaletteOptions = {
    mode: 'dark',
    background: { default: background.dark, paper: paper.dark },
    primary: {
        main: brandedSecondaryBlue[700],
    },
    secondary: {
        main: brandedSecondaryBlue[300],
    },
    text: { primary: text.light },
    error: { main: ERROR_COLOR },
    info: { main: INFO_COLOR },
    success: { main: SUCCESS_COLOR },
    warning: { main: WARNING_COLOR },
};

export default cordaDarkPaletteBlue;
