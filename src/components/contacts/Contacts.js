import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './Contacts.css'
import { LanguageConsumer } from '../../providers/LanguageProvider';

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        marginBottom: '0.4rem',
      }
    },
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(45, 45, 120, 0.09)',
        "&:hover": {
          backgroundColor: 'rgba(45, 45, 120, 0.15)',
        },
        "&.Mui-focused": {
            backgroundColor: 'rgba(45, 45, 120, 0.15)',
        },
      },
    },
    MuiInputBase: {
      root: {
        color: '#000038',
      }
    },
    MuiFormLabel: {
      root: {
        color: '#000038',
      }
    },
    MuiButton: {
      contained: {
        backgroundColor: 'rgba(45, 45, 120, 0.15)',
        marginTop: '1rem',
      }
    }
  },
});

class Contacts extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      comnany: "",
      usermail: "",
      userphone: "",
      subject: "",
      message: "",
      formErrors: {
        username: "",
        usermail: "",
        message: "",
      },
      usernameValid: false,
      usermailValid: false,
      messageValid: false,
      formValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state);
  };

  render(){
    return(
      <LanguageConsumer>
        {(context) => (
          <Grid container spacing={1} justify="space-between">
            <Grid item xs={3}>
              <Paper className="stickyNav">
                <Typography variant="h6" component="h3" gutterBottom className="navTitle">
                  {context.header.navigation.filter((item) => {
                      return item.hasOwnProperty("contacts");
                    }).map((item) => { return item.contacts; })}
                </Typography>
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
              </Paper>
            </Grid>

            <Grid item xs={9}>
              <Paper className="paperContent" elevation={7}>
                <Typography className="text" variant="body2" component="p">
                  Залиште повідомлення, і ми обов'язково зв'яжемось з Вами
                </Typography>

                <ThemeProvider theme={theme}>
                  <form className="userform" noValidate autoComplete="off"
                    onSubmit={this.handleSubmit}>
                    <Grid container alignItems="center" justify="space-between">
                      <TextField
                        required
                        id="username"
                        className="smallField"
                        label="Your name"
                        value={this.state.username}
                        onChange={this.handleChange}
                        variant="filled"
                        error={false}
                      />
                      <TextField
                        id="comnany"
                        className="smallField"
                        label="Your company"
                        value={this.state.comnany}
                        onChange={this.handleChange}
                        variant="filled"
                      />
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                      <TextField
                        required
                        error={false}
                        id="usermail"
                        className="smallField"
                        label="E-mail:"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MailOutlineIcon color="primary" />
                            </InputAdornment>
                          ),
                        }}
                        value={this.state.usermail}
                        onChange={this.handleChange}
                        variant="filled"
                      />
                      <TextField
                        id="userphone"
                        className="smallField"
                        label="Phone:"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CallIcon color="primary" />
                            </InputAdornment>
                          ),
                        }}
                        value={this.state.userphone}
                        onChange={this.handleChange}
                        variant="filled"
                      />
                    </Grid>

                    <TextField
                      id="subject"
                      label="Message subject"
                      fullWidth
                      value={this.state.subject}
                      onChange={this.handleChange}
                      variant="filled"
                    />
                    <TextField
                      required
                      id="message"
                      label="Your message"
                      multiline
                      rows="4"
                      fullWidth
                      value={this.state.message}
                      onChange={this.handleChange}
                      variant="filled"
                    />

                    <Button variant="contained" type="submit" disabled>
                      Send
                    </Button>



                  </form>
                </ThemeProvider>
              </Paper>
            </Grid>
          </Grid>
        )}
      </LanguageConsumer>
    );
  }
}

export default Contacts;

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
