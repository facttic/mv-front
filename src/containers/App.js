import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';

import Media from '../components/Media';
import Card from '../components/Card';

import data from '../assets/data/tweets.json'

const theme = {
  colors: {
    dark: '#04090d',
    light: '#f8f8f8',
    primary: '#243243'
  },
  fonts: {
    display: "'Roboto', sans-serif",
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
    l: 19,
    m: 12,
    s: 7,
    gap: {
      xl: 5,
      l: 12,
      m: 10,
      s: 5
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
  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};
  font-family: ${theme.fonts.display};
  font-size: 2.7em;
  font-weight: 600;
  padding:.1em .5em;
  border-radius:.1em;

  @media (max-width: ${theme.pageWidth.m}px) {
    font-size: 1.5em;
  }
`;

const SubTitle = styled.h2`
  text-align: center;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.display};
  font-size: 1.3em;
  font-weight: 600;
  //background-color:${theme.colors.primary};
  border-radius: .1em;
  margin-top:-10px;

  @media (max-width: ${theme.pageWidth.m}px) {
    font-size: .9em;
  }
`;

const Header = styled.header`
  position: relative;
  z-index: 3;
  overflow:hidden;
  padding: .5em;
  border-radius: 3px;
  z-index:0;
  
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.3);
  z-index: 2;
  pointer-events: none;
  animation: in 500ms ease-in-out;
`;



class App extends Component {

  state = {
    loading: false,
    tweets: [],
    currentTweet: null,
    currentPage: 1,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.container = React.createRef();
    this.timer = null;
    this.fetchTweets()
  }

  fetchTweets() {
    // const { currentPage: _currentPage, tweets: _tweets } = this.state
    // const hostUrl = 'http://localhost:3333'
    // const endpoint = 'api/tweets'
    // const params = `page=${_currentPage}&perPage=50`
    // axios.get(`${hostUrl}/${endpoint}?${params}`)
    //   .then(res => {
    //     const { list: newTweets } = res.data
    //     const currentPage = _currentPage + 1
    //     const tweets = _tweets.concat(newTweets)
    //     this.setState({ tweets, currentPage })
    //   })
    let unique_id_data = data.tweetsList.map(tweet => {
      let tw = { ...tweet };
      tw.tweet_id_str += Math.random();
      return tw;
    })

    let tweets = [ ...this.state.tweets, ...unique_id_data ];
    this.setState({ tweets });
  }


  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    let scrollHeight = document.body.scrollHeight;
    let viewportHeight = window.innerHeight;
    let scrollTop = window.scrollY;

    if(scrollHeight - viewportHeight - scrollTop < 200) {
      this.fetchTweets()
    }
  }

  mouseEnterHandler = (e, tweet) => {
    let ct = { tweet, el: e.target };
    this.timer = setTimeout(() => {
      this.setState({ currentTweet: ct });
    }, 800);
  }

  mouseLeaveHandler = () => {
    clearTimeout(this.timer);
    // this.setState({ currentTweet: null });
  }

  closeCard = () => {
    this.setState({ currentTweet: null });
  }

  render() {

    let gallery = this.state.tweets.map((tweet) => { return <Media key={tweet.tweet_id_str} tweet={tweet} alt="" enter={this.mouseEnterHandler} leave={this.mouseLeaveHandler} /> })
    let tweetCard = null;
    if(this.state.currentTweet) {

      let containerRect = this.container.current.getBoundingClientRect(),
          elemRect = this.state.currentTweet.el.getBoundingClientRect(),
          offsetX   = elemRect.left - containerRect.left,
          offsetY   = elemRect.top - containerRect.top;
          let x = offsetX + (elemRect.right - elemRect.left)/2 - 180;
          let y = offsetY - 30;
          if(x + 360 > (containerRect.right - containerRect.left) + 15) x = (containerRect.right - containerRect.left) - 15 - 360;
          if(x < 15) x = 15;
          if(y < -25) y = -25;
          tweetCard = <div style={{ position:'absolute', top: y, left: x, zIndex: 2, animation: 'in 400ms ease-out' }} onMouseLeave={this.closeCard}>
                    <Layer />
                    <Card tweet={this.state.currentTweet.tweet} />
                  </div>;
    }

    return (
      <Container ref={this.container} className="App">
        <ThemeProvider theme={theme}>
          <Grid>
            <Header><Title>#PañuelosConMemoria</Title><SubTitle>Nos unimos en una gran marcha con los tweets del 24 de marzo</SubTitle></Header>
            {gallery}
          </Grid>
          {tweetCard}
          <Footer><Link href="https://facttic.org.ar/" target="_blank">&lt;/&gt; por FACTTIC</Link></Footer>
        </ThemeProvider>
      </Container>
    );
  }
}

export default App;
