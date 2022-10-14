import AppBar from '../../lib/components/AppShell/AppBar/AppBar';
import AppBarIconWrapper from '../../lib/components/AppShell/AppBar/AppBarIconWrapper';
import AppBarSubLabelImage from '../../lib/components/AppShell/AppBar/AppBarSubLabelImage';
import AppBarSubTitle from '../../lib/components/AppShell/AppBar/AppBarSubTitle';
import AppBarTitle from '../../lib/components/AppShell/AppBar/AppBarTitle';
import LogoR3Dark from '../../lib/svgs/LogoR3Dark';
import LogoR3Light from '../../lib/svgs/LogoR3Light';
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
