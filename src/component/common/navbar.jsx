import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cpclimg from '../../assets/cpcl-60-years.png';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const Navbar = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
      style={{ zIndex: 1200, position: 'fixed', width: '60%' }}
    >
      <button className="btn" onClick={toggleDrawer} style={{ fontSize: '1.5rem' }}>
        &#9776;
      </button>
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center ms-4" href="#">
          <img
            src={cpclimg}
            alt="CPCL Logo"
            className="img-fluid"
            style={{ height: '60px', maxWidth: '60%' }}
          />
        </a>
      </div>
    </nav>
  );
};

export const CustomDrawer = ({ isDrawerOpen }) => {
  const drawerWidth = 240;

  if (!isDrawerOpen) return null;

  return (
    <Box
      sx={{
        width: drawerWidth,
        backgroundColor: 'black',
        color: 'white',
        position: 'absolute',
        top: 114, // height of navbar
        bottom: 0,
        left: 0,
        zIndex: 1100,
      }}
    >
      <List>
        {['Dashboard', 'Available Ads', 'Applied Ads', 'Profile', 'Change Password'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Navbar;
