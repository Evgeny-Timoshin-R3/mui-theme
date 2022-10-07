import ApplicationBar from '../../components/AppShell/ApplicationBar/ApplicationBar';
import LogoR3Dark from '../../svgs/LogoR3Dark';
import LogoR3Light from '../../svgs/LogoR3Light';
import { useTheme } from '@mui/material';

export default function StandardApplicationBar() {
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
        </ApplicationBar>
    );
}
