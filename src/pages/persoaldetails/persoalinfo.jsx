// pages/PersonalInfo.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

export default function PersonalInfo() {
  const navigate = useNavigate();

  const handleNext = () => {
    // Save to context or state
    navigate("/business-info");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>Personal Information</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Full Name" required />
        <TextField label="Email" type="email" required />
        <TextField label="Phone Number" type="tel" required />
        <TextField label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} required />
        <TextField label="Aadhaar Number" required />
        <Box mt={2}>
          <Button variant="contained" onClick={handleNext}>Next</Button>
        </Box>
      </Box>
    </Container>
  );
}