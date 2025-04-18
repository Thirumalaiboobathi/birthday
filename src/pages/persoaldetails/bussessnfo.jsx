// pages/BusinessInfo.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

export default function BusinessInfo() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>Business Information</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Business Name" required />
        <TextField label="GST Number" />
        <TextField label="PAN Number" required />
        <TextField label="Annual Turnover" type="number" required />
        <Box mt={2}>
          <Button variant="contained" onClick={() => navigate("/location-details")}>Next</Button>
        </Box>
      </Box>
    </Container>
  );
}