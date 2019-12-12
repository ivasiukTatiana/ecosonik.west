import { makeStyles } from '@material-ui/core/styles';

const pageStyles = makeStyles(theme => ({
  stickyNav: {
    position: "sticky",
    top: "7.7rem",
    paddingBottom: '1.5rem',
    maxHeight: '30rem',
    overflowY: 'auto',
    "&::-webkit-scrollbar": {
      width: 0,
    },
    "-ms-overflow-style": 'none',
    scrollbarWidth: 'none',
  },
  navigation: {
    listStyleType: "none",
    paddingLeft: 0,
  },
  navTitle: {
    padding: '1.5rem 1.5rem 0',
  },
  navItem: {
    padding: '0.6rem 1.1rem',
    fontSize: '0.95rem',
    textShadow: '1px 1px 1px rgb(143, 164, 183)',
    "&:hover": {
      backgroundColor: 'rgba(52, 74, 97, 0.1)',
    },
    "& strong": {
      paddingLeft: '0.5rem',
    },
  },
  fontSmall: {
    padding: '0.6rem 1.1rem',
    fontSize: '0.9rem',
    textShadow: '1px 1px 1px rgb(143, 164, 183)',
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
    fontSize: '1rem',
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
