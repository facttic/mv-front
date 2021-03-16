import React from 'react';
import styled from 'styled-components'

const SubtitleStyles = styled.p`
  font-family: ${props => props.font || props.theme.styles.text.subtitle.font};
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: ${props => props.color || props.theme.styles.text.subtitle.color};
  border-radius: .1em;
  margin: 0 auto 10px auto;
  text-shadow:#818181 0px 0px 1px;
  
  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 1.5rem;
  }

  @media (max-width: ${props => props.theme.pageWidth.s}px) {
    font-size: 1.5em;
  }
`;

const Subtitle = (props) => {
    return (
        <SubtitleStyles font={props.font} color={props.color}>{props.subtitle}</SubtitleStyles>        
    );
};

export default Subtitle;