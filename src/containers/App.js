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
    display: "'Roboto Mono', monotype",
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
  position: relative;
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
  transform: rotate3d(0deg,0deg,0deg);

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
  color: #FFF;
  font-family: ${theme.fonts.display};
  font-size: 2em;
  font-weight: 300;
  margin: 0;
  // margin: 2em 0;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 3;
  overflow:hidden;
  padding: 5px 15px;
  background-color: #7d7d7d;
  border-radius: 3px;

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

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 175px;
  padding: 3px 0;
  border-top-left-radius: 3px;
  background-color: #7d7d7d;
  text-align: center;
`;

const Link = styled.a`
  color: #FFF;
  font-family: ${theme.fonts.display};
  text-decoration: none;
  font-size: .81rem;
  display: block;
`;

const Layer = styled.div`
  // position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.3);
  z-index: 2;
  // display: none;
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

    let unique_id_data = data.tweetsList.map(tweet => {
      let tw = { ...tweet };
      tw.tweet_id_str += Math.random();
      return tw;
    })

    this.setState({ tweets: unique_id_data });

    this.container = React.createRef();


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
      
      let unique_id_data = data.tweetsList.map(tweet => {
        let tw = { ...tweet };
        tw.tweet_id_str += Math.random();
        return tw;
      })
  
      let tweets = [ ...this.state.tweets, ...unique_id_data ];
      this.setState({ tweets });
    }
  }

  clickHandler = (e, tweet) => {
    this.setState({ currentTweet: { tweet, el: e.target } });
  }

  render() {

    let gallery = this.state.tweets.map((tweet) => { return <Media key={tweet.tweet_id_str} tweet={tweet} alt="" click={this.clickHandler} /> })
    let tweetCard = null;
    if(this.state.currentTweet) {

      let containerRect = this.container.current.getBoundingClientRect(),
          elemRect = this.state.currentTweet.el.getBoundingClientRect(),
          offsetX   = elemRect.left - containerRect.left,
          offsetY   = elemRect.top - containerRect.top;
      console.log()
      tweetCard = <div style={{ position:'absolute', gridArea: '3 / 2' }}><Card tweet={this.state.currentTweet.tweet} /></div>;
    }

    return (
      <Container ref={this.container} className="App">
        <ThemeProvider theme={theme}>
          <Grid>
            <Header><Title>#PañuelosConMemoria</Title></Header>
            {gallery}
          {tweetCard}
          </Grid>
          <Footer><Link href="https://facttic.org.ar/" target="_blank">&lt;/&gt; por FACTTIC</Link></Footer>
        </ThemeProvider>
      </Container>
    );
  }
}

export default App;
