import React from 'react';
import styled from 'styled-components'

const TextStyles = styled.p`
  font-family: ${props => props.font || props.theme.styles.text.subtitle.font};
  color: ${props => props.color || props.theme.styles.text.subtitle.color};
  text-align: center;
  padding: 5px;  
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
  text-shadow:#818181 0px 0px 1px;

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 1.25em;
  }
`;

const Text = (props) => {
    return (
            <TextStyles textBackground={props.textBackground} color={props.color} font={props.font}>{props.text}</TextStyles>
    );
};

export default Text;