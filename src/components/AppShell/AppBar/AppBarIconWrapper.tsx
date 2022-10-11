import { SvgIcon, styled } from '@mui/material';

const AppBarIconWrapper = styled(SvgIcon)(({ theme }) => ({
    marginRight: theme.spacing(2),
    width: 28,
    height: 28,
}));

export default AppBarIconWrapper;
