import React, { useEffect } from 'react';
import styled, { withTheme } from 'styled-components';

const ImageWrapper = styled.div`
  // border: 3px solid ${props => props.theme.colors.light};
  // border-bottom-width: 6px;
  // filter: grayscale(50%);
  // box-shadow: 0 3px 4px -1px rgba(0,0,0,.35);
  transition: all 50ms ease-out;
  border-radius: 3px;
  overflow:hidden;
  cursor: pointer;
  // opacity: 0.65;
  
  // &:first-child {
    //   grid-column: 3 / span 8;
    //   grid-row: 2 / span 2;
    //   justify-self: center;
    //   align-self: center;
    // }
    
    transform: scale(.9);
  :nth-child(odd) {
    transform: scale(1) translateY(-10px);
  }
  
  :nth-child(3n + 5) {
    transform: scale(.9) translateX(-5px);
  }
  
  :hover {
    transition: all 150ms ease-in-out;
    transform: scale(2.5);
    position:relative;
    z-index: 2;
    box-shadow: 0 4px 6px -2px rgba(0,0,0,.65);
    // opacity: 1;
  }

`;

const Image = styled.img`
  display:block;
  margin: 0;
  width: 100%;
  height: 100%;
`;

const Media = (props) => {

  useEffect(() => {
    console.log("pic")
  })

  let { tweet } = props;
  let imageSrc = (tweet.media.length > 0) ? tweet.media[0].media_url_https.replace(/\.jpg|\.png|\.gif/gi, '?format=jpg&name=thumb') : '';

  return (
    <ImageWrapper className="Media">
      <div onClick={(e) => props.click(e, props.tweet)}>
        <Image src={imageSrc} />
      </div>
    </ImageWrapper>
  );
}

export default withTheme(React.memo(Media));