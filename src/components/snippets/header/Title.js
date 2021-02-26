import React from 'react';
import styled from 'styled-components'

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`

const TitleStyles = styled.h1`
  font-family: ${props => props.theme.fonts.headerFont};
  width: 60%;
  font-size: 2.5em;
  font-weight: 700;
  color: ${props => props.theme.colors.light};
  position: relative;
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

const Title = (props) => {
    return (
        <TitleWrapper>
            <TitleStyles>{props.title}</TitleStyles>
        </TitleWrapper>
    );
};

export default Title;