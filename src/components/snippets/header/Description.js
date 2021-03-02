import React from 'react';
import styled from 'styled-components'

const DescriptionStyles = styled.p`
  font-family:${props => props.theme.styles.text.subtitle.font};
  font-size: 1.125rem;
  text-align: center;
  color: ${props => props.theme.styles.text.subtitle.color};
  border-radius: .1em;
  margin: 0 auto 10px auto;
  
  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 1.125rem;
  }

  @media (max-width: ${props => props.theme.pageWidth.s}px) {
    font-size: 1.075em;
  }
`;

const Description = (props) => {
    return (
        <DescriptionStyles> {props.description} </DescriptionStyles>
    );
};

export default Description;
