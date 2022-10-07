import { Typography, styled } from '@mui/material';

const AppBarSubTitle = styled(Typography)(({ theme }) => ({
    marginRight: theme.spacing(0),
    marginTop: 3,
    fontSize: 14,
    fontWeight: 200,
    color: 'inherit',
    textDecoration: 'none',
}));

export default AppBarSubTitle;
