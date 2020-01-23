import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled, { keyframes } from "styled-components";
import fadeInRight from 'react-animations/lib/fade-in-right';
import fadeIn from 'react-animations/lib/fade-in';

import { LanguageConsumer } from '../providers/LanguageProvider';
import ContentNav from './ContentNav';
import CardWithImage from './CardWithImage';
import pageStyles from './css/pageStyles';

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInRightAnimation = keyframes`${fadeInRight}`;
const FadeInDiv = styled.div`
animation: 1s ${FadeInRightAnimation} ease-in;
  @media screen and (max-width: 959px) {
    animation: 0.5s ${FadeInAnimation} ease-in;
  }
`;

export default function Products() {
  const classes = pageStyles();

  return (
    <LanguageConsumer>
      {(context) => (
        <Grid container spacing={1} justify="space-around">
          <Grid item xs={1} md={3}>
            <ContentNav
              title={
                context.header.navigation.filter((item) => {
                  return item.hasOwnProperty("products");
                }).map((item) => { return item.products; })
              }
              navigation={context.products.navigation} />
          </Grid>

          <Grid item xs={11} md={9} className={classes.paperContent} id="products">
            <FadeInDiv>
              <Typography className={classes.title} variant="subtitle2" component="h2" >
                {context.products.h2}
              </Typography>
              {context.products.cards.map((card, index) => {
                return (
                  <CardWithImage key={index} cardBody={card} />
                )
              })}
            </FadeInDiv>
          </Grid>
        </Grid>
      )}
    </LanguageConsumer>
  );
}
