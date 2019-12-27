import { makeStyles } from '@material-ui/core/styles';

const pageStyles = makeStyles(theme => ({
  stickyNav: {
    position: "sticky",
    top: "6.16rem",
    //backgroundColor: 'rgba(52, 74, 97, 0.3)',
    paddingBottom: '0.5rem',
    maxHeight: '31rem',
    overflowY: 'auto',
    "&::-webkit-scrollbar": {
      width: 0,
    },
    "-ms-overflow-style": 'none',
    scrollbarWidth: 'none',
    boxShadow: '-2px -2px 4px rgba(27, 39, 51, 0.6)',
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
    color: '#000038',
    textShadow: '0px 0px 1px rgb(0, 0, 0)',
  },
  navItem: {
    padding: '0.6rem 1.1rem',
    fontSize: '0.95rem',
    color: '#000038',
    textShadow: '0px 0px 1px rgb(0, 0, 0)',
    "&:hover": {
      backgroundColor: 'rgba(52, 74, 97, 0.1)',
    },
    "& strong": {
      paddingLeft: '0.5rem',
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
  },
  paperContent: {
    padding: theme.spacing(1),
  },
  title: {
    fontSize: '1rem',
    textAlign: 'center',
    marginTop: '-7.6rem',
    paddingTop: '7.6rem',
    marginBottom: '0.6rem',
  },
  text: {
    marginTop: '0.6rem',
    padding: '1rem',
    textAlign: 'justify',
    lineHeight: 1.3,
    fontSize: '0.96rem',
  },
  listItem: {
    marginTop: '0.6rem',
    marginBottom: '0.6rem',
    fontSize: '0.95rem',
  },
  userForm: {
    padding: '1.2rem',
    textAlign: 'center',
    "& .smallField": {
      width: '48%',
    },
  },
}));

export default pageStyles;
