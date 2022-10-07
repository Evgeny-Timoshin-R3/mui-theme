import { SvgIcon, styled } from '@mui/material';

const AppBarIconWrapper = styled(SvgIcon)(({ theme }) => ({
    marginRight: theme.spacing(2),
    width: 32,
    height: 32,
}));

export default AppBarIconWrapper;
