import React from 'react';
import styled, { withTheme } from 'styled-components';

const Wrapper = styled.div`
  background-color: #ccc;
`;

const Image = styled.div`
  display:block;
  margin: 0 auto;
  height: 225px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const CardImage = (props) => {
  
  const imageSrc = (props.media.length > 0) ? props.media[0].media_url_https.replace(/\.jpg|\.png|\.gif/gi, '?format=jpg&name=small') : '';

  return (
    <Wrapper className="CardImage">
      <Image style={ { backgroundImage: 'url(' + imageSrc + ')'} } />
    </Wrapper>
  );
}

export default withTheme(React.memo(CardImage));