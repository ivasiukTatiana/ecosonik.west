import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Helmet} from 'react-helmet';

import { LanguageConsumer } from '../providers/LanguageProvider';
import ContentCard from './ContentCard';
import ActivitiesSlider from './ActivitiesSlider';
import pageStyles from './css/pageStyles';

import styled, { keyframes } from "styled-components";
import zoomIn from 'react-animations/lib/zoom-in';
const ZoomInAnimation = keyframes`${zoomIn}`;
const ZoomInTitle = styled.div`
  animation: 1s ${ZoomInAnimation} ease-in;
`;
const ZoomInSub = styled.div`
  animation: 1 3s ${ZoomInAnimation} ease-in;
`;

export default function Home() {
  const classes = pageStyles();

  return (
    <div>
    <Helmet>
      <title>Ekosonic-West - cопла Вентури, стенды поверки бытовых и промышленных счетчиков газа</title>
      <meta name="description" content="Проектирование и разработка специализированного метрологического оборудования в сфере измерения расхода и объема газа, изготовление сопел Вентури критического истечения, проектирование и изготовление стендов для поверки бытовых и промышленных счетчиков газа, модернизация восстановление метрологического оборудования" />
    </Helmet>

    <LanguageConsumer>
      {(context) => (
        <Grid container spacing={1}>
          <Grid item xs={12} className={classes.about}>
            <ZoomInTitle>
              <div className={classes.headerCenter}>
                <span>{context.header.title1}</span>
                <span>{context.header.title2}</span>
              </div>
            </ZoomInTitle>
            <ActivitiesSlider className={classes.slider} content={context.home.ulContent} />
          </Grid>

          <div className={classes.home}>
            <ZoomInSub>
              <Typography className={`${classes.title} ${classes.indent}`} variant="subtitle2" component="h4">
                {context.home.p1}
              </Typography>
            </ZoomInSub>

            <Grid container item xs={12} spacing={1}>
              <Grid item xs={12}>
                <ContentCard
                  link={context.home.cards[0].link}
                  cardBody = {context.home.cards[0]}
                  button={context.home.button} />
              </Grid>

              {context.projects.cards.map((card, index) => {
                return (
                  <Grid item sm={6} xs={12} key={index}>
                    <ContentCard link={`/projects#${card.link}`}
                      cardBody = {card}
                      button={context.home.button}
                      direction="column" />
                  </Grid>
                )
              })}

              <Grid item xs={12}>
                <Typography className={`${classes.title} ${classes.indent}`} variant="subtitle2" component="h4">
                  {context.home.p2}
                </Typography>
                <ContentCard
                  link={context.home.cards[1].link}
                  cardBody={context.home.cards[1]}
                  button={context.home.button} />
              </Grid>
              <Typography className={`${classes.text} ${classes.indent}`} variant="subtitle2" component="p" gutterBottom>
                {context.home.p3}
              </Typography>
            </Grid>
          </div>
        </Grid>
      )}
    </LanguageConsumer>
    </div>
  );
}
