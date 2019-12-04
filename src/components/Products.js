import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { LanguageConsumer } from '../providers/LanguageProvider';
import ContentNav from './ContentNav';
//import CardWithImage from './CardWithImage';
import useStyles from './css/useStyles';

export default function Products() {
  const classes = useStyles();

  return (
    <LanguageConsumer>
      {(context) => (
        <Grid container spacing={1} justify="space-between" alignItems="stretch">
          <Grid item xs={3}>
            <ContentNav
              title={context.header.navigation[1]}
              navigation={[]}
              classItem="navItem" />
          </Grid>

          <Grid item xs={9} className={classes.gridContent}>
            <Paper className={classes.paperContent} elevation={7}>
              <Typography className={classes.title} variant="subtitle2" component="h2" id="products">
                Products
              </Typography>


            </Paper>
          </Grid>
        </Grid>
      )}
    </LanguageConsumer>
  );
}
