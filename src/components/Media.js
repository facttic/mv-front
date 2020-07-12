import React from 'react';
import styled, { withTheme } from 'styled-components';

const ImageWrapper = styled.div`
  transition: all 50ms ease-out;
  border-radius: 3px;
  overflow:hidden;
  cursor: pointer;
  position: relative;

  background-color: #eee;
  animation: in 500ms ease-in-out;

  border-bottom: 5px solid #eee;
  
  :nth-child(6n+1) { border-color: #a52a6d; background-color: #a52a6d; }
  :nth-child(6n+2) { border-color: #0068aa; background-color: #0068aa; }
  :nth-child(6n+3) { border-color: #009e48; background-color: #009e48; }
  :nth-child(6n+4) { border-color: #f0df00; background-color: #f0df00; }
  :nth-child(6n+5) { border-color: #ff7f19; background-color: #ff7f19; }
  :nth-child(6n+6) { border-color: #f52627; background-color: #f52627; }
  @media (min-width: ${props => props.theme.pageWidth.s}px) {
  }
  @media (min-width: ${props => props.theme.pageWidth.m}px) {
    :nth-child(12n+1), :nth-child(12n+2) { border-color: #a52a6d; background-color: #a52a6d; }
    :nth-child(12n+3), :nth-child(12n+4) { border-color: #0068aa; background-color: #0068aa; }
    :nth-child(12n+5), :nth-child(12n+6) { border-color: #009e48; background-color: #009e48; }
    :nth-child(12n+7), :nth-child(12n+8) { border-color: #f0df00; background-color: #f0df00; }
    :nth-child(12n+9), :nth-child(12n+10) { border-color: #ff7f19; background-color: #ff7f19; }
    :nth-child(12n+11), :nth-child(12n+12) { border-color: #f52627; background-color: #f52627; }
  }
  @media (min-width: ${props => props.theme.pageWidth.l}px) {
  }
  @media (min-width: ${props => props.theme.pageWidth.xl}px) {
    :nth-child(18n+1), :nth-child(18n+2), :nth-child(18n+3) { border-color: #a52a6d; background-color: #a52a6d; }
    :nth-child(18n+4), :nth-child(18n+5), :nth-child(18n+6) { border-color: #0068aa; background-color: #0068aa; }
    :nth-child(18n+7), :nth-child(18n+8), :nth-child(18n+9) { border-color: #009e48; background-color: #009e48; }
    :nth-child(18n+10), :nth-child(18n+11), :nth-child(18n+12) { border-color: #f0df00; background-color: #f0df00; }
    :nth-child(18n+13), :nth-child(18n+14), :nth-child(18n+15) { border-color: #ff7f19; background-color: #ff7f19; }
    :nth-child(18n+16), :nth-child(18n+17), :nth-child(18n+18) { border-color: #f52627; background-color: #f52627; }
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 0;
    background: rgba(35, 35, 35, .25);
    pointer-events: none;
  }

  :hover {
    transition: all 150ms ease-in-out;
    transform: translate3d(0,0,0) scale(2.5);
    position: relative;
    z-index: 2;
    box-shadow: 0 4px 6px -2px rgba(0,0,0,.5);
    border-bottom: 0;
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
  width: 150px;
  max-width: 100%;
  height: auto;
  opacity: 0.75;

  :hover {
    opacity: 1;
  }
`;

const Media = (props) => {

  let { tweet } = props;
  // let imageSrc = (tweet.media.length > 0) ? tweet.media[0].media_url_https.replace(/\.jpg|\.png|\.gif/gi, '?format=jpg&name=thumb') : '';
  const media = tweet.source === 'instagram' ? tweet.user.profile_image_url_https + '/media/?size=t' : tweet.media[0].media_url_thumb
  const image = (tweet.media.length > 0) ? <Image width="150" height="150" src={media} onMouseEnter={(e) => props.enter(e, props.tweet)} onClick={(e) => props.click(e, props.tweet)} onMouseLeave={props.leave} /> : null;

  return (
    <ImageWrapper className="Media">
      {image}
    </ImageWrapper>
  );
}

export default withTheme(React.memo(Media));