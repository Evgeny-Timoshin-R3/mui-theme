import AppBar from '../../components/AppShell/AppBar/AppBar';
import AppBarIconWrapper from '../../components/AppShell/AppBar/AppBarIconWrapper';
import AppBarSubLabelImage from '../../components/AppShell/AppBar/AppBarSubLabelImage';
import AppBarSubTitle from '../../components/AppShell/AppBar/AppBarSubTitle';
import AppBarTitle from '../../components/AppShell/AppBar/AppBarTitle';
import LogoR3Dark from '../../svgs/LogoR3Dark';
import LogoR3Light from '../../svgs/LogoR3Light';
import { useTheme } from '@mui/material';

export default function StandardApplicationBar() {
    const theme = useTheme();
    return (
        <AppBar>
            <AppBarIconWrapper>
                {theme.palette.mode === 'dark' ? <LogoR3Light /> : <LogoR3Dark />}
            </AppBarIconWrapper>
            <AppBarTitle>Theming App</AppBarTitle>
            <AppBarSubTitle>Powered By</AppBarSubTitle>
            <AppBarSubLabelImage
                src={theme.palette.mode === 'light' ? './cordaBlack.png' : './cordaRed.png'}
            />
        </AppBar>
    );
}
