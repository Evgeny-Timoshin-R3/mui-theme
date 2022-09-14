import type {} from '@mui/x-date-pickers/themeAugmentation';

import { blue, green, orange, red } from '@mui/material/colors';

import { createTheme } from '@mui/material';

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

const WARNING_COLOR = orange[500];
const ERROR_COLOR = red[500];
const SUCCESS_COLOR = green[500];
const INFO_COLOR = blue[500];

export const theme = createTheme({
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
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 28,
                    padding: '12px 24px 12px 24px',
                    gap: 8,
                    fontWeight: 600,
                    letterSpacing: 0.8,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 28,
                    '& $notchedOutline': {
                        borderColor: 'pink',
                    },
                    '& fieldset': { borderWidth: 2 },
                    '&$focused $notchedOutline': {
                        borderColor: 'red',
                    },
                    '& legend': { paddingRight: 4, width: 'fit-content' },
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
        MuiInputBase: { styleOverrides: { root: { paddingLeft: 12 } } },
        MuiInputLabel: {
            styleOverrides: { root: { paddingLeft: 8 } },
        },
    },

    //Overall borderRadius override
    shape: { borderRadius: 12 },

    //Application colors
    //If the "main" color is defined, the light and dark variants of the color will be automatically generated
    //e.g if the primary main is blue, light and dark blue will be generated.
    palette: {
        primary: {
            main: '#1d2343',
        },
        secondary: {
            main: '#5e39e9',
        },
        // background: {},
        error: { main: ERROR_COLOR },
        info: { main: INFO_COLOR },
        success: { main: SUCCESS_COLOR },
        warning: { main: WARNING_COLOR },
    },
    status: {
        danger: orange[500],
    },
});
