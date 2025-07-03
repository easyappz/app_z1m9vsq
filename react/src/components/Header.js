import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = ['Home', 'Collection', 'About', 'Contact'];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((text) => (
          <ListItem key={text} disablePadding sx={{ padding: '10px 20px' }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" color="transparent" elevation={0} sx={{ backgroundColor: '#F5F5DC', borderBottom: '1px solid #C19A6B' }}>
      <Toolbar sx={{ justifyContent: 'space-between', padding: { xs: '0 10px', md: '0 40px' } }}>
        <Typography variant="h1" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, color: '#333333' }}>
          LIANE
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {menuItems.map((item) => (
            <Button key={item} color="inherit" sx={{ color: '#333333', fontSize: '1rem' }}>
              {item}
            </Button>
          ))}
        </Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', md: 'none' }, color: '#333333' }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
