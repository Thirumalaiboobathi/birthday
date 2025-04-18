import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid
} from '@mui/material';
import backgroundImage from '../../assets/cpclimg10.avif';
import Navbar from '../../component/common/navbarlogin'; 

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    city: '',
    state: '',
    mobileNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar />

      <Box
        sx={{
          width: '100vw',
          minHeight: '100vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '120px',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: { xs: 3, sm: 5 },
            borderRadius: '16px',
            width: { xs: '90%', sm: '600px', md: '650px' },
            boxShadow: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={3}>
            Create Account
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="username"
                  label="Username"
                  variant="outlined"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="city"
                  label="City"
                  variant="outlined"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="state"
                  label="State"
                  variant="outlined"
                  value={formData.state}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="mobileNumber"
                  label="Mobile Number"
                  variant="outlined"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 4, borderRadius: '8px' }}
            >
              Create
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
