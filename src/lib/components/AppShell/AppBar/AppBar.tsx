import { Box, AppBar as MUIAppBar, Toolbar } from '@mui/material';

import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

const AppBar = ({ children }: Props) => {
    return (
        <MUIAppBar>
            <Toolbar>{children}</Toolbar>
        </MUIAppBar>
    );
};

export default AppBar;
