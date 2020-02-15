import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Helmet} from 'react-helmet';

import { LanguageConsumer } from '../providers/LanguageProvider';
import ContentNav from './ContentNav';
import CardWithImage from './CardWithImage';
import pageStyles from './css/pageStyles';
import scrollHandler from '../utilities/scroll-handler';

import styled, { keyframes } from "styled-components";
import fadeIn from 'react-animations/lib/fade-in';
import fadeInRight from 'react-animations/lib/fade-in-right';
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInRightAnimation = keyframes`${fadeInRight}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInRightAnimation} ease-in;
  @media screen and (max-width: 959px) {
    animation: 0.5s ${FadeInAnimation} ease-in;
  }
`;

export default function Projects() {
  const classes = pageStyles();

  scrollHandler(classes);

  return (
    <div>
    <Helmet>
      <title>Модернизация грузокольцевых установок, Установки для поверки промышленных газовых счетчиков на рабочих эталонах</title>
      <meta name="description" content="Модернизация грузокольцевых установок ГКУ 0.63 ГКУ 0.25 ГКУ 0.063, Установки на эталонных счетчиках типа ТЕМПО-3, Установки для поверки промышленных газовых счетчиков на рабочих эталонах" />
    </Helmet>
    <LanguageConsumer>
      {(context) => (
        <Grid container spacing={1}>
          <Grid item xs={1} md={3} id="contentNav">
            <ContentNav
              title={
                context.header.navigation.filter((item) => {
                  return item.hasOwnProperty("projects");
                }).map((item) => { return item.projects; })
              }
              navigation={context.projects.navigation} />
          </Grid>

          <Grid item xs={11} md={9} className={classes.paperContent} id="projects">
            <FadeInDiv>
              <Typography className={classes.title} variant="subtitle2" component="h2">
                {context.projects.h2}
              </Typography>

              {context.projects.cards.map((card, index) => {
                return (
                  <div key={index} className={classes.cardWrapper} id={card.link}>
                    <CardWithImage  cardBody={card} />
                  </div>
                )
              })}
            </FadeInDiv>
          </Grid>
        </Grid>
      )}
    </LanguageConsumer>
    </div>
  );
}
