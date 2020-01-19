import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import Container from '@material-ui/core/Container';

import './App.css';
import {LanguageProvider} from './providers/LanguageProvider';
import AppHeader from './app-header/AppHeader';
import AppMain from './app-main/AppMain';
import AppFooter from './app-footer/AppFooter';

const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        //boxSizing: 'content-box',
        [breakpoints.down('961')]: {
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
    MuiPaper: {
      root: {
        color: '#000038',
        backgroundColor: 'rgba(230, 230, 230, 0.7)',
      },
    },
    MuiTypography: {
      body1: {
        fontFamily: '"Roboto Condensed", sans-serif',
      },
      body2: {
        fontFamily: '"Roboto Condensed", sans-serif',
      },
    },
    MuiButton: {
      root: {
        //textTransform: 'none',
        color: '#000038',
      },
      text: {
        //paddingTop: 0,
        [breakpoints.down('sm')]: {
          fontSize: '0.75rem',
        },
        [breakpoints.down('xs')]: {
          fontSize: '0.68rem',
        },
      },
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
            <Container maxWidth="lg" className="Main-container">
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
