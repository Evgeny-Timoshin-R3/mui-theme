import { Alert, AlertTitle } from '@mui/material';

export default function Alerts() {
    return (
        <>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
            </Alert>
            <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                This is a warning alert — <strong>check it out!</strong>
            </Alert>
            <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                This is an info alert — <strong>check it out!</strong>
            </Alert>
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
            </Alert>
        </>
    );
}
