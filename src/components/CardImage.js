import React from 'react';
import styled, { withTheme } from 'styled-components';

const Wrapper = styled.div`
  background-color: #ccc;
  min-height: 50px;
`;

const BGImage = styled.div`
  display:block;
  margin: 0 auto;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Image = styled.img`
  display:block;
  margin: 0;
  width: 100%;
  height: auto;
`;

const CardImage = (props) => {
  
  const imageSrc = (props.media.length > 0) ? props.media[0].media_url_https.replace(/\.jpg|\.png|\.gif/gi, '?format=jpg&name=small') : '';

  return (
    <Wrapper className="CardImage">
      {/* <BGImage style={ { backgroundImage: 'url(' + imageSrc + ')'} } /> */}
      <Image alt="" src={imageSrc} />
    </Wrapper>
  );
}

export default withTheme(React.memo(CardImage));