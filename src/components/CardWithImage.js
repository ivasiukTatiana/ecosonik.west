import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Slider from 'infinite-react-carousel';

import Table from './Table';

const useStyles = makeStyles(theme => ({
  card: {
    //backgroundColor: 'rgba(52, 74, 97, 0.1)',
    marginBottom: '0.6rem',
  },
  anchor: {
    marginTop: '-6rem',
    paddingTop: '6rem',
    [theme.breakpoints.down('750')]: {
      marginTop: '-5rem',
      paddingTop: '5rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-4rem',
      paddingTop: '4rem',
    },
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
    lineHeight: 1.4,
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
    [theme.breakpoints.up('1200')]: {
      maxWidth: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90%',
    },
  },
  bigmedia: {
    maxWidth: '95%',
    margin: '0.6rem auto',
  },
  arrows: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    zIndex: 5,
    color: '#000038',
    fontSize: '2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
    "& div": {
      width: '1.5rem',
      height: '1.5rem',
      padding: '0.1rem',
      border: '2px solid #000038',
      borderRadius: '50%',
      lineHeight: 0.5,
      [theme.breakpoints.down('xs')]: {
        width: '1.1rem',
        height: '1.1rem',
        border: '1px solid #000038',
      },
    }
  },
  nextArrow: {
    right: 0,
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
  const ImageSlide = (props) => {
    return (
      <React.Fragment>
        <Typography className={classes.text} variant="body2" component="p" color="textSecondary">
          {props.image.text}
        </Typography>

        <CardMedia
          component="img"
          alt={props.image.alt}
          className={classes[props.image.class]}
          image={props.image.image}
          title={props.image.text}
        />
      </React.Fragment>
    )
  }
  const PrevArrow = (props) => {
    const {onClick} = props
    return (
      <div className={classes.arrows} onClick={onClick}>
        <div>&lt;</div>
      </div>
    )
  }
  const NextArrow = (props) => {
    const {onClick} = props
    return (
      <div className={`${classes.arrows} ${classes.nextArrow}`} onClick={onClick}>
        <div>&gt;</div>
      </div>
    )
  }
  const ImagesSlider = () => {
    if (props.cardBody.images.length > 1) {
      const settings =  {
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        autoplay: false,
        dots: false,
        //className: props.className,
      };
      return (
        <div>
          <Slider { ...settings }>
            {props.cardBody.images.map((image, index) => {
              return (
                <div key={index}>
                  <ImageSlide image={image} />
                </div>
              )
            })}
          </Slider>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          {props.cardBody.images.map((image, index) => {
            return (
              <ImageSlide image={image} key={index} />
            )
          })}
        </React.Fragment>
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
        <ImagesSlider />
      </CardContent>
    </Card>
  );
}
