import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './AppFooter.css';
import {LanguageConsumer} from '../providers/LanguageProvider';
import AppNav from '../components/AppNav';

class AppFooter extends Component {
  render(){
    return(
      <LanguageConsumer>
        {(context) => (
          <footer className="App-footer">
            <Container maxWidth="md">
              <Grid container justify="space-between">
                <Grid container item xs={7} sm={5} md={4} direction="column" alignItems="flex-start" className="Footer-left">
                  <span>&copy; {context.footer.copyright[0]}</span>
                  <span>{context.footer.copyright[1]}</span>
                  <br />
                  {context.footer.address.map((item, index) => {
                    return (
                      <span key={index}>{item}</span>
                    )
                  })}
                </Grid>
                <Grid container item xs={5} sm={3} md={4} direction="column" alignItems="flex-start" justify="space-around" className="Footer-nav">
                    <AppNav
                      links={context.header.navigation}
                      routes={context.routes} />
                </Grid>
                <Grid container item xs={12} sm={4} direction="column" alignItems="flex-start" justify="space-between" className="Footer-right">
                  <Grid container alignItems="center">
                    <MailIcon />
                    <strong>ekosonicwest@ukr.net</strong>
                  </Grid>
                  <Grid container alignItems="center">
                    <CallIcon />
                    <strong>+38 099 336 21 63</strong>
                  </Grid>
                  <br />
                  <Grid container direction="column" alignItems="flex-start">
                    <Grid container item alignItems="center">
                      <span>Developer: Tatiana Mysiuk</span>
                      <a href="https://www.linkedin.com/in/tatiana-mysiuk/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>

                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </footer>
        )}
      </LanguageConsumer>
    )
  }
}

export default AppFooter;
