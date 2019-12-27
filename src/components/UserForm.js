import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';

import SuccessSubmit from './SuccessSubmit';

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
    },
    MuiCircularProgress: {
      root: {
        marginTop: '1rem',
        marginLeft: '0.5rem',
      },
      colorPrimary: {
        color: '#000038',
      }
    }
  },
});

export default class UserForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      company: "",
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
      //disabledSubmit: true,
      submitMessage: "success",
      submitState: false,
      submitProgress: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateUserInput = this.validateUserInput.bind(this);
    this.submitMessageClose = this.submitMessageClose.bind(this);
  }

  /**
  * @function handleChange
  * @param event { obj } - change event
  * @return void
  */
  handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    this.setState({ [key]: value }, () => { this.validateUserInput(key, value) });
  };

  /**
  * @function validateUserInput
  * @param fieldName { string } - field's name
  * @param value { string } - value of field
  * @return void
  */
  validateUserInput = (fieldName, value) => {
    const { username, usermail, message } = this.props.fields;
    let formErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let usermailValid = this.state.usermailValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case 'username':
        usernameValid = (value.length > 0) && (value.match(/^[\D]{1,40}$/g) !== null);
        formErrors.username = usernameValid ? '' : username.errorin;
        break;
      case 'usermail':
        usermailValid = value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i) ? true : false;
        formErrors.usermail = usermailValid ? '' : usermail.errorin;
        break;
      case 'message':
        messageValid = value.length > 0;
        formErrors.message = messageValid ? '' : message.error;
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
    event.preventDefault();

    if (!this.state.formValid) {
      const { username, usermail, message } = this.props.fields;
      const formErrors = {};
      formErrors.username = this.state.username.length === 0 ? username.error : '';
      formErrors.usermail = this.state.usermail.length === 0 ? usermail.error : '';
      formErrors.message = this.state.message.length === 0 ? message.error : '';
      this.setState({ formErrors: formErrors, disabledSubmit: true });
      return
    }

    this.setState({ submitProgress: true }); // for spinner
    let submitMessage = "success";
    const formData = {
      name: this.state.username,
      company: this.state.company,
      email: this.state.usermail,
      phone: this.state.userphone,
      subject: this.state.subject,
      message: this.state.message
    };

    fetch("./sendmail.php", {
      method: "POST",
      body: JSON.stringify(formData),
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.text().then(data => {
        console.log(data);
        this.setState({
          submitProgress: false,
          submitMessage: submitMessage,
          submitState: true,
        });
      });
    }).catch(err => {
      console.log(err);
      submitMessage = "error";
      this.setState({
        submitProgress: false,
        submitMessage: submitMessage,
        submitState: true,
      });
    });
  };

  submitMessageClose = () => {
    this.setState({ submitState: false, });
  }

  render(){
    const { className, fields, button, submitMessage } = this.props;
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
              label={typeof(fields.username) === 'object' ? fields.username.lable : ''}
              value={this.state.username}
              onChange={this.handleChange}
              variant="filled"
            />
            <TextField
              id="company"
              className="smallField"
              label={typeof(fields.company) === 'object' ? fields.company.lable : ''}
              value={this.state.company}
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
              label={typeof(fields.usermail) === 'object' ? fields.usermail.lable : ''}
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
              label={typeof(fields.userphone) === 'object' ? fields.userphone.lable : ''}
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
            label={typeof(fields.subject) === 'object' ? fields.subject.lable : ''}
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
            label={typeof(fields.message) === 'object' ? fields.message.lable : ''}
            multiline
            rows="4"
            fullWidth
            value={this.state.message}
            onChange={this.handleChange}
            variant="filled"
          />

          <Grid container alignItems="center" justify="center">
            <Button variant="contained" type="submit" disabled={this.state.disabledSubmit}>
              {button}
            </Button>
            <Fade
              in={this.state.submitProgress}
              style={{
                transitionDelay: this.state.submitProgress ? '800ms' : '0ms',
              }}
              size={24}
              unmountOnExit>
              <CircularProgress />
            </Fade>
          </Grid>
        </form>
        <SuccessSubmit
          submitMessage={submitMessage[this.state.submitMessage]}
          submitClass={this.state.submitMessage}
          submitState={this.state.submitState}
          submitMessageClose={this.submitMessageClose} />
      </ThemeProvider>
    );
  }
}
