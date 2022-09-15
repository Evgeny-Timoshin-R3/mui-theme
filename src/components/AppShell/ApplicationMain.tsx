import React from 'react';
import { styled } from '@mui/material';

const Main = styled('main')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

const ApplicationMain: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <Main>{children}</Main>;
};

export default ApplicationMain;
