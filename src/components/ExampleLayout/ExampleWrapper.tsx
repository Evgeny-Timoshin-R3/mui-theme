import { Paper, Typography } from '@mui/material';

import Container from '@mui/material/Container';
import React from 'react';

export default function ExampleWrapper({
    title,
    children,
}: {
    title?: string;
    children?: React.ReactNode;
}) {
    return (
        <>
            {title && <Typography variant="h4">{title}</Typography>}
            <Paper elevation={5} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Container
                    sx={{ p: 3, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 4 }}
                >
                    {children}
                </Container>
            </Paper>
        </>
    );
}
