import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Login = () => {
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
        Login
      </Typography>
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
        Login
      </Button>
    </Box>
  );
};

export default Login;
