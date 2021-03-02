import React from 'react';
import styled from 'styled-components'

const TextStyles = styled.p`
  font-family: ${props => props.theme.styles.text.subtitle.font};
  color: ${props => props.theme.styles.text.subtitle.color};
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
            <TextStyles>{props.text}</TextStyles>
    );
};

export default Text;