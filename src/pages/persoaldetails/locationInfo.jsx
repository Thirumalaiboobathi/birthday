import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

export default function LocationDetails() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>Location Details</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="State" required />
        <TextField label="District" required />
        <TextField label="Village/Town" required />
        <TextField label="Survey Number" required />
        <Box mt={2}>
          <Button variant="contained" onClick={() => navigate("/document-upload")}>Next</Button>
        </Box>
      </Box>
    </Container>
  );
}s