import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { LanguageConsumer } from '../providers/LanguageProvider';
import ContentCard from './ContentCard';
import ActivitiesSlider from './ActivitiesSlider';
import pageStyles from './css/pageStyles';

export default function Home() {
  const classes = pageStyles();

  return (
    <LanguageConsumer>
      {(context) => (
        <Grid container spacing={1} justify="flex-end">
          <Grid item xs={12}>
            <div className={classes.headerCenter}>
              <span>{context.header.title1}</span>
              <span>{context.header.title2}</span>
            </div>
            <ActivitiesSlider className={classes.slider} content={context.home.ulContent} />
          </Grid>

          <Grid item xs={12}>
            <ContentCard
              link={context.home.cards[0].link}
              cardBody = {context.home.cards[0]}
              button={context.home.button} />
            <Typography className={classes.text} variant="subtitle2" component="h4" gutterBottom>
              {context.home.p1}
            </Typography>

            {context.projects.cards.map((card, index) => {
              return (
                <ContentCard key={index}
                link={`/projects#${card.link}`}
                cardBody = {card}
                button={context.home.button} />
              )
            })}

            <Typography className={classes.text} variant="subtitle2" component="h4" gutterBottom>
              {context.home.p2}
            </Typography>
            <ContentCard
              link={context.home.cards[1].link}
              cardBody={context.home.cards[1]}
              button={context.home.button} />

            <Typography className={classes.text} variant="body1" component="p" gutterBottom>
              {context.home.p3}
            </Typography>
          </Grid>
        </Grid>
      )}
    </LanguageConsumer>
  );
}
