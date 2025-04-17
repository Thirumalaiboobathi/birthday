import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cpclimg from '../../assets/cpcl-60-years.png';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const Navbar = ({ isDrawerOpen, setIsDrawerOpen }) => {
  

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
      style={{ zIndex: 1200, position: 'fixed', width: '100%', height: '80px',top:0 ,left:0 }}
    >
      
   
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




export default Navbar;
