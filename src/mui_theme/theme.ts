import type {} from '@mui/x-date-pickers/themeAugmentation';

import { ERROR_COLOR, INFO_COLOR, SUCCESS_COLOR, WARNING_COLOR } from './colors/utilityColors';

import cordaLightPalette from './colorPalettes/cordaLightPalette';
import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const theme = createTheme({
    //these are default breakpoint, "overriding" them to expose and show example of how they can be modified
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: ['Poppins'].join(','),
    },
    //overriding some components to match theme of our GUI toolkit
    components: {
        MuiAlert: {
            styleOverrides: {
                root: {
                    border: '0px solid',
                    borderLeftWidth: 12,
                    textAlign: 'left',
                    '&.MuiAlert-standardWarning': {
                        borderColor: WARNING_COLOR,
                    },
                    '&.MuiAlert-standardError': {
                        borderColor: ERROR_COLOR,
                    },
                    '&.MuiAlert-standardSuccess': {
                        borderColor: SUCCESS_COLOR,
                    },
                    '&.MuiAlert-standardInfo': {
                        borderColor: INFO_COLOR,
                    },
                },
            },
        },
        MuiButtonBase: {
            defaultProps: { disableRipple: true },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 28,
                    borderWidth: 2,
                    padding: '12px 24px 12px 24px',
                    gap: 8,
                    fontWeight: 600,
                    letterSpacing: 0.8,
                    '&.Mui-disabled': {
                        opacity: 0.8,
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    borderRadius: 28,
                    '& $notchedOutline': {
                        borderColor: 'pink',
                    },
                    '& fieldset': { borderWidth: 2 },
                    '&$focused $notchedOutline': {
                        borderColor: 'red',
                    },
                    '& legend>span': { paddingRight: 4, width: 'fit-content', marginRight: 4 },
                    '& .Mui-disabled': {
                        opacity: 0.4 + '!important',
                        '&:hover': {
                            cursor: 'not-allowed',
                        },
                    },
                },
                notchedOutline: {
                    root: { borderColor: 'white', '& legend': { padding: 2 + '!important' } },
                },
            },
        },
        MuiDatePicker: {
            styleOverrides: {
                root: { '& input': { color: 'red' } },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    paddingLeft: 12,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: { root: { paddingLeft: 8 } },
        },
    },

    //Overall borderRadius override
    shape: { borderRadius: 12 },
    palette: cordaLightPalette,
    status: {
        danger: orange[500],
    },
});

export default theme;
