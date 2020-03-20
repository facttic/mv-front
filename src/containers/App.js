import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';

import data from '../assets/data/tweets.json';

import Media from '../components/Media';
import Card from '../components/Card';

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
    xl: 24,
    l: 10,
    m: 8,
    s: 6,
    gap: {
      xl: 5,
      l: 12,
      m: 10,
      s: 7
    }
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
  grid-template-columns: ${(('----------------------------------------').substring(0, theme.columns.s).replace(/-/gi, '1fr '))};
  grid-column-gap: ${theme.columns.gap.s}px;
  grid-row-gap: ${2*theme.columns.gap.s}px;
  margin: 30px 0;

  @media (min-width: ${theme.pageWidth.s}px) {
    grid-template-columns: ${(('----------------------------------------').substring(0, theme.columns.s).replace(/-/gi, '1fr '))};
    grid-column-gap: ${theme.columns.gap.s}px;
    grid-row-gap: ${2*theme.columns.gap.s}px;
  }
  @media (min-width: ${theme.pageWidth.m}px) {
    grid-template-columns: ${(('----------------------------------------').substring(0, theme.columns.m).replace(/-/gi, '1fr '))};
    grid-column-gap: ${theme.columns.gap.m}px;
    grid-row-gap: ${2*theme.columns.gap.m}px;
  }
  @media (min-width: ${theme.pageWidth.l}px) {
    grid-template-columns: ${(('----------------------------------------').substring(0, theme.columns.l).replace(/-/gi, '1fr '))};
    grid-column-gap: ${theme.columns.gap.l}px;
    grid-row-gap: ${2*theme.columns.gap.l}px;
  }
  @media (min-width: ${theme.pageWidth.xl}px) {
    grid-template-columns: ${(('----------------------------------------').substring(0, theme.columns.xl).replace(/-/gi, '1fr '))};
    grid-column-gap: ${theme.columns.gap.xl}px;
    grid-row-gap: ${2*theme.columns.gap.xl}px;
  }
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
  
  grid-column: 1 / span ${theme.columns.s};
  grid-row: 2 / span 4;
  justify-self: center;
  align-self: center;

  @media (min-width: ${theme.pageWidth.s}px) {
    grid-column: 1 / span ${theme.columns.s};
  }
  @media (min-width: ${theme.pageWidth.m}px) {
    grid-column: 2 / span ${theme.columns.m-2};
  }
  @media (min-width: ${theme.pageWidth.l}px) {
    grid-column: 3 / span ${theme.columns.l-4};
  }
  @media (min-width: ${theme.pageWidth.xl}px) {
    grid-column: 3 / span ${theme.columns.xl-4};
  }

`;


class App extends Component {

  state = {
    loading: false,
    tweets: [],
    currentTweet: null
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    //console.log(data.tweetsList.length)

    // let images = [];
    // images = data.tweetsList.map((tweet) => {
    //   return (tweet.media.length > 0) ? tweet.media[0].media_url_https.replace(/\.jpg|\.png|\.gif/gi, '?format=jpg&name=thumb') : null;
    // })

    this.setState({ tweets: data.tweetsList });

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
      let tweets = [ ...this.state.tweets, ...this.state.tweets ];
      this.setState({ tweets });
    }
  }

  clickHandler = (e, tweet) => {
    console.log(e.target, tweet);
    this.setState({ currentTweet: tweet });
  }

  render() {

    let gallery = this.state.tweets.map((tweet) => { return <Media key={Math.random()} tweet={tweet} alt="" click={this.clickHandler} /> })
    let tweetCard = (this.state.currentTweet) ? <Card tweet={this.state.currentTweet} /> : null;

    return (
      <Container className="App">
        <ThemeProvider theme={theme}>
          <Grid>
            <Header><Title>#PañuelosConMemoria</Title></Header>
            {gallery}
          </Grid>
          {tweetCard}
        </ThemeProvider>
      </Container>
    );
  }
}

export default App;
