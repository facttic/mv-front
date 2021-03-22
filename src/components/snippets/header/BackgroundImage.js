import React from 'react';
import styled from 'styled-components'

const ImageWrapper = styled.div`
background-image: url(${props =>props.background});
background-size: cover;
background-repeat: no-repeat;
background-position:bottom;
position: absolute;
z-index:1;
width: 100%;
height: 100%;
`

const BackgroundImage = (props) => {
    return (
        <ImageWrapper background={props.background}></ImageWrapper>
    );
};

export default BackgroundImage;