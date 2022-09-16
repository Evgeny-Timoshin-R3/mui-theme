import { SnackbarProvider, useSnackbar } from 'notistack';

import { Button } from '@mui/material';

export default function Notifications() {
    return (
        <SnackbarProvider maxSnack={3}>
            <NotificationButtons />
        </SnackbarProvider>
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
