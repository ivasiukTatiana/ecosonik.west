import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
//import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import useStyles from './css/pageStyles';

const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        [breakpoints.down('xs')]: {
          padding: '0.2rem',
        },
      },
    },
    MuiDrawer: {
      paper: {
        top: '6.16rem',
        height: 'inherit',
        [breakpoints.down('sm')]: {
          top: '5.05rem',
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: 'rgba(230, 230, 230, 0.4)',
      },
    },
  }
});

export default function ContentNav(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.stickyNav} onClick={handleDrawerToggle}>
      <Typography variant="h6" component="h3" gutterBottom className={classes.navTitle}>
        {props.title}
      </Typography>
      <ul className={classes.navigation}>
        {props.navigation.map((item, index) => {
          return (
            <HashLink key={index} to={item.link}>
              <li className={classes[props.classItem]}>{item.text}</li>
            </HashLink>
          )
        })}
      </ul>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>

      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor='left'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawer,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      <Hidden smDown>
        {drawer}
      </Hidden>
    </ThemeProvider>
  )
}
