import { styled } from '@mui/material';

const AppMain = styled('main')(({ theme }) => ({
    marginTop: theme.spacing(10),
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

export default AppMain;
