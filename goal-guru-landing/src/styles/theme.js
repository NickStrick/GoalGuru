// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700', // Gold
      contrastText: '#000',
    },
    secondary: {
      main: '#3CB371', // Minty Dark Green
      contrastText: '#fff', // White or very light text for contrast
    },
    // Update info/success if you were using it.  Here are some lighter options:
    info: {
        main: '#3CB371', // Light Blue
        contrastText: '#fff',
      },
    success: {
        main: '#90EE90', // Light Green
        contrastText: '#000',
    },
    background: {
      default: '#f0f0f0',
      paper: '#fff',
    },
  },
});

export default theme;