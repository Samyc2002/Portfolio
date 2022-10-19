import * as React from 'react';
import { NextRouter, useRouter } from 'next/router';
import { GoGitBranch } from "react-icons/go";
import { Menu as MenuIcon, DarkModeOutlined as DarkModeOutlinedIcon, LightModeOutlined as LightModeOutlinedIcon, DownloadOutlined as DownloadOutlinedIcon } from '@mui/icons-material';
import { Box, AppBar, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, useScrollTrigger } from '@mui/material';

interface Props {
    window?: () => Window;
    children?: React.ReactElement;
}

const ElevationScroll = (props: Props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children as React.ReactElement<any, string | React.JSXElementConstructor<any>>, {
      elevation: trigger ? 4 : 0,
    });
}


const pages = ['Home', 'About', 'Projects', 'Profile', 'Blogs'];

const Navbar = (props: Props) => {
    const router = useRouter();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    
  const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const navigateToPage = (page: string) => {
        if(page === 'Home') {
            router.push(`/`);
        } else {
            router.push(`/${page}`);
        }
        handleCloseNavMenu();
    }

  return (
    <ElevationScroll {...props}>
        <AppBar
            position="sticky"
            sx={{
                backdropFilter:"blur(20px)",
                backgroundColor: "#12004478",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon color="disabled" />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => navigateToPage(page)}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <React.Fragment key={page}>
                                {router.pathname === '/' ? (
                                    <Button
                                        onClick={() => navigateToPage(page)}
                                        sx={{ my: 2, color: page==='Home'?'#ffffff':'#ffffff80', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ):(
                                    <Button
                                        onClick={() => navigateToPage(page)}
                                        sx={{ my: 2, color: page===router.pathname.split('/')[1]?'#ffffff':'#ffffff80', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                )}
                            </React.Fragment>
                        ))}
                    </Box>
                    <Box>
                        <IconButton
                            size="large"
                            onClick={() => router.push('https://github.com/Samyc2002/Portfolio')}
                            color="inherit"
                        >
                            <GoGitBranch />
                        </IconButton>
                        <IconButton
                            size="large"
                            onClick={() => router.push('/Samy\'s Resume.pdf')}
                            color="inherit"
                        >
                            <DownloadOutlinedIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </ElevationScroll>
  );
};
export default Navbar;
