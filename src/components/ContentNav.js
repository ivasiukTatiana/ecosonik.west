import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import styled, { keyframes } from "styled-components";
import slideIn from 'react-animations/lib/slide-in-right';
import flipIn from 'react-animations/lib/flip-in-x';

import pageStyles from './css/pageStyles';

const ButtonDiv = styled.div`
  background-color: rgba(188, 188, 188, 0.4);
  position: sticky;
  top: 6rem;
  @media screen and (max-width: 750px) {
    top: 4rem;
  }
`;

const SlideInAnimation = keyframes`${slideIn}`;
const SlideInDiv = styled.div`
  animation: 1s ${SlideInAnimation} ease-in;
`;
const FlipInAnimation = keyframes`${flipIn}`;
const FlipInDiv = styled.div`
  animation: 1s ${FlipInAnimation} ease-in;
`;

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
        width: '14rem',
        top: '4rem',
        height: 'inherit',
        [breakpoints.down('xs')]: {
          width: '12rem',
          top: '3rem',
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

const DrawerContent = (props) => {
  const classes = pageStyles();
  const UlContent = () => {
    if (typeof(props.navigation) === 'object') {
      return (
        <ul className={classes.navigation}>
          {props.navigation.map((item, index) => {
            return (
              <HashLink key={index} to={item.link} smooth>
                <li className={classes.navItem}> {item.text} </li>
              </HashLink>
            )
          })}
        </ul>
      )
    } else {
      return <React.Fragment />
    }
  }

  return (
    <div className={classes.stickyNav} onClick={props.onClick}>
      <FlipInDiv>
        <Typography variant="h6" component="h3" gutterBottom className={classes.navTitle}>
          {props.title}
        </Typography>
      </FlipInDiv>
      <SlideInDiv>
        <UlContent />
      </SlideInDiv>
    </div>
  )
};

export default class ContentNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    }
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !(this.state.mobileOpen) });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Hidden mdUp>
          <ButtonDiv>
            <IconButton
              aria-label="open drawer"
              onClick={this.handleDrawerToggle} >
              <MenuIcon />
            </IconButton>
          </ButtonDiv>

          <Drawer
            variant="temporary"
            anchor='left'
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }} >
            <DrawerContent
              onClick={this.handleDrawerToggle}
              title={this.props.title}
              navigation={this.props.navigation}
              classItem={this.props.classItem}
              />
          </Drawer>
        </Hidden>

        <Hidden smDown>
          <DrawerContent
            onClick={this.handleDrawerToggle}
            title={this.props.title}
            navigation={this.props.navigation}
            classItem={this.props.classItem} />
        </Hidden>
      </ThemeProvider>
    )
  }
}
