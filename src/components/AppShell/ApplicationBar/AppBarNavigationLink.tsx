import { styled } from '@mui/material';

const AppBarNavigationLink = styled('a')(({ theme }) => ({
    marginRight: theme.spacing(2),
    // color: theme.palette.grey[300],
    color: theme.palette.secondary.main,
}));

export default AppBarNavigationLink;
