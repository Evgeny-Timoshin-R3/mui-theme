import AppBarIconWrapper from '../../components/AppShell/ApplicationBar/AppBarIconWrapper';
import AppBarSubLabelImage from '../../components/AppShell/ApplicationBar/AppBarSubLabelImage';
import AppBarSubTitle from '../../components/AppShell/ApplicationBar/AppBarSubTitle';
import AppBarTitle from '../../components/AppShell/ApplicationBar/AppBarTitle';
import ApplicationBar from '../../components/AppShell/ApplicationBar/AppBar';
import LogoR3Dark from '../../svgs/LogoR3Dark';
import LogoR3Light from '../../svgs/LogoR3Light';
import { useTheme } from '@mui/material';

export default function StandardApplicationBar() {
    const theme = useTheme();
    return (
        <ApplicationBar>
            <AppBarIconWrapper>
                {theme.palette.mode === 'dark' ? <LogoR3Light /> : <LogoR3Dark />}
            </AppBarIconWrapper>
            <AppBarTitle>Theming App</AppBarTitle>
            <AppBarSubTitle>Powered By</AppBarSubTitle>
            <AppBarSubLabelImage
                src={theme.palette.mode === 'light' ? './cordaBlack.png' : './cordaRed.png'}
            />
        </ApplicationBar>
    );
}
