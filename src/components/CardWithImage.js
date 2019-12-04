import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    //backgroundColor: 'rgba(52, 74, 97, 0.1)',
    marginBottom: '0.6rem',
  },
  anchor: {
    marginTop: '-7.6rem',
    paddingTop: '7.6rem',
  },
  cardContent: {
    padding: '0.6rem',
  },
  title: {
    fontSize: '1rem',
    lineHeight: 1.4,
    marginBottom: '0.6rem',
    backgroundColor: 'rgba(52, 74, 97, 0.1)',

  },
  text: {
    textAlign: 'justify',
    lineHeight: 1.3,
    fontSize: '1rem',
    marginTop: '0.6rem',
  },
  media: {
    maxWidth: '26rem',
    margin: '0.6rem auto',
  },
});

export default function CardWithImage(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={3}>
      <Typography component="p" className={classes.anchor} id={props.cardBody.link}/>
      <CardContent >
        <Typography className={classes.title} variant="subtitle2" component="h2"
         >
          {props.cardBody.title}
        </Typography>
        <Typography variant="subtitle2" component="h3">
          {props.cardBody.customer}
        </Typography>
        <Typography className={classes.text} variant="body1" component="p">
          {props.cardBody.text}
        </Typography>

        {props.cardBody.images.map((image, index) => {
          return (
            <React.Fragment key={index}>
              <Typography className={classes.text} variant="body2" component="p" color="textSecondary">
                {image.text}
              </Typography>

              <CardMedia
                component="img"
                alt=""
                className={classes.media}
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
