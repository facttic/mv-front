import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';

import data from '../assets/data/tweets.json';

import Media from '../components/Media';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(('----------------------------------------').substring(0, theme.columns.xl).replace(/-/gi, '1fr '))};
  grid-column-gap: 15px;
  grid-row-gap: 30px;
  margin: 30px 0;
`;
  
const Title = styled.h1`
  text-align: center;
  color: #000;
  font-family: ${theme.fonts.display};
  font-size: 2em;
  font-weight: 500;
  // margin: 2em 0;
`;

const Header = styled.header`
  border-radius: 3px;
  overflow:hidden;
  
  grid-column: 3 / span ${theme.columns.xl-4};
  grid-row: 2 / span 2;
  justify-self: center;
  align-self: center;
`;


class App extends Component {

  state = {
    loading: false,
    tweets: [],
    images: []
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    let images = [];
    images = data.tweetsList.map((tweet) => {
      return (tweet.media.length > 0) ? tweet.media[0].media_url_https.replace(/\.jpg|\.png|\.gif/gi, '?format=jpg&name=thumb') : null;
    })

    this.setState({ tweets: data.tweetsList, images });

    // axios.get('https://dev.nayra.coop/tweets.json').then((response) => {
    //   console.log(response);
    // })
    // console.log(data)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    let scrollHeight = document.body.scrollHeight;
    let viewportHeight = window.innerHeight;
    let scrollTop = window.scrollY;

    if(scrollHeight - viewportHeight - scrollTop < 200) {
      let images = [ ...this.state.images, ...this.state.images ];
      this.setState({ images });
    }
  }

  render() {

    let gallery = this.state.images.map((img) => { return <Media key={Math.random()} src={img} alt="" /> });

    return (
      <Container className="App">
        <ThemeProvider theme={theme}>
          <Grid>
            <Header><Title>#PañuelosConMemoria</Title></Header>
            {gallery}
          </Grid>
        </ThemeProvider>
      </Container>
    );
  }
}

export default App;
