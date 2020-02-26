import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Container from '@material-ui/core/Container';

import './AppMain.css';
import Home from '../components/Home';
import Products from '../components/Products';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';

class AppMain extends Component {
  render(){
    return(
      <Container maxWidth="lg" className="App-main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/projects" component={Projects} />
          <Route path="/contacts" component={Contacts} />
          <Route component={() => (<div>404 Not found</div>)} />
        </Switch>
      </Container>
    )
  }
}

export default AppMain;
