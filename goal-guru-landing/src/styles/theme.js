// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d7eae5', // Gold
      contrastText: '#311518',
      borderRadius: '30px'
    },
    secondary: {
      main: '#b87dbb', // Minty Dark Green
      contrastText: '#fff', // White or very light text for contrast
    },
    // Update info/success if you were using it.  Here are some lighter options:
    info: {
        main: '#b87dbb', // Light Blue
        contrastText: '#fff',
      },
    success: {
        main: '#90EE90', // Light Green
        contrastText: '#fff',
    },
    background: {
      default: '#f0f0f0',
      paper: '#fff',
    },
  },
});

export default theme;