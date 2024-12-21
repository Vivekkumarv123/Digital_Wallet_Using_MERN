import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Paytm Blue
    },
    secondary: {
      main: '#ff5722', // Complementary Orange
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
    h1: { fontSize: '2rem', fontWeight: 600 },
    h2: { fontSize: '1.5rem', fontWeight: 500 },
    body1: { fontSize: '1rem' },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: Array(25).fill('0px 3px 5px rgba(0,0,0,0.2)'),
});

export default theme;
