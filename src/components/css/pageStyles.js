import { makeStyles } from '@material-ui/core/styles';

const pageStyles = makeStyles(theme => ({
  headerCenter: {
    //boxShadow: '2px -2px 3px rgba(27, 39, 51, 0.6)',
    paddingTop: '1.5rem',
    marginTop: '1.5rem',
    marginBottom: '2rem',
    borderTopRightRadius: '3px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: 'rgb(30, 40, 50)',
    textShadow: '1px -1px 2px rgba(90, 120, 150, 0.9)',
    letterSpacing: '0.5rem',
    textTransform: 'uppercase',
    fontStyle: 'italic',
    "& span:nth-child(1)": {
      fontSize: '1.7rem',
      fontWeight: 900,
      [theme.breakpoints.down('1024')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.4rem',
      },
      [theme.breakpoints.down('800')]: {
        fontSize: '1.2rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
      [theme.breakpoints.down('460')]: {
        fontSize: '0.65rem',
      },
    },
    "& span:nth-child(2)": {
      fontFamily: '"Rubik Mono One", sans-serif',
      fontSize: '1.9rem',
      [theme.breakpoints.down('1024')]: {
        fontSize: '1.7rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.6rem',
      },
      [theme.breakpoints.down('800')]: {
        fontSize: '1.4rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.2rem',
      },
      [theme.breakpoints.down('460')]: {
        fontSize: '0.8rem',
      },
    },
    [theme.breakpoints.down('sm')]: {
      letterSpacing: '0.3rem',
    },
    [theme.breakpoints.down('800')]: {
      letterSpacing: '0.2rem',
      paddingTop: '1.1rem',
      marginBottom: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      letterSpacing: '0.1rem',
    },
    [theme.breakpoints.down('460')]: {
      paddingTop: '0.8rem',
    },
  },
  slider: {
    //backgroundColor: 'rgba(230, 230, 230, 0.3)',
    boxShadow: '-2px 2px 2px rgba(27, 39, 51, 0.6)',
    padding: '1rem',
    paddingLeft: '6rem',
    marginTop: '1rem',
    //marginBottom: '2rem',
    color: 'rgba(40, 55, 70, 1)',
    letterSpacing: '0.1rem',
    fontSize: '1.3rem',
    //fontFamily: '"Oswald", sans-serif',
    fontStyle: 'italic',
    textShadow: '-1px 1px 2px rgb(0, 0, 56)',
    borderBottomLeftRadius: '3px',
    [theme.breakpoints.down('1025')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      letterSpacing: 'normal',
      marginBottom: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
      paddingLeft: '4rem',
    },
    [theme.breakpoints.down('470')]: {
      fontSize: '0.55rem',
      textShadow: '1px 1px 1px rgb(0, 0, 56)',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
      paddingLeft: '2rem',
    },
  },
  stickyNav: {
    position: 'sticky',
    top: '7.5rem',
    //backgroundColor: 'rgba(230, 230, 230, 0.3)',
    fontFamily: 'Oswald',
    maxHeight: '32rem',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    "&::-webkit-scrollbar": {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      width: '3px',
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: 'rgba(52, 74, 97, 0.3)',
      borderRadius: '25px',
    },
    "-ms-overflow-style": '-ms-autohiding-scrollbar',
    //boxShadow: '-2px -2px 4px rgba(27, 39, 51, 0.6)',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'rgba(230, 230, 230, 0.6)',
      maxHeight: '30rem',
    },
  },
  contactData: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: '2rem',
      paddingLeft: '1rem',
      paddingBottom: '0.5rem',
      //backgroundColor: 'rgba(230, 230, 230, 0.3)',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '0rem',
      paddingLeft: '0.5rem',
    },
  },
  navigation: {
    listStyleType: "none",
    paddingLeft: 0,
    "& a": {
      textDecoration: 'none',
    },
  },
  navTitle: {
    paddingLeft: '1.5rem',
    fontFamily: 'Oswald',
    color: '#000038',
    textShadow: '-1px 1px 2px rgba(0, 0, 56, 0.7)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
      padding: '1.5rem 1.5rem 0',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
      padding: '1rem 1rem 0',
    },
  },
  navItem: {
    marginBottom: '0.3rem',
    padding: '0.3rem 1.1rem',
    borderRadius: '3px',
    fontSize: '0.85rem',
    color: '#000038',
    textShadow: '-1px 1px 2px rgba(0, 0, 56, 0.7)',
    "&:hover": {
      backgroundColor: 'rgba(52, 74, 97, 0.1)',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      padding: '0.4rem 0.9rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
      padding: '0.3rem 0.7rem',
    },
  },
  active: {
    "& li": {
      backgroundColor: 'rgba(52, 74, 97, 0.1)',
      textDecoration: 'underline',
    },
  },
  fontBig: {
    fontSize: '1rem',
  },
  strong: {
    paddingLeft: '0.5rem',
    fontWeight: 900,
  },
  contacts: {
    paddingLeft: '2rem',
    paddingTop: '0.4rem',
    fontSize: '0.9rem',
    color: '#000038',
    textShadow: '0px 0px 1px rgba(0, 0, 56, 0.7)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
      paddingTop: '0.3rem',
    },
  },
  paperContent: {
    marginTop: '4rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem',
    },
    [theme.breakpoints.down('750')]: {
      marginTop: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '0.7rem',
    },
  },
  title: {
    color: '#000038',
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.95rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
    },
    textAlign: 'center',
  },
  text: {
    marginTop: '0.6rem',
    padding: '1rem',
    textAlign: 'center',
    lineHeight: 1.3,
    fontSize: '1.1rem',
    fontStyle: 'italic',
    color: '#000038',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.85rem',
      padding: '0.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
      padding: '0.3rem',
    },
  },
  cardWrapper: {
    marginTop: '-6rem',
    paddingTop: '6rem',
    marginBottom: '0.5rem',
    [theme.breakpoints.down('750')]: {
      marginTop: '-5rem',
      paddingTop: '5rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-4rem',
      paddingTop: '4rem',
    },
  },
  userForm: {
    paddingTop: '1.6rem',
    paddingBottom: '1rem',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0.8rem',
      paddingBottom: '0.5rem',
    },
  },
}));

export default pageStyles;
