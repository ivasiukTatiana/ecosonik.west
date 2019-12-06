import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { LanguageConsumer } from '../providers/LanguageProvider';
import ContentNav from './ContentNav';
import CardWithImage from './CardWithImage';
import useStyles from './css/pageStyles';

export default function Projects() {
  const classes = useStyles();

  return (
    <LanguageConsumer>
      {(context) => (
        <Grid container spacing={1} justify="space-between" alignItems="stretch">
          <Grid item xs={3}>
            <ContentNav
              title={context.header.navigation[3]}
              navigation={context.projects.navigation}
              classItem="fontSmall" />
          </Grid>

          <Grid item xs={9} className={classes.gridContent}>
            <Paper className={classes.paperContent} elevation={7}>
              <Typography className={classes.title} variant="subtitle2" component="h2" id="projects">
                {context.projects.h2}
              </Typography>

              {context.projects.cards.map((card, index) => {
                return (
                  <CardWithImage key={index}
                  cardBody={card}
                  button={context.projects.button} />
                )
              })}
            </Paper>
          </Grid>
        </Grid>
      )}
    </LanguageConsumer>
  );
}
