import React from 'react';
import styled from 'styled-components'

const TextStyles = styled.p`
  font-family: ${props => props.font || props.theme.styles.text.subtitle.font};
  color: ${props => props.color || props.theme.styles.text.subtitle.color};
  text-align: center;  
  margin: 0;
  font-size: .975rem;
  line-height: 1.5;
  padding-top:50px;

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 0.975em;
  }
`;

const Text = (props) => {
    return (
            <TextStyles color={props.color} font={props.font}>{props.text}</TextStyles>
    );
};

export default Text;