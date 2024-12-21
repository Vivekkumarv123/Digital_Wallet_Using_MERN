import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HistoryIcon from '@mui/icons-material/History';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  // Menu items
  const menuItems = [
    { text: 'Dashboard', icon: <AccountBalanceWalletIcon />, path: '/dashboard' },
    { text: 'Transactions', icon: <HistoryIcon />, path: '/transactions' },
    { text: 'Payments', icon: <PaymentIcon />, path: '/payments' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Logout', icon: <LogoutIcon />, path: '/logout' },
  ];

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleSidebar}
      sx={{
        '& .MuiDrawer-paper': {
          width: 250,
          boxShadow: 3,
          backgroundColor: '#f4f6f8',
        },
      }}
    >
      {/* Sidebar Header */}
      <Box sx={{ padding: 2, backgroundColor: '#1976d2', color: 'white' }}>
        <Typography variant="h6">Paytm Clone</Typography>
        <Typography variant="body2">Your Digital Wallet</Typography>
      </Box>

      {/* Navigation Menu */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              navigate(item.path);
              toggleSidebar();
            }}
            sx={{
              '&:hover': { backgroundColor: '#e3f2fd' },
              padding: 2,
            }}
          >
            <ListItemIcon sx={{ color: '#1976d2' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
