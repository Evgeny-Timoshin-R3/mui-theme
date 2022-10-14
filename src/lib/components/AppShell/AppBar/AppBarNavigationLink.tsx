import { styled } from '@mui/material';

const AppBarNavigationLink = styled('a')(({ theme }) => ({
    marginRight: theme.spacing(2),
    fontSize: 14,
    fontWeight: 300,
    opacity: 0.8,
    marginTop: 4,
    color: theme.palette.getContrastText(theme.palette.background.paper),
}));

export default AppBarNavigationLink;
