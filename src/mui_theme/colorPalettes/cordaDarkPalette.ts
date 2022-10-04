import { ERROR_COLOR, INFO_COLOR, SUCCESS_COLOR, WARNING_COLOR } from '../colors/utilityColors';

import { PaletteOptions } from '@mui/material';
import background from '../colors/background';
import brandedSecondaryBlue from '../colors/brandedSecondaryBlue';
import { grey } from '@mui/material/colors';
import paper from '../colors/paper';

const cordaDarkPalette: PaletteOptions = {
    mode: 'dark',
    background: { default: background.dark, paper: paper.dark },
    primary: {
        main: brandedSecondaryBlue[300],
    },
    secondary: {
        main: grey[50],
    },
    error: { main: ERROR_COLOR },
    info: { main: INFO_COLOR },
    success: { main: SUCCESS_COLOR },
    warning: { main: WARNING_COLOR },
};

export default cordaDarkPalette;
