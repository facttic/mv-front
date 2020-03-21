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

  return (
    <Wrapper className="CardInfoAuthor">
      <div><Image src={props.author.profile_image_url_https} alt="" /></div>
      <Name class="author">
        <NamePart>{props.author.name}</NamePart> - <NamePart><a href={'https://twitter.com/' + props.author.screen_name} target="_blank">@{props.author.screen_name}</a></NamePart>
      </Name>
    </Wrapper>
  );
}

export default withTheme(React.memo(CardInfoAuthor));