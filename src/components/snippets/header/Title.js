import React from 'react';
import styled from 'styled-components'

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`

const TitleStyles = styled.h1`
  font-family: ${props => props.font || props.theme.styles.text.title.font};
  width: 60%;
  font-size: 3em;
  font-weight: 700;
  color: ${props => props.color || props.theme.styles.text.title.color};
  position: relative;
  padding: 0;
  margin: 20px 5px;
  text-align: center;
  text-shadow:#818181 0px 0px 2px;
  
  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 1.75em;
    width: 100%;
  }
  
  @media (max-width: ${props => props.theme.pageWidth.s}px) {
    font-size: 2.2em;
  }

  @media (max-width: ${props => props.theme.pageWidth.xs}px) {
    font-size: 1.7em;
  }
`;

const Title = (props) => {
    return (
        <TitleWrapper>
            <TitleStyles backgroundColor={props.backgroundColor} color={props.color} font={props.font}>{props.title}</TitleStyles>
        </TitleWrapper>
    );
};

export default Title;