import React from "react";
import styled, { withTheme } from "styled-components";
import { Img } from "react-image";
import fallbackImage from "../../../../assets/imgs/placeholder.jpg";

const ImageWrapper = styled.div`
  transition: all 50ms ease-out;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  max-height: 70px;
  overflow: hidden;
  animation: in 500ms ease-in-out;

  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0;
    background: ${(props) => props.theme.styles.colors.accent};
    opacity: 0.75;
    pointer-events: none;
  }

  :hover {
    transition: all 150ms ease-in-out;
    transform: translate3d(0, 0, 0) scale(2.5);
    position: relative;
    z-index: 2;
    box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.5);
    border-bottom: 0;
    ::after {
      transition: width 600ms linear;
      transition-delay: 200ms;
      width: 100%;
    }
  }

  @media (max-width: ${(props) => props.theme.pageWidth.xl}px) {
    max-height: 65px;
  }

  @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
    max-height: 75px;
  }

  @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
    max-height: 80px;
  }

  @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
    max-height: 65px;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0;
  width: 150px;
  max-width: 100%;
  height: auto;
  filter: grayscale(80%) contrast(120%);

  :hover {
    filter: none;
  }
`;

const Media = (props) => {
  let { tweet } = props;
  // let imageSrc = (tweet.media.length > 0) ? tweet.media[0].media_url_https.replace(/\.jpg|\.png|\.gif/gi, '?format=jpg&name=thumb') : '';
  const media = tweet.media[0].media_url_thumb;
  const image =
    tweet.media.length > 0 ? (
      <Image
        width="150"
        height="150"
        src={media}
        onMouseEnter={(e) => props.enter(e, props.tweet)}
        onClick={(e) => props.click(e, props.tweet)}
        onMouseLeave={props.leave}
        loading="lazy"
        onError={e => e.target.src = fallbackImage}
      />
    ) : null;

  return <ImageWrapper className="Media">{image}</ImageWrapper>;
};

export default withTheme(React.memo(Media));
