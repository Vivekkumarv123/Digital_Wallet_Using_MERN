import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
} from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [receiver, setReceiver] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handlePayment = () => {
    if (amount && receiver) {
      setShowSnackbar(true);
      setAmount('');
      setReceiver('');
    }
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Payment Header */}
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
          <PaymentIcon fontSize="large" sx={{ marginRight: 1 }} />
          Make a Payment
        </Typography>
        <Typography variant="body2">Secure and fast payments</Typography>
      </Card>

      {/* Payment Form */}
      <Card sx={{ boxShadow: 3, padding: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Payment Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Receiver's Mobile or UPI ID"
                variant="outlined"
                fullWidth
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Amount (₹)"
                variant="outlined"
                fullWidth
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handlePayment}
                disabled={!amount || !receiver}
                sx={{ textTransform: 'none', padding: 1.5 }}
              >
                Pay Now
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Snackbar Notification */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Payment of ₹{amount} to {receiver} was successful!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Payment;
