import { Box, useTheme } from '@mui/material';

import ApplicationBar from '../../components/AppShell/ApplicationBar/ApplicationBar';
import LogoR3Dark from '../../svgs/LogoR3Dark';
import LogoR3Light from '../../svgs/LogoR3Light';

export default function ApplicationBarWithNavLinks() {
    const theme = useTheme();
    return (
        <ApplicationBar>
            <ApplicationBar.IconWrapper>
                {theme.palette.mode === 'dark' ? <LogoR3Light /> : <LogoR3Dark />}
            </ApplicationBar.IconWrapper>
            <ApplicationBar.Title>Theming App</ApplicationBar.Title>
            <ApplicationBar.SubLabel>Powered By</ApplicationBar.SubLabel>
            <ApplicationBar.SubLabelImage
                src={theme.palette.mode === 'light' ? './cordaBlack.png' : './cordaRed.png'}
            />
            <Box sx={{ flexGrow: 1 }} />

            <ApplicationBar.NavigationLink href={'/'}>Home</ApplicationBar.NavigationLink>
            <ApplicationBar.NavigationLink href={'/about'}>About</ApplicationBar.NavigationLink>
            <ApplicationBar.NavigationLink href={'/contact'}>Contact</ApplicationBar.NavigationLink>
        </ApplicationBar>
    );
}
