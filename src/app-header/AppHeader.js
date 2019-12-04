import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './AppHeader.css';
import {LanguageConsumer} from '../providers/LanguageProvider';
import AppNav from '../components/app-nav/AppNav';
import LaguageSelect from '../components/LanguageSelect';

class AppHeader extends Component {
  render(){
    return(
      <LanguageConsumer>
        {(context) => (
          <header className="App-header">
            <Link to="/" className="Logo" >
              <span>ECOSONIC&nbsp;-</span>
              <span>WEST</span>
            </Link>
            <div className="Header-title">
              <div className="Header-center">
                <span>{context.header.title1}</span>
                <span>{context.header.title2}</span>
                <hr />
              </div>
              <div className="Header-right">
                <img src={context.header.img} alt="" />
                <LaguageSelect languages={context.languages} />
              </div>
            </div>
            <AppNav
              links={context.header.navigation}
              routes={context.routes}
              className="Header-right" />
          </header>
        )}
      </LanguageConsumer>
    )
  }
}

export default AppHeader;
