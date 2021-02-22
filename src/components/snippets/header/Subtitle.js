import React from 'react';
import styled from 'styled-components'

const SubtitleStyles = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.colors.light};
  border-radius: .1em;
  margin: 0 auto 10px auto;
  
  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    font-size: 1.125rem;
  }

  @media (max-width: ${props => props.theme.pageWidth.s}px) {
    font-size: 1.075em;
  }
`;

const Subtitle = (props) => {
    return (
        <SubtitleStyles>{props.info}</SubtitleStyles>        
    );
};

export default Subtitle;