import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';

import Hidden from '@material-ui/core/Hidden';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import useStyles from './css/pageStyles';
import { LanguageConsumer } from '../providers/LanguageProvider';
import UserForm from './UserForm';


const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  overrides: {
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

export default function Contacts() {
  const classes = useStyles();
  return(
    <LanguageConsumer>
      {(context) => (
        <Grid container spacing={1} justify="space-between">
          <Grid item xs={3}>
            <Hidden smDown>
              <div className={classes.stickyNav}>
                <Typography variant="h6" component="h3" gutterBottom className={classes.navTitle}>
                  {context.header.navigation.filter((item) => {
                      return item.hasOwnProperty("contacts");
                    }).map((item) => { return item.contacts; })}
                </Typography>
                <Grid container direction="column" alignItems="flex-start"
                className={classes.navItem}>
                  {context.footer.address.map((item, index) => {
                    return (
                      <span key={index}>{item}</span>
                    )
                  })}
                </Grid>
                <Grid container alignItems="center" className={classes.navItem}>
                  <MailIcon />
                  <strong>{context.footer.email}</strong>
                </Grid>
                <Grid container alignItems="center" className={classes.navItem}>
                  <CallIcon />
                  <strong>{context.footer.phone}</strong>
                </Grid>
                <Grid container alignItems="center" className={classes.navItem}>
                  {context.footer.head.map((item, index) => {
                    return <span key={index}>{item}</span>
                  })}
                </Grid>
              </div>
            </Hidden>
          </Grid>

          <Grid item xs={12} md={9}>
            <ThemeProvider theme={theme}>
              <Hidden mdUp>
                <Grid container direction="column" alignItems="flex-start"
                className={classes.contacts}>
                  {context.footer.address.map((item, index) => {
                    return (
                      <span key={index}>{item}</span>
                    )
                  })}
                </Grid>
                <Grid container alignItems="center" className={classes.contacts}>
                  <MailIcon />
                  {context.footer.email}
                </Grid>
                <Grid container alignItems="center" className={classes.contacts}>
                  <CallIcon />
                  {context.footer.phone}
                </Grid>
                <Grid container className={classes.contacts}>
                  {context.footer.head.map((item, index) => {
                    return <span key={index}>{item}</span>
                  })}
                </Grid>
              </Hidden>
            </ThemeProvider>

            <Paper className={classes.paperContent} elevation={7}>
              <Typography className={classes.title} variant="body1" component="p">
                {context.contacts.h2}
              </Typography>

              <UserForm className={classes.userForm}
                fields={context.contacts.formfields}
                button={context.contacts.button}
                submitMessage={context.contacts.submitMessage} />
            </Paper>
          </Grid>
        </Grid>
      )}
    </LanguageConsumer>
  );
}
