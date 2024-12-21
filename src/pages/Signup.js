import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Signup = () => {
  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 5,
        p: 3,
        boxShadow: 3,
        backgroundColor: 'background.paper',
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" color="primary" gutterBottom>
        Signup
      </Typography>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        variant="outlined"
        color="primary"
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        variant="outlined"
        color="primary"
      />
      <TextField
        label="Password"
        fullWidth
        margin="normal"
        variant="outlined"
        type="password"
        color="primary"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2, py: 1.5 }}
      >
        Signup
      </Button>
    </Box>
  );
};

export default Signup;
