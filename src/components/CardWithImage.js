import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Table from './Table';

const useStyles = makeStyles(theme => ({
  card: {
    //backgroundColor: 'rgba(52, 74, 97, 0.1)',
    marginBottom: '0.6rem',
  },
  anchor: {
    marginTop: '-6rem',
    paddingTop: '6rem',
  },
  cardContent: {
    padding: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0.6rem',
    },
  },
  title: {
    fontSize: '1rem',
    fontFamily: 'Oswald',
    lineHeight: 1.4,
    marginBottom: '0.6rem',
    backgroundColor: 'rgba(52, 74, 97, 0.1)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.84rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
      lineHeight: 1.2,
    },
  },
  customer: {
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
    lineHeight: 1.35,
    //fontSize: '0.95rem',
    marginTop: '0.6rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.84rem',
      lineHeight: 1.2,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.65rem',
      lineHeight: 1.1,
    },
  },
  media: {
    maxWidth: '65%',
    margin: '0.6rem auto',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '95%',
      //maxHeight: '4.8rem',
    },
  },
  bigmedia: {
    maxWidth: '95%',
    margin: '0.6rem auto',
  }
}));

export default function CardWithImage(props) {
  const classes = useStyles();
  const CardTable = () => {
    if (props.cardBody.hasOwnProperty('table')) {
      return <Table table={props.cardBody.table} />
    } else {
      return <React.Fragment />
    }
  }
  const CardText = () => {
    if (typeof(props.cardBody.text) === 'object') {
      return (
        props.cardBody.text.map((item, index) => {
          return (
            <Typography key={index} className={classes.text} variant="body1" component="p">
              {item}
            </Typography>
          )
        })
      )
    } else {
      return (
        <Typography className={classes.text} variant="body1" component="p">
          {props.cardBody.text}
        </Typography>
      )
    }
  }

  return (
    <Card className={classes.card} elevation={2}>
      <Typography component="p" className={classes.anchor} id={props.cardBody.link}/>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} variant="subtitle2" component="h2" >
          {props.cardBody.title}
        </Typography>
        <Typography className={classes.customer} variant="subtitle2" component="h3">
          {props.cardBody.hasOwnProperty('customer') ? props.cardBody.customer : ""}
        </Typography>
        <CardTable />
        <CardText />

        {props.cardBody.images.map((image, index) => {
          return (
            <React.Fragment key={index}>
              <Typography className={classes.text} variant="body2" component="p" color="textSecondary">
                {image.text}
              </Typography>

              <CardMedia
                component="img"
                alt={image.alt}
                className={classes[image.class]}
                image={image.image}
                title={image.text}
              />
            </React.Fragment>
          )
        })}
      </CardContent>
    </Card>
  );
}
