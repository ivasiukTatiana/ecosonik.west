import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './AppMain.css';
import Home from '../components/Home';
import Services from '../components/services/Services';
import Products from '../components/Products';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name
    MuiPaper: {
      // Name of the rule
      root: {
        color: '#000038',
        //backgroundColor: 'transparent',
        backgroundColor: 'rgba(230, 230, 230, 0.6)',
      },
    },
  },
});

class AppMain extends Component {
  render(){
    return(
      <div className="App-main">
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            <Route path="/projects" component={Projects} />
            <Route path="/contacts" component={Contacts} />
            <Route component={() => (<div>404 Not found 1</div>)} />
          </Switch>
        </ThemeProvider>
      </div>
    )
  }
}

export default AppMain;
