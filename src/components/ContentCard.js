import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    backgroundColor: 'rgba(52, 74, 97, 0.1)',
  },
  cardContent: {
    padding: '0.6rem',
  },
  title: {
    fontSize: '1rem',
    textAlign: 'center',
  },
  text: {
    textAlign: 'justify',
    lineHeight: 1.3,
    fontSize: '1rem',
  },
  action: {
    justifyContent: 'flex-end',
    paddingTop: 0,
  },
});

export default function ContentCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={4}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} variant="subtitle2" component="h3" gutterBottom>
          {props.cardBody.title}
        </Typography>
        <Typography className={classes.text} variant="body1" component="p">
          {props.cardBody.text}
        </Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <HashLink to={props.link}>
          <Button size="small">{props.button}</Button>
        </HashLink>
      </CardActions>
    </Card>
  );
}
