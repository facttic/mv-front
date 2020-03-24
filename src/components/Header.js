import React from 'react';
import styled, { withTheme } from 'styled-components';
import UsersCounter from './UsersCounter';

const Wrapper = styled.div`
  padding: 1em 15px;
  position: relative;

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    padding: 2em 0;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.display};
  font-size: 2.7em;
  font-weight: 700;
  padding:.1em .5em;
  border-radius:.1em;
  margin: 0.25em 0;

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
`;

const SubTitle = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.display};
  font-size: 1.3em;
  font-weight: 700;
  //background-color:${props => props.theme.colors.primary};
  border-radius: .1em;
  margin: 0 auto 0.125em auto;


  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 0.875em;
    margin-bottom: 0.75em;
  }
`;

const Text = styled.p`
  text-align: center;  
  margin: 0;

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 0.875em;
  }

  span {
    display: inline-block;
  }
`;

const Header = (props) => {

  return (
    <Wrapper className="Header">
      <Title>{props.title}</Title>
      <SubTitle>{props.info}</SubTitle>
      <Text>{props.children}</Text>
      <UsersCounter count={props.count}></UsersCounter>
    </Wrapper>
  );
}

export default withTheme(React.memo(Header));