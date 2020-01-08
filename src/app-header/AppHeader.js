import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';

import './AppHeader.css';
import {LanguageConsumer} from '../providers/LanguageProvider';
import AppNav from '../components/AppNav';
import LaguageSelect from './LanguageSelect';

class AppHeader extends Component {
  render(){
    return(
      <LanguageConsumer>
        {(context) => (
          <header className="App-header">
            <Container maxWidth="md">
              <Link to="/home" className="Logo" >
                <span>EKOSONIC&nbsp;-</span>
                <span>WEST</span>
              </Link>
              <nav>
                <AppNav
                  links={context.header.navigation}
                  routes={context.routes} />
                <div className="Header-right">
                  <img src={context.header.img} alt="" />
                  <LaguageSelect languages={context.languages} />
                </div>
              </nav>
            </Container>
          </header>
        )}
      </LanguageConsumer>
    )
  }
}

export default AppHeader;
