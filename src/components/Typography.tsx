import { Typography, styled } from '@mui/material';

const Header = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: 68,
}));

export default function TypographyExamples() {
    return (
        <div>
            <Header>Header text</Header>
            <Typography variant="h1">norm typography h1. Heading</Typography>
            <Typography variant="h2">norm typography h2. Heading</Typography>
            <Typography variant="h3">norm typography h3. Heading</Typography>
        </div>
    );
}
