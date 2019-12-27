import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {LanguageProvider} from './providers/LanguageProvider';
import AppHeader from './app-header/AppHeader';
import AppMain from './app-main/AppMain';
import AppFooter from './app-footer/AppFooter';

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        boxSizing: 'content-box',
        marginTop: '0.2rem',
      }
    },
  },
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <LanguageProvider className="App">
          <AppHeader />
          <ThemeProvider theme={theme}>
            <Container maxWidth="md">
              <AppMain />
            </Container>
          </ThemeProvider>
          <AppFooter />
        </LanguageProvider>
      </React.Fragment>
    );
  }
}

export default App;
