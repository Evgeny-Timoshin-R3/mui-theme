import type {} from '@mui/x-date-pickers/themeAugmentation';

import { ERROR_COLOR, INFO_COLOR, SUCCESS_COLOR, WARNING_COLOR } from './colors/utilityColors';
import { grey, orange } from '@mui/material/colors';

import cordaLightPalette from './colorPalettes/cordaLightPalette';
import { createTheme } from '@mui/material';
import setOpacity from './utils/addAlpha';

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
        MuiAppBar: {
            defaultProps: { position: 'fixed' },
            styleOverrides: {
                root: ({ theme }) => ({
                    borderBottomRightRadius: theme.shape.borderRadius,
                    boxShadow:
                        theme.palette.mode === 'light'
                            ? '0px 0px 12px 3px rgba(0,0,0,0.40)'
                            : '0px 0px 12px 3px rgba(0,0,0,0.20)',
                    left: 0,
                    maxWidth: 1920,
                    zIndex: theme.zIndex.drawer + 1,
                    backgroundColor:
                        theme.palette.mode === 'light'
                            ? theme.palette.grey.A200
                            : theme.palette.background.default,
                    color:
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[800]
                            : theme.palette.grey[100],
                }),
            },
        },
        MuiButtonBase: {
            defaultProps: { disableRipple: false },
            styleOverrides: {
                root: ({ theme }) => ({
                    transition:
                        'color ease-in-out 250ms, background-color ease-in-out 250ms !important',
                }),
            },
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
        MuiListItemButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '&:hover': { backgroundColor: setOpacity(theme.palette.primary.light, 0.3) },
                }),
            },
        },
        MuiDatePicker: {
            styleOverrides: {
                root: { '& input': { color: 'red' } },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '& .MuiDrawer-paper': {
                        borderBottomRightRadius: theme.shape.borderRadius,
                        borderColor: theme.palette.mode === 'light' ? undefined : 'rgba(0,0,0,0.2)',
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? '0px 0px 12px 3px rgba(0,0,0,0.40)'
                                : '0px 0px 12px 3px rgba(0,0,0,0.20)',
                        backgroundColor:
                            theme.palette.mode === 'light'
                                ? theme.palette.primary.main
                                : theme.palette.background.default,
                        color: grey[50],
                    },
                }),
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
    },

    shape: { borderRadius: 16 },
    palette: cordaLightPalette,
    status: {
        danger: orange[500],
    },
});

export default theme;
