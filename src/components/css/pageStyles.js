import { makeStyles } from '@material-ui/core/styles';

const pageStyles = makeStyles(theme => ({

  headerCenter: {
    boxShadow: '2px -2px 3px rgba(27, 39, 51, 0.6)',
    paddingTop: '1.5rem',
    marginBottom: '2rem',
    borderTopRightRadius: '3px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: '#000038',
    fontWeight: 900,
    letterSpacing: '0.5rem',
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    //fontStyle: 'italic',
    "& span:nth-child(1)": {
      textShadow: '1px 1px 1px #d0d0d0',
    },
    "& span:nth-child(2)": {
      fontFamily: '"Seymour One", sans-serif',
      textShadow: '2px 2px 1px rgba(255, 204, 0, 0.3)',
    },
    [theme.breakpoints.down('sm')]: {
      letterSpacing: '0.3rem',
      fontSize: '1.4rem',
    },
    [theme.breakpoints.down('800')]: {
      letterSpacing: '0.2rem',
      fontSize: '1.2rem',
      paddingTop: '1.1rem',
      marginBottom: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      letterSpacing: '0.1rem',
      fontSize: '1rem',
    },
    [theme.breakpoints.down('460')]: {
      fontSize: '0.65rem',
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
    color: '#000038',
    fontSize: '1.2rem',
    fontFamily: '"Oswald", sans-serif',
    //fontStyle: 'italic',
    textShadow: '1px 1px 1px #d0d0d0',
    borderBottomLeftRadius: '3px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.05rem',
      marginBottom: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
      paddingLeft: '4rem',
    },
    [theme.breakpoints.down('450')]: {
      fontSize: '0.6rem',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
      paddingLeft: '2rem',
    },
  },
  stickyNav: {
    position: 'sticky',
    top: '4rem',
    backgroundColor: 'rgba(230, 230, 230, 0.3)',
    paddingTop: '2rem',
    paddingBottom: '0.5rem',
    fontFamily: 'Oswald',
    maxHeight: '32rem',
    overflowY: 'auto',
    "&::-webkit-scrollbar": {
      width: 0,
    },
    "-ms-overflow-style": 'none',
    scrollbarWidth: 'none',
    boxShadow: '-2px -2px 4px rgba(27, 39, 51, 0.6)',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'rgba(230, 230, 230, 0.3)',
      maxHeight: '30rem',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '0.5rem',
    },
  },
  contactData: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1.5rem',
      paddingLeft: '1rem',
      paddingBottom: '0.5rem',
      backgroundColor: 'rgba(230, 230, 230, 0.3)',
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
    }
  },
  navTitle: {
    padding: '1.5rem 1.5rem 0',
    fontFamily: 'Oswald',
    color: '#000038',
    textShadow: '0px 0px 1px rgb(0, 0, 0)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
      padding: '1rem 1rem 0',
    },
  },
  navItem: {
    padding: '0.6rem 1.1rem',
    fontSize: '0.95rem',
    color: '#000038',
    textShadow: '0px 0px 1px rgb(0, 0, 0)',
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
  strong: {
    paddingLeft: '0.5rem',
    fontWeight: 900,
    [theme.breakpoints.down('sm')]: {
      fontWeight: 400,
    },
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
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    backgroundColor: 'rgba(188, 188, 188, 0.4)',
    position: 'sticky',
    top: '6rem',
    [theme.breakpoints.down('xs')]: {
      top: '3.5rem',
    },
  },
  drawer: {
    width: '14rem',
    [theme.breakpoints.down('xs')]: {
      //width: '11rem',
    },
  },
  fontSmall: {
    padding: '0.6rem 1.1rem',
    fontSize: '0.85rem',
    color: '#000038',
    textShadow: '0px 0px 1px rgb(0, 0, 0)',
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
  paperContent: {
    padding: theme.spacing(1),
  },
  title: {
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.95rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
    },
    textAlign: 'center',
    marginTop: '-4rem',
    paddingTop: '4.5rem',
    marginBottom: '0.6rem',
  },
  text: {
    marginTop: '0.6rem',
    padding: '1rem 1rem 0.5rem',
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
  list: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '1.5rem',
    },
  },
  listItem: {
    marginBottom: '0.6rem',
    fontSize: '0.95rem',
    lineHeight: 1.2,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      marginBottom: '0.4rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
      lineHeight: 1.1,
    },
  },
  userForm: {
    padding: '1rem',
    textAlign: 'center',
    "& .smallField": {
      width: '48%',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem',
      "& .smallField": {
        width: '100%',
      },
    },
  },
}));

export default pageStyles;
