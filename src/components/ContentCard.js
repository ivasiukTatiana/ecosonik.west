import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: 'rgba(230, 230, 230, 0.8)',
    marginBottom: '0.5rem',
  },
  cardContent: {
    padding: 0,
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  column: {
    flexDirection: 'column',
    minHeight: '22.5rem',
    [theme.breakpoints.down('sm')]: {
      minHeight: '18rem',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 0,
    },
  },
  cardText: {
    width: '100%',
    minHeight: '10rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1.2rem',
    paddingBottom: 0,

    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem',
      paddingBottom: 0,
      minHeight: '7.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 0,
    },
  },
  title: {
    fontSize: '1.1rem',
    fontFamily: 'Oswald',
    //fontWeight: 700,
    lineHeight: 1.3,
    textShadow: '-1px 1px 2px rgb(60, 70, 80)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.84rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
      lineHeight: 1.2,
    },
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.84rem',
      lineHeight: 1.1,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.65rem',
      lineHeight: 1.1,
    },
  },
  action: {
    justifyContent: 'flex-end',
    paddingBottom: 0,
  },
  media: {
    maxHeight: '11rem',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '8rem',
    },
  },
}));

export default function ContentCard(props) {
  const classes = useStyles();
  const Image = () => {
    if (props.cardBody.images.length !== 0) {
      return (
        <CardMedia
          component="img"
          alt={props.cardBody.images[0].alt}
          image={props.cardBody.images[0].image}
          title=""
          className={classes.media} />
      )
    } else {
      return <React.Fragment />
    }
  }

  return (
    <Card className={classes.card} elevation={4}>
      <CardContent className={props.direction === "column" ?
        `${classes.cardContent} ${classes[props.direction]}`:`${classes.cardContent}`}>
        <Image />
        <div className={classes.cardText}>
          <Typography className={classes.title} variant="subtitle2" component="h3" gutterBottom>
            {props.cardBody.title}
          </Typography>
          <Typography className={classes.text} variant="body1" component="p">
            {props.cardBody.customer}
          </Typography>

          <CardActions className={classes.action}>
            <HashLink to={props.link}>
              <Button>{props.button}</Button>
            </HashLink>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}
