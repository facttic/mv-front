import React from 'react';
import styled, { withTheme } from 'styled-components';
import UsersCounter from './UsersCounter';
import Image from './Image';

const Wrapper = styled.div`
  padding: 1em 0;
  position: relative;
  text-align: center;

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    padding: 2em 0;
  }

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    padding: 1.5em 0;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.display};
  font-size: 2.5em;
  font-weight: 700;
  color: ${props => props.theme.colors.light};
  position: relative;
  padding: 0 0 8px 0;
  margin: 20px 5px;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    display: block;    
    width: 100%;
    height: 3px;
    left: 0;
    right: 0;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    background-image: ${props => props.theme.colors.gradientRainbow};
    background-size: 100%;
  }

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 1.75em;
  }
  
  @media (max-width: ${props => props.theme.pageWidth.s}px) {
    font-size: 1.5em;
  }
`;

const SubTitle = styled.p`
  font-family: ${props => props.theme.fonts.text};
  font-size: 1.125rem;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.colors.light};
  border-radius: .1em;
  margin: 0 auto 10px auto;
  
  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 1.125rem;
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
  @media (max-width: ${props => props.theme.pageWidth.s}px) {
    height: 180px;
  }
`

const Header = (props) => {

  return (
    <Wrapper className="Header">
      <Logo 
        imgSrc={props.logoImgSrc} 
        imgAlt={props.logoImgAlt} 
        imgHeight={props.logoImgHeight} 
        imgWidth={props.logoImgWidth} />
      <TitleWrapper>
        <Title>
          {props.title}
        </Title>
      </TitleWrapper>
      <SubTitle>{props.info}</SubTitle>
      <Text>{props.children}</Text>
      <UsersCounter
        count={props.count}
        countImgSrc={props.countImgSrc}
        countImgAlt={props.countImgAlt}
        countImgHeight={props.countImgHeight}
        countImgWidth={props.countImgWidth}
      >
      </UsersCounter>
    </Wrapper>
  );
}

export default withTheme(React.memo(Header));