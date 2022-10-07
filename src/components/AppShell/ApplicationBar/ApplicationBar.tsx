import { AppBar, Box, Toolbar, useTheme } from '@mui/material';

import IconWrapper from './IconWrapper';
import NavigationLink from './NavigationLink';
import { ReactNode } from 'react';
import SubLabel from './SubLabel';
import SubLabelImage from './SubLabelImage';
import Title from './Label';

interface Props {
    children?: ReactNode;
}

function ApplicationBar({ children }: Props) {
    const theme = useTheme();
    return (
        <Box>
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey.A200
                            : theme.palette.background.default,
                    color: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[800]
                            : theme.palette.grey[100],
                }}
            >
                <Toolbar>{children}</Toolbar>
            </AppBar>
        </Box>
    );
}

ApplicationBar.Title = Title;
ApplicationBar.IconWrapper = IconWrapper;
ApplicationBar.SubLabel = SubLabel;
ApplicationBar.SubLabelImage = SubLabelImage;
ApplicationBar.NavigationLink = NavigationLink;

export default ApplicationBar;
