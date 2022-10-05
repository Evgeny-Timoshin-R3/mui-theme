import { Button, styled } from '@mui/material';
import { SnackbarProvider, useSnackbar } from 'notistack';

const StyledSnackbarProvider = styled(SnackbarProvider)(({ theme }) => ({
    '&.SnackbarItem-variantSuccess': {
        backgroundColor: theme.palette.success.main,
    },
    '&.SnackbarItem-variantInfo': {
        backgroundColor: theme.palette.info.main,
    },
    '&.SnackbarItem-variantWarning': {
        backgroundColor: theme.palette.warning.main,
    },
    '&.SnackbarItem-variantError': {
        backgroundColor: theme.palette.error.main,
    },
}));

export default function Notifications() {
    return (
        <StyledSnackbarProvider maxSnack={3}>
            <NotificationButtons />
        </StyledSnackbarProvider>
    );
}

function NotificationButtons() {
    const { enqueueSnackbar } = useSnackbar();
    return (
        <>
            <div></div>
            <Button
                variant="contained"
                color="success"
                onClick={() => {
                    enqueueSnackbar('Success notification!!! woooo', { variant: 'success' });
                }}
            >
                Success Notif
            </Button>
            <Button
                variant="contained"
                color="info"
                onClick={() => {
                    enqueueSnackbar('Info notification!!! woooo', { variant: 'info' });
                }}
            >
                Info Notif
            </Button>
            <Button
                variant="contained"
                color="warning"
                onClick={() => {
                    enqueueSnackbar('Warning notification!!! woooo', { variant: 'warning' });
                }}
            >
                Warning Notif
            </Button>
            <Button
                variant="contained"
                color="error"
                onClick={() => {
                    enqueueSnackbar('Error notification!!! woooo', { variant: 'error' });
                }}
            >
                Error Notif
            </Button>
        </>
    );
}
