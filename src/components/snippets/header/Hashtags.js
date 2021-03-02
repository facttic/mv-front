import React from 'react';
import styled from 'styled-components'

const HashtagsContainer = styled.div`
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Hashtag = styled.h3`
display: inline-block;
  color: ${props => props.theme.styles.colors.background};
  background-color: ${props => props.theme.styles.colors.accent};
  padding:5px 20px;
  margin: 0 10px;
  font-weight: 700;

  @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
    margin-top: 10px;
  }
`

const Hashtags = (props) => {

  return (
    <HashtagsContainer>
      {props.hashtags.map(hashtag => <Hashtag> #{hashtag} </Hashtag>)} 
    </HashtagsContainer>
  );
};

export default Hashtags;