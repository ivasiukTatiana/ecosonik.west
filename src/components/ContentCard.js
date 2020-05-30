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
    minHeight: '31vw',
    [theme.breakpoints.down('sm')]: {
      minHeight: '18rem',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 0,
    },
  },
  cardText: {
    width: '100%',
    minHeight: '11vw',
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
  wrapperText: {
    maxHeight:'6.5vw',
    overflow: 'hidden',
  },
  wrapperTextLong: {
    minHeight:'24.5vw',
    maxHeight:'24.5vw',
    overflow: 'hidden',
  },
  title: {
    fontSize: '1.1rem',
    fontFamily: 'Oswald',
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
    textAlign: 'justify',
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
    minHeight: '18vw',
    maxHeight: '18vw',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '8rem',
    },
  },
  mediaRow: {
    minHeight: '30vw',
    maxHeight: '30vw',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '8rem',
    },
  },
}));

export default function ContentCard(props) {
  const classes = useStyles();
  const Image = () => {
    let cardDirection = "";
    if (props.direction === "column") {
      cardDirection = "media";
    } else {
      cardDirection = "mediaRow";
    }
    if (props.cardBody.images.length !== 0) {
      return (
        <CardMedia
          component="img"
          alt={props.cardBody.images[0].alt}
          image={props.cardBody.images[0].image}
          title=""
          className={classes[cardDirection]} />
      )
    } else {
      return <React.Fragment />
    }
  }
  const Text = () => {
    let textHeight = "";
    if (props.cardBody.images.length !== 0 && props.direction === "column") {
      textHeight = "wrapperText";
    } else {
      textHeight = "wrapperTextLong";
    }
    return (
      <div className={classes[textHeight]}>        
        <Typography className={classes.title} variant="subtitle2" component="h3" gutterBottom>
          {props.cardBody.title}
        </Typography>
        <Typography className={classes.text} variant="body1" component="p" gutterBottom>
          {props.cardBody.customer}
        </Typography>
        <Typography className={classes.text} variant="body1" component="p">
          {props.cardBody.text}
        </Typography>
      </div>
    )
  }

  return (
    <Card className={classes.card} elevation={4}>
      <CardContent className={props.direction === "column" ?
        `${classes.cardContent} ${classes[props.direction]}`:`${classes.cardContent}`}>
        <Image />
        <div className={classes.cardText}>         
          <Text />
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
