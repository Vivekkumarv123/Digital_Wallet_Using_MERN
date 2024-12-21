import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 5,
        py: 2,
        backgroundColor: 'background.paper',
        boxShadow: 1,
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Paytm Clone. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
