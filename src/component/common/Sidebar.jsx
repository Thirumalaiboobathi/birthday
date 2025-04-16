import React, { useState } from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

// Import icons
import HomeIcon from '@mui/icons-material/Home'; 
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import MenuIcon from '@mui/icons-material/Menu';  // Import menu icon

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', path: '/available', icon: <HomeIcon /> },
  { text: 'Available Advertisements', path: '/available', icon: <DashboardIcon /> },
  { text: 'Applied Advertisements', path: '/applied', icon: <AssignmentIcon /> },
  { text: 'Profile', path: '/profile', icon: <PersonIcon /> },
  { text: 'Change Password', path: '/change-password', icon: <LockIcon /> },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);  // State to control drawer

  const handleDrawerToggle = () => {
    setOpen(!open);  // Toggle drawer open/close
  };

  return (
    <>
      <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="menu"
        onClick={handleDrawerToggle}  // Handle opening/closing the drawer
        sx={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1202 }}  // Ensure it sits above the drawer but below the navbar
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          position: 'absolute',  // Ensure it's positioned below the navbar
          top: '60px',  // Adjust to start below the navbar (adjust as per navbar height)
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'black',
            color: 'white',
            zIndex: 1100,  // Ensure the drawer sits below the navbar
          },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    bgcolor: location.pathname === item.path ? 'blue' : 'black',
                    '&:hover': {
                      bgcolor: location.pathname === item.path ? 'blue' : '#333',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: 'white' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: 'white' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
