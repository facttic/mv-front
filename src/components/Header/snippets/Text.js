import React from 'react';
import styled from 'styled-components'

const TextStyles = styled.p`
  text-align: center;  
  margin: 0;
  font-size: .975rem;
  line-height: 1.5;

  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 0.975em;
  }
`;

const Text = (props) => {
    return (
            <TextStyles>{props.children}</TextStyles>
    );
};

export default Text;