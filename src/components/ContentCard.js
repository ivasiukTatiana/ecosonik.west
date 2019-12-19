import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    backgroundColor: 'rgba(52, 74, 97, 0.1)',
    marginBottom: '0.2rem',
  },
  cardContent: {
    padding: '1rem 0.8rem 0',
    display: 'flex',
  },
  title: {
    fontSize: '0.96rem',
    lineHeight: 1.3,
    paddingLeft: '0.8rem',
  },
  text: {
    textAlign: 'justify',
    paddingLeft: '0.8rem',
    fontSize: '0.95rem',
  },
  action: {
    justifyContent: 'flex-end',
    paddingTop: 0,
    lineHeight: 1,
  },
  media: {
    maxWidth: '5rem',
    //padding: '0.3rem',
  },
});

export default function ContentCard(props) {
  const classes = useStyles();
  const Image = () => {
    if (props.cardBody.images.length !== 0) {
      return (
        <CardMedia
        component="img"
        alt=""
        className={classes.media}
        image={props.cardBody.images[0].image}
        title="" />
      )
    } else {
      return <React.Fragment />
    }
  }

  return (
    <Card className={classes.card} elevation={4}>
      <CardContent className={classes.cardContent}>
        <Image />
        <div>
          <Typography className={classes.title} variant="subtitle2" component="h3" gutterBottom>
            {props.cardBody.title}
          </Typography>
          <Typography className={classes.text} variant="body1" component="p">
            {props.cardBody.customer}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.action}>
        <HashLink to={props.link}>
          <Button size="small">{props.button}</Button>
        </HashLink>
      </CardActions>
    </Card>
  );
}
