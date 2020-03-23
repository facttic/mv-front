import React from 'react';
import styled, { withTheme } from 'styled-components';

const Wrapper = styled.div`
  background-color: #ccc;
`;

// const BGImage = styled.div`
//   display:block;
//   margin: 0 auto;
//   background-size: contain;
//   background-position: center center;
//   background-repeat: no-repeat;
// `;

const Image = styled.img`
  display:block;
  margin: 0;
  width: 100%;
  height: auto;
`;

const CardImage = (props) => {
  
  // const imageSrc = (props.media.length > 0) ? props.media[0].media_url_https.replace(/\.jpg|\.png|\.gif/gi, '?format=jpg&name=small') : '';
  const w = (props.media.length > 0 && props.media[0].sizes) ? props.media[0].sizes.small.w : '';
  const h = (props.media.length > 0 && props.media[0].sizes) ? props.media[0].sizes.small.h : '';
  const image = (props.media.length > 0) ? <Image alt="" src={props.media[0].media_url_small} width={w} height={h} /> : null;

  return (
    <Wrapper className="CardImage">
      {/* <BGImage style={ { backgroundImage: 'url(' + image + ')'} } /> */}
      {/* <Image alt="" src={image} /> */}
      {image}
    </Wrapper>
  );
}

export default withTheme(React.memo(CardImage));