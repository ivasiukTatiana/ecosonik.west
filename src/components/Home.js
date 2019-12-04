import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { LanguageConsumer } from '../providers/LanguageProvider';
import ContentNav from './ContentNav';
import ContentCard from './ContentCard';
import useStyles from './css/useStyles';

export default function Home() {

  //const [spacing, setSpacing] = React.useState(2);
  /*const handleChange = event => {
    setSpacing(Number(event.target.value));
  };*/

  const classes = useStyles();

  return (
    <LanguageConsumer>
      {(context) => (
        <Grid container spacing={1} justify="space-between" alignItems="stretch">
          <Grid item xs={3}>
            <ContentNav
              title={context.header.navigation[0]}
              navigation={context.home.navigation}
              classItem="navItem" />
          </Grid>

          <Grid item xs={9} className={classes.gridContent}>
            <Paper className={classes.paperContent} elevation={7}>
              <Typography className={classes.text} variant="body1" component="p" gutterBottom>
                {context.home.p1}
              </Typography>
              <Typography className={classes.title} variant="subtitle2" component="h2" id="activities">
                {context.home.h2}
              </Typography>
              <ul>
                {context.home.ulContent.map((item, index) => {
                  return (
                    <li key={index} className={classes.listItem}>{item}</li>
                  )
                })}
              </ul>
              <ContentCard
                link={context.home.cards[0].link}
                cardBody = {context.home.cards[0]}
                button={context.home.button} />
              <Typography className={classes.text} variant="body1" component="p" gutterBottom>
                {context.home.p2}
              </Typography>

              {context.home.cards.map((card, index) => {
                if (index > 0) {
                  return (
                    <ContentCard key={index}
                    link={card.link}
                    cardBody = {card}
                    button={context.home.button} />
                  )
                } else {
                  return <React.Fragment key={index} />
                }
              })}

              <Typography className={classes.text} variant="body1" component="p" gutterBottom>
                {context.home.p3}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      )}
    </LanguageConsumer>
  );
}