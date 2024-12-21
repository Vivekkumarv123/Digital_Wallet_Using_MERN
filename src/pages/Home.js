import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Paytm Clone
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your digital wallet for fast and secure transactions.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/payment"
        sx={{ marginTop: 3, textTransform: 'none' }}
      >
        Make a Payment
      </Button>
    </Box>
  );
};

export default Home;
