import { styled } from '@mui/material';

const AppMain = styled('main')(({ theme }) => ({
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

export default AppMain;
