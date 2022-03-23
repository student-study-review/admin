import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#0077FF',
            
          },
          secondary: {
            main: '#f50057',
          },
          info: {
            main: "#FEFEFF"
          },
          success: {
            main: '#16BC13',
          },
          background: {
            default: '#F0F7FF',
            paper: '#fff',
          },
          text: {
            primary: "#8A8A8A",
            secondary: "#333333",
            disabled: "#7D7D7D" 
          }
        }
      : {
          // palette values for dark mode

          // background: {
          //   default: '#121212',
          //   paper: 'red',
          // },

          // primary: {
          //   main: "#ccc"
          // }

          // primary: {
          //   main:
          // },
          // divider: amber[200],
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
        }),
  },
});

// A custom theme for this app



const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5285F2',
    },
    secondary: {
      main: '#333333',
    },
    info: {
      main: '#8A8A8A',
    },
    success: {
      main: '#16BC13',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
