import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#5285F2',
    },
    secondary: {
      main: '#333333',
    },
    info: {
      main: "#8A8A8A"
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;


