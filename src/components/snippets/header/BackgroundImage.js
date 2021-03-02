import React from 'react';
import styled from 'styled-components'


const BackgroundImage = (props) => {
    const ImageWrapper = styled.div`
        background-image: url(${props.background});
        background-size: cover;
        position: absolute;
        z-index:1;
        width: 100%;
        height: 500px;
        `
    return (
        <ImageWrapper></ImageWrapper>
    );
};

export default BackgroundImage;