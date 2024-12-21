import React from 'react';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';

const Profile = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Card sx={{ padding: 3, boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
            <Avatar
              sx={{ width: 80, height: 80 }}
              src="https://via.placeholder.com/150" // Replace with profile image URL
              alt="Profile"
            />
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            John Doe
          </Typography>
          <Typography variant="body2" align="center" gutterBottom>
            johndoe@example.com
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary">
            Wallet Balance: ₹5000
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
