import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';

import data from '../assets/data/tweets.json';

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
  columns: {
    xl: 12,
    l: 15,
    m: 10,
    s: 5
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
  grid-template-columns: ${(('----------------------------------------').substring(0, theme.columns.xl).replace(/-/gi, '1fr '))};
  grid-column-gap: 15px;
  grid-row-gap: 30px;
`;
  
const PictureWrapper = styled.div`
  // border: 3px solid ${theme.colors.light};
  // border-bottom-width: 6px;
  transition: all 100ms ease-in-out;
  filter: grayscale(50%);
  // box-shadow: 0 3px 4px -1px rgba(0,0,0,.35);
  overflow:hidden;

  &:nth-child(8n+5) {
    
  }

  :hover {
    // border-color: ${theme.colors.dark};
    filter: none;
  }
`;

const Picture = styled.img`
  display:block;
  margin: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  text-align: center;
  color: #000;
  font-family: ${theme.fonts.display};
  font-size: 3.5em;
  font-weight: 500;
  margin: 2em 0;
`;

let images = [];
let imageCount = 150;

images = data.tweetsList.map((tweet) => {
  return (tweet.media.length > 0) ? tweet.media[0].media_url_https.replace(/\.jpg|\.png|\.gif/gi, '?format=jpg&name=thumb') : null;
})


class App extends Component {

  componentDidMount() {
    axios.get(require('../assets/data/tweets.json')).then((response) => {
      console.log(response);
    })
    console.log(data)
  }

  render() {

    let gallery = <Gallery>{images.map((img) => {
      return <PictureWrapper key={Math.random()}><Picture src={img} alt="" /></PictureWrapper>;
    })}</Gallery>

    return (
      <Container className="App">
        <ThemeProvider theme={theme}>
          <Title>#MarchemosEnInternet</Title>
          {gallery}
        </ThemeProvider>
      </Container>
    );
  }
}

export default App;
