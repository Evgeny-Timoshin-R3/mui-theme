import { Typography, styled } from '@mui/material';

const Title = styled(Typography)(({ theme }) => ({
    marginRight: 8,
    fontWeight: 600,
    letterSpacing: '.05rem',
    color: 'inherit',
    textDecoration: 'none',
}));

export default Title;
