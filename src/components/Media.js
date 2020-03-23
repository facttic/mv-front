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
  position: relative;

  background-color: #eee;
  animation: in 500ms ease-in-out;
  
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

  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0;
    background: rgba(29, 161, 242, .75);
    pointer-events: none;
  }
  
  :hover {
    transition: all 150ms ease-in-out;
    transform: scale(2.5);
    position:relative;
    z-index: 2;
    box-shadow: 0 4px 6px -2px rgba(0,0,0,.5);
    
    ::after {
      transition: width 600ms linear;
      transition-delay: 200ms;
      width: 100%;
    }
  }
  
`;

const Image = styled.img`
  display:block;
  margin: 0;
  width: 100%;
  height: 100%;
`;

const Media = (props) => {

  let { tweet } = props;
  // let imageSrc = (tweet.media.length > 0) ? tweet.media[0].media_url_https.replace(/\.jpg|\.png|\.gif/gi, '?format=jpg&name=thumb') : '';
  const image = (tweet.media.length > 0) ? <Image alt="" src={tweet.media[0].media_url_thumb} width="150" height="150" /> : null;

  return (
    <ImageWrapper className="Media">
      <div onMouseEnter={(e) => props.enter(e, props.tweet)} onClick={(e) => props.click(e, props.tweet)} onMouseLeave={props.leave}>
        {/* <Image src={imageSrc} alt="" width="150" height="150" /> */}
        {image}
      </div>
    </ImageWrapper>
  );
}

export default withTheme(React.memo(Media));