import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography, } from "@mui/material";
import React, { useState, MouseEvent } from "react";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuIcon from '@mui/icons-material/Menu';
import GTranslateIcon from '@mui/icons-material/GTranslate';

const Navbar = () => {
    const pages = ['Home', 'Content', 'Discussion Forum', 'Category', 'Content Providers', 'Career Expert', 'Contact Us', 'About Us', 'Sign in']
    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

    function openMenu(event: MouseEvent<HTMLElement>) {
        setAnchorNav(event.currentTarget);
    }

    const closeMenu = () => {
        setAnchorNav(null);
    };
    return(
        <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'none', md: 'flex' } }}>
                <LocalLibraryIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>Nav Bar</Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {/* <Button color='inherit'>Home</Button>
<Button color='inherit'>Features</Button>
<Button color='inherit'>About</Button>
<Button color='inherit'>Login</Button> */}
                {pages.map((page) => (
                    <Button color='inherit'>{page}</Button>
                ))}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton size='large' edge='start' color='inherit' onClick={openMenu} >
                    <MenuIcon />
                </IconButton>
                <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{ display: { xs: 'flex', md: 'none' } }}>
                    {/* <MenuList>
    <MenuItem>Home</MenuItem>
    <MenuItem>Features</MenuItem>
    <MenuItem>About </MenuItem>
    <MenuItem>Login</MenuItem>
  </MenuList> */}
                    {pages.map((page) => (
                        <MenuItem>{page}</MenuItem>
                    ))}
                </Menu>
            </Box>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'flex', md: 'none' } }}>
                <LocalLibraryIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>Nav Bar</Typography>
            <IconButton size='large' edge='start' color='inherit'>
                <GTranslateIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
    );
};

export default Navbar;