import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import './Contacts.css'
import { LanguageConsumer } from '../../providers/LanguageProvider';
//import ContentNav from '../ContentNav';
//import CardWithImage from './CardWithImage';
//import useStyles from './css/pageStyles';

class Contacts extends Component {
  render(){
    //const classes = useStyles();
    return(
      <LanguageConsumer>
        {(context) => (
          <Grid container spacing={1} justify="space-between" alignItems="stretch">
            <Grid item xs={3}>
              <Paper className="stickyNav">
                <Typography variant="h6" component="h3" gutterBottom className="navTitle">
                  {context.header.navigation.filter((item) => {
                      return item.hasOwnProperty("contacts");
                    }).map((item) => { return item.contacts; })}
                </Typography>
                <Grid container direction="column" alignItems="flex-start" justify="space-between">
                  <Grid container direction="column" alignItems="flex-start" className="navItem">
                    {context.footer.address.map((item, index) => {
                      return (
                        <span key={index}>{item}</span>
                      )
                    })}
                  </Grid>
                  <Grid container alignItems="center" className="navItem">
                    <Icon className="fas fa-envelope" />
                    <strong>{context.footer.email}</strong>
                  </Grid>
                  <Grid container alignItems="center" className="navItem">
                    <Icon className="fas fa-phone-alt" />
                    <strong>{context.footer.phone}</strong>
                  </Grid>
                  <Grid container alignItems="center" className="navItem">
                    {context.footer.head.map((item, index) => {
                      return <span key={index}>{item}</span>
                    })}
                  </Grid>
                </Grid>

              </Paper>



            </Grid>

            <Grid item xs={9}>
              <Paper className="paperContent" elevation={7}>
                <Typography className="title" variant="subtitle2" component="h2" id="products">
                  {context.products.h2}
                </Typography>

                <Typography className="text" variant="body1" component="p" gutterBottom>

                </Typography>

              </Paper>
            </Grid>
          </Grid>
        )}
      </LanguageConsumer>
    );
  }
}

export default Contacts;
