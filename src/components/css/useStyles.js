import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
    fontSize: '1rem',
    textShadow: '1px 1px 1px rgb(143, 164, 183)',
    "&:hover": {
      backgroundColor: 'rgba(52, 74, 97, 0.1)',
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
    padding: theme.spacing(3),
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
    textAlign: 'justify',
    lineHeight: 1.3,
    fontSize: '1rem',
  },
  listItem: {
    marginTop: '0.6rem',
    marginBottom: '0.6rem',
    fontSize: '1rem',
  },
}));

export default useStyles;
