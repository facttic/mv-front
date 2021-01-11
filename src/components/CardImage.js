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
  let sizes = (props.media.length > 0 && props.media[0].sizes) ? props.media[0].sizes : null
  if(Array.isArray(sizes)) sizes = sizes[0]
  
  const w = (sizes) ? sizes.small.w : '';
  const h = (sizes) ? sizes.small.h : '';
  const media = props.media[0].media_url_small;
  const image = (props.media.length > 0) ? <Image alt="" src={media} width={w} height={h} /> : null;

  return (
    <Wrapper className="CardImage">
      {/* <BGImage style={ { backgroundImage: 'url(' + image + ')'} } /> */}
      {/* <Image alt="" src={image} /> */}
      {image}
    </Wrapper>
  );
}

export default withTheme(React.memo(CardImage));