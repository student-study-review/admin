import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#3e66fb',
    },
    secondary: {
      main: '#000',
    },
    info: {
      main: "#fff"
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
