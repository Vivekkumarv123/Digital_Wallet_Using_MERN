import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

const Transactions = () => {
  // Sample transaction data
  const transactions = [
    { id: 1, description: 'Money added', amount: '+₹500', date: 'Dec 20, 2024', type: 'credit' },
    { id: 2, description: 'Payment to Flipkart', amount: '-₹1500', date: 'Dec 18, 2024', type: 'debit' },
    { id: 3, description: 'Electricity bill', amount: '-₹800', date: 'Dec 15, 2024', type: 'debit' },
    { id: 4, description: 'Money received', amount: '+₹1000', date: 'Dec 12, 2024', type: 'credit' },
  ];

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Transactions Header */}
      <Card
        sx={{
          marginBottom: 3,
          padding: 2,
          backgroundColor: '#1976d2',
          color: 'white',
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          <HistoryIcon fontSize="large" sx={{ marginRight: 1 }} />
          Transactions
        </Typography>
        <Typography variant="body2">Review your recent transactions</Typography>
      </Card>

      {/* Transaction List */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Transactions
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <List>
            {transactions.map((transaction) => (
              <ListItem
                key={transaction.id}
                sx={{
                  padding: 2,
                  backgroundColor: transaction.type === 'credit' ? '#e8f5e9' : '#ffebee',
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default Transactions;
