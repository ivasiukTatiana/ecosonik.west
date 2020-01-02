import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: 'rgba(0, 105, 50, 0.6)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
    },
  },
  error: {
    backgroundColor: 'rgba(255, 105, 50, 0.6)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
    },
  },
  icon: {
    fontSize: 20,
  },
  iconSuccess: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: '1rem',
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const variantIcon = {
  success: CheckCircleOutlineIcon,
  error: ErrorOutlineIcon,
};

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function SuccessSubmit(props) {
  const classes = useStyles();
  const {submitMessage, submitClass, submitState, submitMessageClose, ...other} = props;
  const Icon = variantIcon[submitClass];

  const [open, setOpen] = React.useState(false);
  if (submitState && !open) {
    setOpen(true);
  }

  const handleClose = () => {
    submitMessageClose();
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      ContentProps={{
        'aria-describedby': 'client-snackbar',
        'className': classes[submitClass],
        'action': [
          <IconButton key="close" aria-label="close" color="inherit"
            onClick={handleClose}>
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ],
      }}
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classes.iconSuccess} />
          {submitMessage}
        </span>
      }
      {...other} />
  );
}
