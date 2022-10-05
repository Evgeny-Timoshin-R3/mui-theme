import { Skeleton, Stack, Typography } from '@mui/material';

export default function SkeletonExample() {
    return (
        <>
            <Stack gap={2}>
                <Typography>Pulse </Typography>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={300} height={200} />
                <Skeleton variant="rectangular" sx={{ borderRadius: 1 }} width={210} height={60} />
            </Stack>
            <Stack gap={2}>
                <Typography>Wave </Typography>
                <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} />

                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton animation="wave" variant="circular" width={40} height={40} />
                <Skeleton animation="wave" variant="rectangular" width={300} height={200} />
                <Skeleton
                    animation="wave"
                    variant="rectangular"
                    sx={{ borderRadius: 1 }}
                    width={210}
                    height={60}
                />
            </Stack>
        </>
    );
}
