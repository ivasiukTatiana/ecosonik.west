import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

export default function SuccessSubmit() {
  const [open, setOpen] = React.useState(false);
  //const [transition, setTransition] = React.useState(undefined);

  const handleClick = Fade => () => {
    //setTransition(() => Transition);
    console.log(open);
    setOpen(true);
    console.log(open);
  };



  const handleClose = () => {
    console.log(open);
    setOpen(false);

  };

  return (
    <div>
      <Button onClick={handleClick()}>Up</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        /*autoHideDuration={6000}*/
        onClose={handleClose}
        TransitionComponent={(props) => { return <Slide {...props} direction="up" />; }}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">I love snacks</span>} >



    </Snackbar>
    </div>
  );
}

/*<SnackbarContent
          className={clsx(classes[variant], className)}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
              <Icon className={clsx(classes.icon, classes.iconVariant)} />
              {message}
            </span>
          }
          action={[
            <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
              <CloseIcon className={classes.icon} />
            </IconButton>,
          ]}
          {...other}
        />*/
