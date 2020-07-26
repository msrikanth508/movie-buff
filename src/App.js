import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { amber, lightBlue } from '@material-ui/core/colors';

import './data';
import Layout from './Layout';

export default function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: amber[500],
      },
      secondary: {
        main: lightBlue[500],
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </React.Fragment>
  );
}
