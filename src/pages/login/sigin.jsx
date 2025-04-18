import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../../assets/cpclimg10.avif';
import Navbar from '../../component/common/navbarlogin';
import Swal from 'sweetalert2';


const SignIn = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [resendEnabled, setResendEnabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setTimeout(() => setTimer(timer - 1), 1000);
    } else if (timer === 0 && isOtpSent) {
      setResendEnabled(true);
    }
    return () => clearTimeout(countdown);
  }, [timer, isOtpSent]);

  const handleSendOtp = () => {
    // Add your OTP send API logic here
    console.log("OTP sent to:", mobileNumber);
    setIsOtpSent(true);
    setTimer(60);
    setResendEnabled(false);
  };

  const handleResendOtp = () => {
    handleSendOtp();
  };

  const handleLogin = () => {
    console.log("Logging in with OTP:", otp);
    // Add login validation logic here
  };

  const formatTimer = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: 'relative',
        bottom:-20,
        right: 0,
        left: -20,
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Navbar />

      <Box
        sx={{
          height: '100%',
          width: '100%',
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { xs: '70px 10px', sm: '80px 30px', md: '90px 60px' },
          boxSizing: 'border-box',
        }}
      >
        {/* Quote */}
        <Box
          sx={{
            maxWidth: '600px',
            padding: '30px',
            borderRadius: '10px',
            color: '#fff',
            marginLeft: '20px',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Typography variant="h2" fontWeight="bold" sx={{ color: '#003366' }}>
            Expanding Horizon
            <Box component="span" sx={{ color: 'red' }}>.</Box><br />
            Enabling Growth
            <Box component="span" sx={{ color: 'red' }}>.</Box>
          </Typography>
        </Box>

        {/* Sign In Form */}
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: { xs: '20px', sm: '30px', md: '40px' },
            borderRadius: '10px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            width: '90%',
            maxWidth: '400px',
            boxSizing: 'border-box',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Sign In
          </Typography>

          {/* Mobile + Verify */}
          <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            value={mobileNumber}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) { // Allow only digits
                if (value.length > 10) {
                  Swal.fire({
                    icon: 'warning',
                    title: 'Invalid Number',
                    text: 'Mobile number cannot exceed 10 digits.',
                  });
                  return; 
                }
                setMobileNumber(value);
              }
            }}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />

            <Button
              variant="contained"
              onClick={handleSendOtp}
              disabled={mobileNumber.length < 10}
            >
              Verify
            </Button>
          </Box>

          {/* OTP Field */}
          {isOtpSent && (
            <>
              <TextField
                label="Enter OTP"
                variant="outlined"
                fullWidth
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                sx={{ marginBottom: 2 }}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              />

              {timer > 0 ? (
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  OTP expires in: <strong>{formatTimer(timer)}</strong>
                </Typography>
              ) : (
                <Button
                  variant="text"
                  onClick={handleResendOtp}
                  disabled={!resendEnabled}
                  sx={{ marginBottom: 2 }}
                >
                  Resend OTP
                </Button>
              )}
            </>
          )}

          {/* Login Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{ padding: '10px', fontWeight: 'bold' }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default SignIn;
