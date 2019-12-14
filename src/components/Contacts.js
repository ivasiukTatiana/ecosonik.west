import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';

import useStyles from './css/pageStyles';
import { LanguageConsumer } from '../providers/LanguageProvider';
import UserForm from './UserForm';

export default function Contacts() {
  const classes = useStyles();
  return(
    <LanguageConsumer>
      {(context) => (
        <Grid container spacing={1} justify="space-between">
          <Grid item xs={3}>
            <Paper className={classes.stickyNav}>
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
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paperContent} elevation={7}>
              <Typography className={classes.title} variant="body1" component="p">
                {context.contacts.h2}
              </Typography>

              <UserForm className={classes.userForm}
                fields={context.contacts.formfields}
                button={context.contacts.button} />
            </Paper>
          </Grid>
        </Grid>
      )}
    </LanguageConsumer>
  );
}



/*<br />
<TextField
  required
  id="filled-required"
  label="Required"
  defaultValue="Hello World"
  variant="filled"
  error
  helperText="Incorrect entry."
/>*/
