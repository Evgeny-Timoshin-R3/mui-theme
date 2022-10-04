import {
    AppBar,
    Badge,
    Box,
    IconButton,
    Menu,
    MenuItem,
    SvgIcon,
    Toolbar,
    Typography,
} from '@mui/material';

import { AccountCircle } from '@mui/icons-material';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import LogoR3Dark from '../../../svgs/LogoR3Dark';
import LogoR3Light from '../../../svgs/LogoR3Light';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import { useThemeModeContext } from '../../../contexts/ThemeModeContext';

const ApplicationBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);

    const { mode, setThemeMode } = useThemeModeContext();

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

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
                <Toolbar>
                    <SvgIcon
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: 36, height: 36 }}
                    >
                        {mode === 'dark' ? <LogoR3Light /> : <LogoR3Dark />}
                    </SvgIcon>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            ml: 3,
                            fontWeight: 600,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Theming Demo App
                    </Typography>
                    <Typography
                        noWrap
                        sx={{
                            ml: 2,
                            mt: 0.5,
                            display: { xs: 'none', md: 'flex' },
                            fontSize: 14,
                            fontWeight: 500,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Powered By
                    </Typography>
                    <img
                        src="./cordaRed.png"
                        height={30}
                        style={{ marginLeft: 3, marginBottom: 2 }}
                    />

                    {/* <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search> */}
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>

                        <IconButton
                            onClick={() => {
                                setThemeMode(mode === 'light' ? 'dark' : 'light');
                            }}
                            sx={{ marginLeft: 3 }}
                        >
                            {mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
};

export default ApplicationBar;
