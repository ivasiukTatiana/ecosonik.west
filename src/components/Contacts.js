import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Hidden from '@material-ui/core/Hidden';

import pageStyles from './css/pageStyles';
import { LanguageConsumer } from '../providers/LanguageProvider';
import UserForm from './UserForm';

export default function Contacts() {
  const classes = pageStyles();
  const ContactData = (props) => {
    return (
      <div className={classes.contactData}>
        <Grid container direction="column" alignItems="flex-start"
          className={props.classes}>
          {props.data.address.map((item, index) => {
            return (
              <span key={index}>{item}</span>
            )
          })}
        </Grid>
        <Grid container alignItems="center" className={props.classes}>
          <MailIcon />
          <span className={classes.strong}>{props.data.email}</span>
        </Grid>
        <Grid container alignItems="center" className={props.classes}>
          <CallIcon />
          <span className={classes.strong}>{props.data.phone}</span>
        </Grid>
        <Grid container alignItems="center" className={props.classes}>
          {props.data.head.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </Grid>
      </div>
    )
  }

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
                <ContactData data={context.footer} classes={classes.navItem} />
              </div>
            </Hidden>
          </Grid>

          <Grid item xs={12} md={9}>
            <Hidden mdUp>
              <ContactData data={context.footer} classes={classes.contacts} />
            </Hidden>

            <div className={classes.paperContent}>
              <Typography className={classes.title} variant="body1" component="p">
                {context.contacts.h2}
              </Typography>

              <UserForm className={classes.userForm}
                fields={context.contacts.formfields}
                button={context.contacts.button}
                submitMessage={context.contacts.submitMessage} />
            </div>
          </Grid>
        </Grid>
      )}
    </LanguageConsumer>
  );
}
