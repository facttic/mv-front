import React from 'react';
import styled from 'styled-components'

const ImageWrapper = styled.div`
background-image: url(${props =>props.background});
background-size: 70%;
background-repeat: no-repeat;
background-position:bottom;
position: absolute;
z-index:1;
width: 100%;
height: 100%;

@media (max-width: ${(props) => props.theme.pageWidth.l}px) {
    background-size: 130%;
  }

@media (max-width: ${(props) => props.theme.pageWidth.s}px) {
    background-size: 150%;
  }

`

const BackgroundImage = (props) => {
    return (
        <ImageWrapper background={props.background}></ImageWrapper>
    );
};

export default BackgroundImage;