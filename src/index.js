import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

import App from './App';

const theme = createTheme({
  palette: {
    primary: grey,
    secondary: red,
  },
  typography: {
    fontFamily: 'Lato'
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
