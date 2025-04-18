import React from "react";
import { Box, Button, Checkbox, Container, FormControlLabel, Typography } from "@mui/material";

export default function Declaration() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>Declaration</Typography>
      <FormControlLabel
        control={<Checkbox required />}
        label="I hereby declare that the information provided is true and correct."
      />
      <Box mt={2}>
        <Button variant="contained" color="success">Submit Application</Button>
      </Box>
    </Container>
  );
}