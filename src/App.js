import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import Container from '@material-ui/core/Container';

import {LanguageProvider} from './providers/LanguageProvider';
import AppHeader from './app-header/AppHeader';
import AppMain from './app-main/AppMain';
import AppFooter from './app-footer/AppFooter';

const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        boxSizing: 'content-box',
        marginTop: '0.2rem',
        [breakpoints.down('md')]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: '1.3rem',
        [breakpoints.down('sm')]: {
          fontSize: '1.1rem',
        },
        [breakpoints.only('xs')]: {
          fontSize: '0.6rem',
        },
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
          <ThemeProvider theme={theme}>
            <AppHeader />
            <Container maxWidth="md">
              <AppMain />
            </Container>
            <AppFooter />
          </ThemeProvider>
        </LanguageProvider>
      </React.Fragment>
    );
  }
}

export default App;
