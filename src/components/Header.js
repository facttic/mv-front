import React from 'react';
import styled, { withTheme } from 'styled-components';
import UsersCounter from './UsersCounter';
import Image from './Image';

const Wrapper = styled.div`
  font-family: ${props => props.theme.fonts.headerTextFont};
  padding-top: 15%;
  position: relative;
  text-align: center;

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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.headerFont};
  width: 60%;
  font-size: 2.5em;
  font-weight: 700;
  color: ${props => props.theme.colors.light};
  position: relative;
  //padding: 0 0 8px 0;
  padding: 0;
  margin: 20px 5px;
  text-align: center;

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 1.75em;
  }
  
  @media (max-width: ${props => props.theme.pageWidth.s}px) {
    font-size: 1.5em;
  }

  @media (max-width: ${props => props.theme.pageWidth.xs}px) {
    font-size: 1.2em;
  }
`;

const SubTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.colors.light};
  border-radius: .1em;
  margin: 0 auto 10px auto;
  
  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 1.125rem;
  }

  @media (max-width: ${props => props.theme.pageWidth.s}px) {
    font-size: 1.075em;
  }
`;

const Text = styled.p`
  text-align: center;  
  margin: 0;
  font-size: .975rem;
  line-height: 1.5;

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 0.975em;
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

const HashtagsContainer = styled.div`
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Hashtag = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.primary};
  padding:5px;
  margin: 0 10px;
  font-weight: 700;

  @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
    margin-top: 10px;
  }
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

      <TitleWrapper>
        <Title>
          {props.title}
        </Title>
      </TitleWrapper>
      <SubTitle>{props.info}</SubTitle>
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
      <HashtagsContainer>
        <Hashtag>#AbortoLegal2020</Hashtag>
        <Hashtag> #EsUrgente</Hashtag>
        <Hashtag> #EsAhoraSenado</Hashtag>
      </HashtagsContainer>



      <LeadClosing>¡Sumate a la marcha virtual!</LeadClosing>

    </Wrapper>
  );
}

export default withTheme(React.memo(Header));