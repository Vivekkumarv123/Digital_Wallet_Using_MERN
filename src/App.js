import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar'; // Navigation bar component
import Home from './pages/Home'; // Home page
import Transactions from './pages/Transactions'; // Transactions page
import Payment from './pages/Payment'; // Payment page
import Profile from './pages/Profile'; // User Profile page
import NotFound from './pages/NotFound'; // 404 Page

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Page Content */}
        <Box sx={{ flexGrow: 1, padding: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
