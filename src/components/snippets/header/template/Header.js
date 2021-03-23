import React from 'react';
import styled, { withTheme } from 'styled-components';
import UsersCounter from '../UsersCounter';
import Hashtags from '../Hashtags'
import Title from '../Title'
import Subtitle from '../Subtitle'
import Text from '../Text'
import BackgroundImage from '../BackgroundImage';

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  color:#FFFFFF;
  padding-bottom: 15%;

  @media (max-width: ${props => props.theme.pageWidth.l}px) {
    padding-bottom: 30%;
  }

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    padding-bottom: 40%;
  }
`;

const TextWrapper = styled.div`
  //padding-top: 5%;
  position: relative;
  z-index: 2;
  text-align: center;
  margin: 0 auto;
  width: 90%;

    
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
`;

const LeadClosing = styled.span`
  font-family: ${props => props.font};
  color: ${props => props.color};
  display: block;
  text-shadow:#818181 0px 0px 1px;
  margin-top: 20px;
  font-size:1.25em;

  @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
    font-size:1em;
  }
`

const Header = (props) => {

  return (
    <Wrapper className="Header">
      <BackgroundImage background={props.background} />
      <TextWrapper>  
        <Title 
          title={props.title} 
          color= {props.titleColor}
          font={props.titleFont}
          />
        <Subtitle 
          subtitle={props.subtitle}
          color={props.subtitleColor}
          font={props.subtitleFont}
          />

        <Text 
          text={props.text} 
          color={props.textColor}
          font={props.textFont}
          />

        <Hashtags 
          hashtags={props.hashtags} 
          fontColor={props.hashtagFontColor}
          containerColor={props.hashtagContainerColor}
          font={props.hashtagFont}
          />

        <UsersCounter
          count={props.count}
          imgSrc={props.countImgSrc} 
          color={props.counterColor}
          font={props.counterFont}
          />
          
        <LeadClosing
          color={props.leadClosingColor}
          font={props.leadClosingFont}
        >¡Sumate a la marcha virtual!</LeadClosing>

      </TextWrapper>
    </Wrapper>
  );
}

export default withTheme(React.memo(Header));