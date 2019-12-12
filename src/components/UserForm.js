import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        marginBottom: '0.4rem',
      }
    },
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(150, 170, 180, 0.3)',
        "&:hover": {
          backgroundColor: 'rgba(150, 170, 180, 0.6)',
        },
        "&.Mui-focused": {
            backgroundColor: 'rgba(150, 170, 180, 0.6)',
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

export default class UserForm extends Component {

  constructor(props) {
    super(props);
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
      disabledSubmit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateUserInput = this.validateUserInput.bind(this);
    //console.log(this.state.formErrors.username === '')
  }

  handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    this.setState({ [key]: value }, () => { this.validateUserInput(key, value) });
  };

  validateUserInput = (fieldName, value) => {
    let formErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let usermailValid = this.state.usermailValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case 'username':
        usernameValid = (value.length > 0) && (value.match(/^[\D]{3,40}$/g) !== null);
        formErrors.username = usernameValid ? '' : 'Incorrect name';
        break;
      case 'usermail':
        usermailValid = value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i) ? true : false;
        formErrors.usermail = usermailValid ? '' : 'Incorrect e-mail';
        break;
      case 'message':
        messageValid = value.length > 0;
        formErrors.message = messageValid ? '' : 'Message cannot be empty';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: formErrors,
      usernameValid: usernameValid,
      usermailValid: usermailValid,
      messageValid: messageValid,
      formValid: usernameValid && usermailValid && messageValid,
      disabledSubmit: !(usernameValid && usermailValid && messageValid),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    //console.log(this.state);
    if (!this.state.formValid) {
      const formErrors = {};
      formErrors.username = this.state.username.length === 0 ? 'Name cannot be empty' : '';
      formErrors.usermail = this.state.usermail.length === 0 ? 'E-mail cannot be empty' : '';
      formErrors.message = this.state.message.length === 0 ? 'Message cannot be empty' : '';
      this.setState({ formErrors: formErrors, disabledSubmit: true });
      console.log(this.state);


      return
    }

    console.log(this.state);

  };

  render(){
    const { className } = this.props;
    return(
      <ThemeProvider theme={theme}>
        <form className={className} noValidate autoComplete="off"
          onSubmit={this.handleSubmit}>
          <Grid container alignItems="flex-start" justify="space-between">
            <TextField
              required
              error={this.state.formErrors.username === '' ? false : true}
              helperText={this.state.formErrors.username}
              id="username"
              className="smallField"
              label="Your name"
              value={this.state.username}
              onChange={this.handleChange}
              variant="filled"
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
          <Grid container alignItems="flex-start" justify="space-between">
            <TextField
              required
              error={this.state.formErrors.usermail === '' ? false : true}
              helperText={this.state.formErrors.usermail}
              id="usermail"
              className="smallField"
              label="E-mail:"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
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
                    <CallIcon />
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
            error={this.state.formErrors.message === '' ? false : true}
            helperText={this.state.formErrors.message}
            id="message"
            label="Your message"
            multiline
            rows="4"
            fullWidth
            value={this.state.message}
            onChange={this.handleChange}
            variant="filled"
          />

          <Button variant="contained" type="submit" disabled={this.state.disabledSubmit}>
            Send
          </Button>



        </form>
      </ThemeProvider>

    );
  }
}
