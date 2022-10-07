import { Box, AppBar as MUIAppBar, Toolbar } from '@mui/material';

import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

const AppBar = ({ children }: Props) => {
    return (
        <MUIAppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey.A200
                        : theme.palette.background.default,
                color: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[800]
                        : theme.palette.grey[100],
            }}
        >
            <Toolbar>{children}</Toolbar>
        </MUIAppBar>
    );
};

export default AppBar;
