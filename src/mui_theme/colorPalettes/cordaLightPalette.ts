import { ERROR_COLOR, INFO_COLOR, SUCCESS_COLOR, WARNING_COLOR } from '../colors/utilityColors';

import { PaletteOptions } from '@mui/material';
import background from '../colors/background';
import brandedBlue from '../colors/brandedBlue';
import brandedPurple from '../colors/brandedPurple';
import paper from '../colors/paper';

const cordaLightPalette: PaletteOptions = {
    mode: 'light',
    background: { default: background.light, paper: paper.light },
    primary: {
        main: brandedBlue[900],
    },
    secondary: {
        main: brandedPurple[400],
    },
    error: { main: ERROR_COLOR },
    info: { main: INFO_COLOR },
    success: { main: SUCCESS_COLOR },
    warning: { main: WARNING_COLOR },
};

export default cordaLightPalette;
