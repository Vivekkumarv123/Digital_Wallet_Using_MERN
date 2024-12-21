import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HistoryIcon from '@mui/icons-material/History';
import SendIcon from '@mui/icons-material/Send';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Welcome to Your Dashboard
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Manage your wallet, transactions, and payments seamlessly.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Wallet Balance Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccountBalanceWalletIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h6" color="primary">
                  Wallet Balance
                </Typography>
              </Box>
              <Typography variant="h5" color="textSecondary">
                ₹ 12,345.67
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Transactions Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HistoryIcon color="secondary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h6" color="secondary">
                  Recent Transactions
                </Typography>
              </Box>
              <Typography variant="body1" color="textSecondary">
                • ₹500 - Paid to ABC Store <br />
                • ₹200 - Recharge <br />
                • ₹1500 - Credit Added
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Payment Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SendIcon color="success" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h6" color="success">
                  Quick Payment
                </Typography>
              </Box>
              <Button variant="contained" color="primary" fullWidth>
                Make a Payment
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Analytics and Features Section */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {/* Analytics Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" color="primary" gutterBottom>
                Analytics
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Monitor your spending patterns, savings, and more.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Features Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" color="primary" gutterBottom>
                Features
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Explore features like bill payments, mobile recharges, and rewards.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
