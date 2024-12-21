import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Divider, List, ListItem, ListItemText } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import HistoryIcon from '@mui/icons-material/History';

const Wallet = () => {
  // Sample transaction data
  const transactions = [
    { id: 1, description: 'Money added', amount: '+₹500', date: 'Dec 20, 2024', type: 'credit' },
    { id: 2, description: 'Payment to Flipkart', amount: '-₹1500', date: 'Dec 18, 2024', type: 'debit' },
    { id: 3, description: 'Money received', amount: '+₹1000', date: 'Dec 15, 2024', type: 'credit' },
  ];

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Wallet Header */}
      <Card
        sx={{
          backgroundColor: '#1976d2',
          color: 'white',
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          marginBottom: 3,
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <AccountBalanceWalletIcon fontSize="large" />
          </Grid>
          <Grid item>
            <Typography variant="h5">My Wallet</Typography>
            <Typography variant="body2">Manage your wallet balance and transactions</Typography>
          </Grid>
        </Grid>
      </Card>

      {/* Wallet Balance */}
      <Card sx={{ marginBottom: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Wallet Balance
          </Typography>
          <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
            ₹12,500
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<AddIcon />}
                sx={{ textTransform: 'none' }}
              >
                Add Money
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                color="error"
                fullWidth
                startIcon={<RemoveIcon />}
                sx={{ textTransform: 'none' }}
              >
                Withdraw Money
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Transactions
          </Typography>
          <List>
            {transactions.map((transaction) => (
              <ListItem
                key={transaction.id}
                sx={{
                  padding: 2,
                  backgroundColor: transaction.type === 'credit' ? '#e3f2fd' : '#ffebee',
                  marginBottom: 1,
                  borderRadius: 1,
                }}
              >
                <ListItemText
                  primary={transaction.description}
                  secondary={transaction.date}
                  primaryTypographyProps={{ fontWeight: 'bold' }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: transaction.type === 'credit' ? '#388e3c' : '#d32f2f',
                    fontWeight: 'bold',
                  }}
                >
                  {transaction.amount}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Button
            variant="text"
            color="primary"
            startIcon={<HistoryIcon />}
            sx={{ marginTop: 2, textTransform: 'none' }}
          >
            View All Transactions
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Wallet;
