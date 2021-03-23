import React from 'react';
import styled from 'styled-components'

const HashtagsContainer = styled.div`
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Hashtag = styled.h3`
  display: inline-block;
  font-family: ${props => props.font || props.theme.styles.text.subtitle.font};
  color: ${props => props.color || props.theme.styles.colors.background};
  background-color: ${props => props.containerColor || props.theme.styles.colors.accent};
  padding:5px 20px;
  margin: 0 10px;
  font-weight: 700;
  border-radius:70px;
  font-weight: 200;
  text-transform: uppercase;
  margin-top: 10px;

  @media (max-width: ${props => props.theme.pageWidth.xs}px) {
    font-size: .9em;
  }
`

const CleanHashtags = (hashtags) => {
  let receivedHashtags = []

  hashtags.forEach(hashtag => {
    receivedHashtags.push(hashtag.name)
  });

  let filteredHashtags = [...new Set(receivedHashtags)]
    return(filteredHashtags)
} 

const Hashtags = (props) => {

  return (
    <HashtagsContainer>
      {CleanHashtags(props.hashtags).map((hashtag, key) => 
        <Hashtag color={props.fontColor} containerColor={props.containerColor} font={props.font} key={key}> #{hashtag} </Hashtag>
        )} 
    </HashtagsContainer>
  );
};

export default Hashtags;