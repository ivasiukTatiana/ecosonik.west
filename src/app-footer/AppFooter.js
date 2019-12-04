import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

import './AppFooter.css';
import {LanguageConsumer} from '../providers/LanguageProvider';

class AppFooter extends Component {
  render(){
    return(
      <LanguageConsumer>
        {(context) => (
          <footer className="App-footer">
            <Grid container justify="space-between">
              <Grid container item xs={4} direction="column" alignItems="flex-start" className="Footer-left">
                <span>&copy; {context.footer.copyright[0]}</span>
                <span>{context.footer.copyright[1]}</span>
                <br />
                {context.footer.address.map((item, index) => {
                  return (
                    <span key={index}>{item}</span>
                  )
                })}
              </Grid>
              <Grid container item xs={5} direction="column" alignItems="flex-start" justify="space-around" className="Footer-nav">
                {context.header.navigation.map((item, index) => {
                  return (
                    <Link key={index} to={`/${context.routes[index]}`} className="Link">{item}</Link>
                  )
                })}
              </Grid>
              <Grid container item xs={3} direction="column" alignItems="flex-start" justify="space-between" className="Footer-right">
                <Grid container alignItems="center">
                  <Icon className="fas fa-envelope" />
                  <strong>ekosonicwest@ukr.net</strong>
                </Grid>
                <Grid container alignItems="center">
                  <Icon className="fas fa-phone-alt" />
                  <strong>+38 099 336 21 63</strong>
                </Grid>
                <br />
                <Grid container direction="column" alignItems="flex-start">
                  <Grid container item alignItems="center">
                    <span>Developer: Tatiana Mysiuk</span>
                    <a href="https://www.linkedin.com/in/tatiana-mysiuk/" target="_blank" rel="noopener noreferrer"><Icon className="fab fa-linkedin" /></a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </footer>
        )}
      </LanguageConsumer>
    )
  }
}

export default AppFooter;
