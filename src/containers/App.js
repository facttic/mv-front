import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
import Api from '../api';

import Header from '../components/Header';
import Media from '../components/Media';
import Card from '../components/Card';
import Login from '../components/Login';
import Constants from '../constants';

const theme = {
  colors: {
    dark: '#04090d',
    light: '#232323',
    primary: '#243243',
    gradientRainbow: 'linear-gradient(90deg,#ee3e45,#f97000,#eedb36,#2a9a51,#3968a6,#8e2e6b)',
    gradientRainbowText: 'linear-gradient(90deg,#d12a30,#e47f2c,#cab822,#2a9a51,#3968a6,#8e2e6b)'
  },
  fonts: {
    display: "'Montserrat', 'sans-serif'",
    text: "'Open Sans', 'sans-serif'"
  },
  pageWidth: {
    xl: 1200,
    l: 992,
    m: 768,
    s: 576,
    xs: 300
  },
  columns: {
    xl: 18,
    l: 12,
    m: 12,
    s: 6,
    gap: {
      xl: 5,
      l: 5,
      m: 5,
      s: 5
    }
  }
};

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
  @media (max-width: ${theme.pageWidth.m}px) {
    padding: 0 18px;
  }  
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${theme.columns.s}, 1fr);
  gap: ${theme.columns.gap.s}px;
  margin: 30px 0;
  transform: rotate3d(0deg, 0deg, 0deg);

  @media (min-width: ${theme.pageWidth.s}px) {
    grid-template-columns: repeat(${theme.columns.s}, 1fr);
    gap: ${theme.columns.gap.s}px;
  }
  @media (min-width: ${theme.pageWidth.m}px) {
    grid-template-columns: repeat(${theme.columns.m}, 1fr);
    gap: ${theme.columns.gap.m}px;
  }
  @media (min-width: ${theme.pageWidth.l}px) {
    grid-template-columns: repeat(${theme.columns.l}, 1fr);
    gap: ${theme.columns.gap.l}px;
  }
  @media (min-width: ${theme.pageWidth.xl}px) {
    grid-template-columns: repeat(${theme.columns.xl}, 1fr);
    gap: ${theme.columns.gap.xl}px;
  }
`;

const HeaderWrapper = styled.header`
  justify-self: center;
  align-self: center;

  @media (min-width: ${theme.pageWidth.s}px) {
  }
  @media (min-width: ${theme.pageWidth.m}px) {
  }
  @media (min-width: ${theme.pageWidth.l}px) {
  }
  @media (min-width: ${theme.pageWidth.xl}px) {
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 0.25em 30px 0.25em;
  background: rgba(248, 248, 248, 0);
  background: -moz-linear-gradient(
    left,
    rgba(248, 248, 248, 0) 0%,
    rgba(248, 248, 248, 0.95) 25%,
    rgba(248, 248, 248, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(248, 248, 248, 0)),
    color-stop(25%, rgba(248, 248, 248, 0.95)),
    color-stop(100%, rgba(248, 248, 248, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(248, 248, 248, 0) 0%,
    rgba(248, 248, 248, 0.95) 25%,
    rgba(248, 248, 248, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(248, 248, 248, 0) 0%,
    rgba(248, 248, 248, 0.95) 25%,
    rgba(248, 248, 248, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(248, 248, 248, 0) 0%,
    rgba(248, 248, 248, 0.95) 25%,
    rgba(248, 248, 248, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(248, 248, 248, 0) 0%,
    rgba(248, 248, 248, 0.95) 25%,
    rgba(248, 248, 248, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8f8f8', endColorstr='#f8f8f8', GradientType=1 );
  text-align: right;
`;

const Link = styled.a`
  color: inherit;
  font-family: ${theme.fonts.display};
  text-decoration: none;
  font-size: 0.625rem;
  display: block;
`;

const Modal = styled.div`
  position: absolute;
  z-index: 2;
  animation: 'in 400ms ease-out';
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  animation: in 500ms ease-in-out;
`;

const Preloader = styled.div`
  text-align: center;
  padding: 3em;
`;

const LeadClosing = styled.span`
  display: block;
`

const RainbowHashtag = styled.span`
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #e47f2c;
  background-image: ${theme.colors.gradientRainbowText};
  background-size: 100%;
  &:hover {
    color: #e47f2c;
  }
`

const { REACT_APP_API_URL: API_URL } = process.env;

class FeedComponent extends Component {
  state = {
    loading: false,
    tweets: [],
    currentTweet: null,
    currentPage: 1,
    perPage: Constants.initialAmount,
    total: 0,
    isAuthenticated: false,
    usersCount: 0
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('keydown', this.keyPressed);
    this.container = React.createRef();
    this.timer = null;
    const { currentPage: _currentPage, perPage } = this.state;
    const endpoint = 'posts';
    const params = `page=${_currentPage}&perPage=${perPage}`;
    const url = `${API_URL}/${endpoint}?${params}`;
    this.fetchTweets(url);
    this.fetchUsersCount();
  }

  componentWillReceiveProps(nextProps) {
    const {
      location: { state: { isAuthenticated = false } = {} }
    } = this.props.history;
    this.setState({ isAuthenticated });
  }

  fetchTweets(url) {
    if (!this.state.loading) {
      const { currentPage: _currentPage, tweets: _tweets } = this.state;
      this.setState({ loading: true });
      axios.get(url).then(res => {
        const { list: newTweets, total } = res.data;
        const currentPage = _currentPage + 1;
        const tweets = new Set(_tweets.concat(newTweets));

        this.setState({
          tweets: Array.from(tweets),
          currentPage,
          total,
          loading: false
        });
      });
    }
  }

  fetchUsersCount = () => {
    Api.users.usersCount().then(res => {
      const { status } = res;
      if (status === 200) {
        this.setState({
          usersCount: res.data.count
        });
      }
    });
  };

  onEndReached() {
    const { perPage, tweets } = this.state;
    const endpoint = 'posts';
    const _perPage = Constants.perPage;
    const page = Math.round(tweets.length / _perPage) + 1;
    const params = `page=${page}&perPage=${perPage}`;
    const url = `${API_URL}/${endpoint}?${params}`;

    this.setState({ currentPage: page, perPage: _perPage });
    this.fetchTweets(url);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  isBottom(element) {
    return (
      document.getElementById('root').getBoundingClientRect().bottom <=
      window.innerHeight
    );
  }

  handleScroll = e => {
    const { total, tweets } = this.state;
    const shouldFetchMore = total > tweets.length;
    if (shouldFetchMore && this.isBottom()) {
      document.removeEventListener('scroll', this.trackScrolling);
      this.onEndReached();
    }
  };

  mouseClickHandler = (e, tweet) => {
    clearTimeout(this.timer);
    let ct = { tweet, el: e.target };
    this.setState({ currentTweet: ct });
  };

  mouseEnterHandler = (e, tweet) => {
    let ct = { tweet, el: e.target };
    this.timer = setTimeout(() => {
      this.setState({ currentTweet: ct });
    }, 800);
  };

  mouseLeaveHandler = () => {
    clearTimeout(this.timer);
  };

  closeCard = () => {
    this.setState({ currentTweet: null });
  };

  deleteTweet = tweetId => {
    Api.users.deleteTweet(tweetId).then(res => {
      const { status } = res;
      if (status === 200) {
        console.log('res', res);
        console.log(`Deleted tweet with id: ${tweetId}`);
      }
    });
  };

  banUser = userTwitterId => {
    Api.users.banUser(userTwitterId).then(res => {
      const { status } = res;
      if (status === 201) {
        const {
          data: {
            inserted: { user_id_str },
            removedTweetsCount
          }
        } = res;
        console.log('res', res);
        console.log(`Banned user with twitter id: ${user_id_str}`);
        console.log(`Deleted ${removedTweetsCount} tweets`);
      }
    });
  };

  keyPressed = (e) => {
    if (e.keyCode === 77 && e.shiftKey) {
      this.props.history.push('/moderar');
    }
  }

  render() {
    const { isAuthenticated, usersCount } = this.state;

    let gallery = this.state.tweets.map(tweet => {
      return (
        <Media
          key={tweet.post_id_str}
          tweet={tweet}
          alt=""
          click={this.mouseClickHandler}
          enter={this.mouseEnterHandler}
          leave={this.mouseLeaveHandler}
        />
      );
    });

    let tweetCard = null;
    if (this.state.currentTweet) {
      let containerRect = this.container.current.getBoundingClientRect();
      let elemRect = this.state.currentTweet.el.getBoundingClientRect();
      let x =
        elemRect.left -
        containerRect.left +
        (elemRect.right - elemRect.left) / 2 -
        180;
      let y = elemRect.top - containerRect.top - 30;

      if (x + 320 > containerRect.right - containerRect.left + 15)
        x = containerRect.right - containerRect.left + 15 - 320;
      if (x < 15) x = 15;
      if (y < -25) y = -25;

      tweetCard = (
        <Modal style={{ top: y, left: x }}>
          <Overlay onTouchStart={this.closeCard} />
          <Card
            show={isAuthenticated}
            tweet={this.state.currentTweet.tweet}
            close={this.closeCard}
            delete={this.deleteTweet}
            block={this.banUser}
          />
        </Modal>
      );
    }

    let preloader = this.state.loading ? (
      <Preloader>
        <img src={require('../assets/spinner.gif')} alt="Cargando" />
      </Preloader>
    ) : null;

    return (
      <Container ref={this.container} className="App">
      <HeaderWrapper>
        <Header
          title="#15J #MatrimonioIgualitario"
          info="Este 15 de julio se cumplen 10 años de la aprobación de la Ley de Matrimonio Igualitario."
          logoImgSrc="logo.jpg"
          logoImgAlt="logo frente orgullo y lucha"
          logoImgHeight="250"
          logoImgWidth="auto"
          count={usersCount}
          countImgSrc="heart.svg"
          countImgAlt="pride heart"
          countImgWidth="320"
          countImgHeight="230"
        >
          Subí tu foto a Twitter con alguno de los hashtags{' '}
          <RainbowHashtag>
            #MatrimonioIgualitario {' '} #10AñosMatrimonioIgualitario 
          </RainbowHashtag>{' '}
          y sumate. <LeadClosing>¡La marcha la hacemos entre todxs!</LeadClosing>
        </Header>
        
      </HeaderWrapper>
        <Grid>
          {gallery}
        </Grid>
        {preloader}
        {tweetCard}
        <Footer>
          {/* <img src='/favicon.png' width='48' alt='Marcha Virtual' /> */}
          <Link
            href="https://facttic.org.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desarrollado por FACTTIC
          </Link>
        </Footer>
      </Container>
    );
  }
}

const Feed = withRouter(FeedComponent);

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Route path="/">
        <Feed />
      </Route>
      <Route path="/moderar">
        <Overlay />
        <Login />
      </Route>
    </ThemeProvider>
  );
};
