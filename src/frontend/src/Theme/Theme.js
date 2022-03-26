import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#20232A',
          light: "#282C34",
          dark: "#E3170A",

        },
        secondary: {
          main: "#A1D700"
        },
        background: {
          paper: '#ffffff',
          default: 'e6e3e3',
        },
      },
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      overrides: {
        MuiTypography: {
          button: {
            fontWeight: 100,
          }
        }
      }
})

export default theme;

