import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cpclimg from '../../assets/cpcl-60-years.png';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
      style={{
        zIndex: 1200,
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        padding: '0.5rem 1rem',
        flexWrap: 'wrap',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'auto',
      }}
    >
      {/* Logo */}
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img
          src={cpclimg}
          alt="CPCL Logo"
          className="img-fluid"
          style={{ height: '60px', maxWidth: '60%' }}
        />
      </a>

      {/* Title */}
      <h5
        style={{
          margin: 0,
          fontWeight: 'bold',
          color: '#2c3e50',
          textAlign: 'center',
          flex: 1,
          fontSize: '1rem',
        }}
        className="text-center w-100 d-lg-block d-none"
      >
        Retail Outlet Dealer Selection for CPCL
      </h5>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate('/signin')}
          sx={{
            fontWeight: 'bold',
            borderRadius: '20px',
            textTransform: 'none',
          }}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/signup')}
          sx={{
            fontWeight: 'bold',
            borderRadius: '20px',
            textTransform: 'none',
          }}
        >
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
