import { ERROR_COLOR, INFO_COLOR, SUCCESS_COLOR, WARNING_COLOR } from '../colors/utilityColors';

import { PaletteOptions } from '@mui/material';
import background from '../colors/background';
import brandedBlue from '../colors/brandedBlue';
import brandedSecondaryBlue from '../colors/brandedSecondaryBlue';
import { grey } from '@mui/material/colors';
import paper from '../colors/paper';
import text from '../colors/text';

const cordaDarkPalette: PaletteOptions = {
    mode: 'dark',
    background: { default: background.dark, paper: paper.dark },
    primary: {
        main: brandedBlue[400],
    },
    secondary: {
        main: grey[50],
    },
    text: { primary: text.light },
    error: { main: ERROR_COLOR },
    info: { main: INFO_COLOR },
    success: { main: SUCCESS_COLOR },
    warning: { main: WARNING_COLOR },
};

export default cordaDarkPalette;
