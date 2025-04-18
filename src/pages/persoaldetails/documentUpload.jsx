import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";

export default function DocumentUpload() {
  const navigate = useNavigate();
  const [fileError, setFileError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
      setFileError("File size must be under 2MB.");
    } else {
      setFileError("");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>Document Upload</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} />
        {fileError && <Typography color="error">{fileError}</Typography>}
        <Button variant="contained" onClick={() => navigate("/declaration")}>Next</Button>
      </Box>
    </Container>
  );
}