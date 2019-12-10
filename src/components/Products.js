import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { LanguageConsumer } from '../providers/LanguageProvider';
import ContentNav from './ContentNav';
import CardWithImage from './CardWithImage';
import useStyles from './css/pageStyles';

export default function Products() {
  const classes = useStyles();

  return (
    <LanguageConsumer>
      {(context) => (
        <Grid container spacing={1} justify="space-between">
          <Grid item xs={3}>
            <ContentNav
              title={
                context.header.navigation.filter((item) => {
                  return item.hasOwnProperty("products");
                }).map((item) => { return item.products; })
              }
              navigation={context.products.navigation}
              classItem="navItem" />
          </Grid>

          <Grid item xs={9}>
            <Paper className={classes.paperContent} elevation={7}>
              <Typography className={classes.title} variant="subtitle2" component="h2" id="products">
                {context.products.h2}
              </Typography>
              {context.products.cards.map((card, index) => {
                return (
                  <CardWithImage key={index} cardBody={card} />
                )
              })}

            </Paper>
          </Grid>
        </Grid>
      )}
    </LanguageConsumer>
  );
}
