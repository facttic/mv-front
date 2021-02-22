import React from 'react';
import styled, { withTheme } from 'styled-components';
import UsersCounter from '../UsersCounter';
import Image from '../Image';
import Hashtags from '../Hashtags'
import Title from '../Title'
import Subtitle from '../Subtitle'
import Text from '../Text'
import BackgroundImage from '../BackgroundImage';

const Wrapper = styled.div`
  font-family: ${props => props.theme.fonts.headerTextFont};
  position: relative;
  text-align: center;
  color:#FFFFFF;

`;

const TextWrapper = styled.div`
  font-family: ${props => props.theme.fonts.headerTextFont};
  padding-top: 15%;
  position: relative;
  z-index: 2;
  text-align: center;
  color:#FFFFFF;

  @media (max-width: ${props => props.theme.pageWidth.l}px) {
    padding-top: 25%;
  }

  @media (max-width: ${props => props.theme.pageWidth.s}px) {
    padding-top: 35%;
  }

  @media (max-width: ${props => props.theme.pageWidth.xs}px) {
    padding-top: 37%;
  }

`;

const Logo = styled(Image)`
  opacity: .85;
  /*@media (max-width: ${props => props.theme.pageWidth.s}px) {
    height: 180px;

  }
  
  @media (max-width: ${props => props.theme.pageWidth.xs}px) {
    height: 155px;
  }*/
`

const LeadClosing = styled.span`
  display: block;
`

const Header = (props) => {

  return (
    <Wrapper className="Header">
      <BackgroundImage background={props.background} />
      <TextWrapper>
        {/*<Logo 
        imgSrc={props.logoImgSrc} 
        imgAlt={props.logoImgAlt} 
        imgHeight={props.logoImgHeight} 
        imgWidth={props.logoImgWidth} /> */}
        
        <Title title={props.title} />
        <Subtitle>{props.info}</Subtitle>

        <UsersCounter
          count={props.count}
          imgSrc={props.countImgSrc}
          imgAlt={props.countImgAlt}
          imgHeight={props.countImgHeight}
          imgWidth={props.countImgWidth} />

        <Text text={props.text} />

        <Hashtags hashtags={props.hashtags} />

        <LeadClosing>¡Sumate a la marcha virtual!</LeadClosing>
      </TextWrapper>
    </Wrapper>
  );
}

export default withTheme(React.memo(Header));