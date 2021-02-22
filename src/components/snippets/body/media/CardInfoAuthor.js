import React from 'react';
import styled, { withTheme } from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 25px 1fr;
  grid-column-gap: 10px;
`;

const Image = styled.img`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 0;
  position: relative;
  top: 8px;
`;

const Name = styled.p`
  font-size: 0.75em;
  align-self: center;
`;

const NamePart = styled.span`
  display: inline-block;
`;

const CardInfoAuthor = (props) => {

  const profileSrc = props.source === 'instagram' ? require('../../../../assets/imgs/ig.jpg') : props.author.profile_image_url_https
  const profileLink = props.source === 'instagram' ? props.author.profile_image_url_https : `https://twitter.com/${props.author.screen_name}`
  const profileName = props.source === 'instagram' ? 'Ver en Instagram' : `@${props.author.screen_name}`

  return (
    <Wrapper className="CardInfoAuthor">
      <div><Image src={profileSrc} alt="" /></div>
      <Name className="author">
      {props.author.name !== '' && <span><NamePart>{props.author.name}</NamePart> - </span>}<NamePart><a href={profileLink} target="_blank" rel="noopener noreferrer">{profileName}</a></NamePart>
      </Name>
    </Wrapper>
  );
}

export default withTheme(React.memo(CardInfoAuthor));