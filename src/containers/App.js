import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    dark: '#04090d',
    light: '#f8f8f8',
    primary: '#1ac69e'
  },
  fonts: {
    display: "'Saira', sans-serif",
    text: "'Work Sans', sans-serif"
  },
  pageWidth: {
    xl: 1200,
    l: 992,
    m: 768,
    s: 576
  },
  imgSize: {
    xl: 120,
    l: 992,
    m: 768,
    s: 576
  }
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  @media (min-width: ${theme.pageWidth.s}px) {
    max-width: ${theme.pageWidth.s}px;
  }
  @media (min-width: ${theme.pageWidth.m}px) {
    max-width: ${theme.pageWidth.m}px;
  }
  @media (min-width: ${theme.pageWidth.l}px) {
    max-width: ${theme.pageWidth.l}px;
  }
  @media (min-width: ${theme.pageWidth.xl}px) {
    max-width: ${theme.pageWidth.xl}px;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns:  1fr 
                          1fr 
                          1fr 
                          1fr 
                          1fr 
                          1fr 
                          1fr 
                          1fr 
                          1fr 
                          1fr 
                          1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const PictureWrapper = styled.div`
  border: 2px solid ${theme.colors.light};
  transition: all 100ms ease-in-out;

  :hover {
    border-color: ${theme.colors.dark};
  }

  &.highlighted {
    grid-column-start: 1;
    grid-column-end: span col4-start;
    grid-row-start: 2;
    grid-row-end: span 2;
  }
`;

const PictureBigWrapper = styled.div`
  border: 2px solid ${theme.colors.light};
  transition: all 100ms ease-in-out;

  :hover {
    border-color: ${theme.colors.dark};
  }

  
  grid-column-start: 1;
  grid-column-end: span col4-start;
  grid-row-start: 2;
  grid-row-end: span 2;
  
`;

const Picture = styled.img`
  display:block;
  margin: 0;
  width: 100%;
  height: 100%;
`;

let images = [];
let imageCount = 500;
for(let i = 0; i < imageCount; i++) {
  images[i] = "https://pbs.twimg.com/media/ETe4W6cXgAEeHEg.jpg";
}

class App extends Component {

  render() {

    let gallery = <Gallery>{images.map((img) => {
      return <PictureWrapper><Picture src={img.replace('.jpg', '?format=jpg&name=thumb')} alt="" /></PictureWrapper>;
    })}</Gallery>

    return (
      <Container className="App">
        <h1>#MarchemosEnInternet</h1>
        {gallery}
      </Container>
    );
  }
}

export default App;
