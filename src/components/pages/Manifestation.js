import React from "react";
import styled, {withTheme} from "styled-components";


import Header from "../snippets/header/template/Header";
import FeedGrid from '../snippets/body/template/FeedGrid'
import TweetCard from "../snippets/body/media/TweetCard";
import Preloader from "../snippets/body/Preloader";
import Footer from '../snippets/body/Footer'
import Sponsors from "../snippets/body/Sponsors";

const headerBackgroundTemplate= require('../../assets/imgs/Header.jpg')

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  background-color:${ props => props.backgroundColor || props.theme.styles.colors.background};
  background-image: url(${props =>props.backgroundImage});
  background-size: auto 100%;
`;

const GridContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  
  @media (min-width: ${props => props.theme.pageWidth.s}px) {
    max-width: ${props => props.theme.pageWidth.s}px;
  }
  @media (min-width: ${props => props.theme.pageWidth.m}px) {
    max-width: ${props => props.theme.pageWidth.m}px;
  }
  @media (min-width: ${props => props.theme.pageWidth.l}px) {
    max-width: ${props => props.theme.pageWidth.l}px;
  }
  @media (min-width: ${props => props.theme.pageWidth.xl}px) {
    max-width: ${props => props.theme.pageWidth.xl}px;
  }
  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    padding: 0 18px;
  }
`;

const Manifestation = (props) => {


  if (props.loadingManifestation) {
    return <Preloader></Preloader>;
  }

  return (
    <Background 
      backgroundColor={props.backgroundColor}
      backgroundImage={props.backgroundImage}
      onScroll={props.onScroll}>

        <Header
          title={props.title}
          subtitle={props.subtitle}
          background={props.background !== "" ? props.background : headerBackgroundTemplate }
          logoImgAlt={props.logoImgAlt}
          count={props.count}
          countImgSrc=""
          text={props.text}
          hashtags={props.hashtags}
          
          /*STYLES*/ 

          titleColor={props.titleColor}
          titleFont={props.titleFont}
          subtitleColor={props.subtitleColor}
          subtitleFont={props.subtitleFont}
          textColor={props.textColor}
          textFont={props.textFont}
          hashtagFontColor={props.hashtagFontColor}
          hashtagContainerColor={props.hashtagContainerColor}
          hashtagFont={props.hashtagFont}
          counterColor={props.counterColor}
          counterFont={props.counterFont}
          leadClosingColor={props.leadClosingColor}
          leadClosingFont={props.leadClosingFont}
        ></Header>

          
      <Sponsors 
          sponsors={props.sponsors}
          sponsorsColor={props.sponsorsColor}
          sponsorsFont={props.sponsorsFont}
          ></Sponsors>

        <GridContainer className="grid-container"> 
          <FeedGrid 
            columns={props.columns} 
            posts={props.posts}
            mouseClickHandler={props.mouseClickHandler}
            mouseEnterHandler={props.mouseEnterHandler}
            mouseLeaveHandler={props.mouseLeaveHandler}
            >

          </FeedGrid>

          {props.loading && <Preloader />}
          
          {props.currentTweet && <TweetCard
            isAuthenticated={props.isAuthenticated}
            currentTweet={props.currentTweet}
            container={props.container}
            closeCard={props.closeCard}
            deleteTweet={props.deleteTweet}
            banUser={props.banUser} />}
      </GridContainer>

      <Footer footerText={props.footerText}></Footer>
    
    </Background>
);
  
}

export default withTheme(Manifestation);

