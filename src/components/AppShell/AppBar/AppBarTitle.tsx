import { Typography, styled } from '@mui/material';

const AppBarTitle = styled(Typography)(({ theme }) => ({
    marginRight: theme.spacing(1),
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: '.05rem',
    color: 'inherit',
    textDecoration: 'none',
}));

export default AppBarTitle;
