import React from 'react';
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
    
    // transform: scale(.9);
  :nth-child(odd) {
    // transform: scale(1) translateY(-10px);
  }
  
  :nth-child(3n + 5) {
    // transform: scale(.9) translateX(-5px);
  }

  // ${props => props.theme.columns.s}
  // border-bottom: 10px solid #eee;
  
  :nth-child(6n+1) { border-color: #77088a; background-color: #77088a; }
  :nth-child(6n+2) { border-color: #014cff; background-color: #014cff; }
  :nth-child(6n+3) { border-color: #01812a; background-color: #01812a; }
  :nth-child(6n+4) { border-color: #ffee02; background-color: #ffee02; }
  :nth-child(6n+5) { border-color: #ff8b00; background-color: #ff8b00; }
  :nth-child(6n+6) { border-color: #e50305; background-color: #e50305; }
  @media (min-width: ${props => props.theme.pageWidth.s}px) {
  }
  @media (min-width: ${props => props.theme.pageWidth.m}px) {
    :nth-child(12n+1), :nth-child(12n+2) { border-color: #77088a; background-color: #77088a; }
    :nth-child(12n+3), :nth-child(12n+4) { border-color: #014cff; background-color: #014cff; }
    :nth-child(12n+5), :nth-child(12n+6) { border-color: #01812a; background-color: #01812a; }
    :nth-child(12n+7), :nth-child(12n+8) { border-color: #ffee02; background-color: #ffee02; }
    :nth-child(12n+9), :nth-child(12n+10) { border-color: #ff8b00; background-color: #ff8b00; }
    :nth-child(12n+11), :nth-child(12n+12) { border-color: #e50305; background-color: #e50305; }
  }
  @media (min-width: ${props => props.theme.pageWidth.l}px) {
    // :nth-child(18n+1), :nth-child(18n+2), :nth-child(18n+3) { border-color: #77088a; background-color: #77088a; }
    // :nth-child(18n+4), :nth-child(18n+5), :nth-child(18n+6) { border-color: #014cff; background-color: #014cff; }
    // :nth-child(18n+7), :nth-child(18n+8), :nth-child(18n+9) { border-color: #01812a; background-color: #01812a; }
    // :nth-child(18n+10), :nth-child(18n+11), :nth-child(18n+12) { border-color: #ffee02; background-color: #ffee02; }
    // :nth-child(18n+13), :nth-child(18n+14), :nth-child(18n+15) { border-color: #ff8b00; background-color: #ff8b00; }
    // :nth-child(18n+16), :nth-child(18n+17), :nth-child(18n+18) { border-color: #e50305; background-color: #e50305; }
  }
  @media (min-width: ${props => props.theme.pageWidth.xl}px) {
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

const Image = styled.div`
  display:block;
  margin: 0;
  width: 150px;
  max-width: 100%;
  background-size: cover;
  background-color: inherit;
  // background-blend-mode: multiply;
  background-image: url(${props => props.src});
  // filter: grayscale(.5);

  ::after {
    content: "";
    display: block;
    width: 100%;
    padding-top: 100%;
    background-color: inherit;
    background-blend-mode: multiply;
    background-image: url(${props => props.src});
    background-size: cover;
    opacity: 0.65;
    filter: contrast(1.5);
    transition: opacity 400ms ease-in-out;
  }

  :hover {
    ::after {
      opacity: 0;
    }
  }
`;

const Media = (props) => {

  let { tweet } = props;
  // let imageSrc = (tweet.media.length > 0) ? tweet.media[0].media_url_https.replace(/\.jpg|\.png|\.gif/gi, '?format=jpg&name=thumb') : '';
  const image = (tweet.media.length > 0) ? <Image src={tweet.media[0].media_url_thumb} onMouseEnter={(e) => props.enter(e, props.tweet)} onClick={(e) => props.click(e, props.tweet)} onMouseLeave={props.leave} /> : null;

  return (
    <ImageWrapper className="Media">
      {image}
    </ImageWrapper>
  );
}

export default withTheme(React.memo(Media));