import React from 'react';
import styled, { withTheme } from 'styled-components';
import UsersCounter from '../UsersCounter';
import Image from '../Image';
import Hashtags from './snippets/Hashtags'
import Title from './snippets/Title'
import Subtitle from './snippets/Subtitle'
import Text from './snippets/Text'

const Wrapper = styled.div`
  font-family: ${props => props.theme.fonts.headerTextFont};
  padding-top: 15%;
  position: relative;
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

      {/*<Logo 
        imgSrc={props.logoImgSrc} 
        imgAlt={props.logoImgAlt} 
        imgHeight={props.logoImgHeight} 
        imgWidth={props.logoImgWidth} /> */}

      <Title title={props.title}/>
      <Subtitle>{props.info}</Subtitle>
      <Text>{props.children}</Text>
      <UsersCounter
        count={props.count}
        imgSrc={props.countImgSrc}
        imgAlt={props.countImgAlt}
        imgHeight={props.countImgHeight}
        imgWidth={props.countImgWidth}
      >
      </UsersCounter>

      Participá subiendo tu foto a Twitter o Instagram con algunos de los hashtags oficiales:

      <Hashtags hashtags={props.hashtags}></Hashtags>

      <LeadClosing>¡Sumate a la marcha virtual!</LeadClosing>

    </Wrapper>
  );
}

export default withTheme(React.memo(Header));