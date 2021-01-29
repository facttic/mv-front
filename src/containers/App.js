import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import axios from "axios";
import Api from "../api";
import Header from "../components/Header/Header";
import Media from "../components/Media";
import Login from "../components/Login";
import Constants from "../constants";
import TweetCard from "./TweetCard";
import Preloader from "./Preloader";

const theme = {
  colors: {
    dark: "#0d0904",
    light: "#f8f8f8",
    primary: "#009e3c",
    gradientRainbow:
      "linear-gradient(90deg,#ee3e45,#f97000,#eedb36,#2a9a51,#3968a6,#8e2e6b)",
    gradientRainbowText:
      "linear-gradient(90deg,#d12a30,#e47f2c,#cab822,#2a9a51,#3968a6,#8e2e6b)",
  },
  fonts: {
    display: "'Roboto Condensed', 'sans-serif'",
    headerFont: "'Bitter', serif;",
    headerTextFont: "'Montserrat', 'sans-serif'",
    text: "'Roboto', 'sans-serif'",
  },
  pageWidth: {
    xl: 1200,
    l: 992,
    m: 768,
    s: 576,
    xs: 300,
  },
  columns: {
    xl: 14,
    l: 12,
    m: 8,
    s: 5,
    gap: {
      xl: 15,
      l: 15,
      m: 15,
      s: 15,
    },
  },
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  background-image: url(${require("../assets/imgs/background.jpg")});
  background-size: auto 100%;
`;

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
  position: relative;
  z-index: 9;
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
  left: 0;
  padding: 0.25em 30px 0.25em;
  background: ${(props) => props.theme.colors.primary};
  text-align: right;
  opacity: 0.95;
  z-index: 9999999;
  color: #FFFFFF;
`;

const Link = styled.a`
  color: inherit;
  font-family: ${theme.fonts.text};
  text-decoration: none;
  font-size: 0.625rem;
  display: inline-block;
  margin 0 10px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  animation: in 500ms ease-in-out;
`;

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
    usersCount: 0,
    keepScrolling: true,
  };

  componentDidMount() {
    // console.log("adding event listener to scroll");
    // window.addEventListener("scroll", this.handleScroll, false);
    document.addEventListener("keydown", this.keyPressed);
    this.container = React.createRef();
    this.timer = null;
    const { currentPage: _currentPage, perPage } = this.state;
    const endpoint = "posts";
    const params = `page=${_currentPage}&perPage=${perPage}`;
    const url = `${API_URL}/${endpoint}?${params}`;
    this.fetchTweets(url);
    this.fetchUsersCount();
    // console.log("%c¿Dónde está" + "%c Facundo Astudillo Castro" + "%c?", "color:#f02;", "color:#f02; font-weight:bold;", "color:#f02;");
  }

  componentWillReceiveProps(nextProps) {
    const {
      location: { state: { isAuthenticated = false } = {} },
    } = this.props.history;
    this.setState({ isAuthenticated });
  }

  fetchTweets(url) {
    if (!this.state.loading) {
      const { currentPage: _currentPage, tweets: _tweets } = this.state;
      this.setState({ loading: true });
      axios.get(url).then((res) => {
        const { list: newTweets, total } = res.data;
        const currentPage = _currentPage + 1;
        const tweets = new Set(_tweets.concat(newTweets));

        this.setState({
          tweets: Array.from(tweets),
          currentPage,
          total,
          loading: false,
        });
      });
    }
  }

  fetchUsersCount = () => {
    Api.users.usersCount().then((res) => {
      const { status } = res;
      if (status === 200) {
        this.setState({
          usersCount: res.data.count,
        });
      }
    });
  };

  onEndReached() {
    const { perPage, tweets } = this.state;
    const endpoint = "posts";
    const _perPage = Constants.perPage;
    const page = Math.round(tweets.length / _perPage) + 1;
    const params = `page=${page}&perPage=${perPage}`;
    const url = `${API_URL}/${endpoint}?${params}`;

    this.setState({ currentPage: page, perPage: _perPage });
    this.fetchTweets(url);
  }

  componentWillUnmount() {
    console.log("removing scroll");
    window.removeEventListener("scroll", this.handleScroll);
  }

  isBottom(element) {
    // console.log(document.getElementById("root").getBoundingClientRect().bottom);
    // console.log(window.innerHeight);
    return (
      document.getElementById("root").getBoundingClientRect().bottom <=
      window.innerHeight
    );
  }

  handleScroll = (e) => {
    const { total, tweets } = this.state;
    const shouldFetchMore = total > tweets.length;
    // console.log(shouldFetchMore);
    if (shouldFetchMore && this.isBottom()) {
      // document.removeEventListener("scroll", this.trackScrolling);
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

  deleteTweet = (tweetId) => {
    Api.users.deleteTweet(tweetId).then((res) => {
      const { status } = res;
      if (status === 200) {
        console.log("res", res);
        console.log(`Deleted tweet with id: ${tweetId}`);
      }
    });
  };

  banUser = (userTwitterId) => {
    Api.users.banUser(userTwitterId).then((res) => {
      const { status } = res;
      if (status === 201) {
        const {
          data: {
            inserted: { user_id_str },
            removedTweetsCount,
          },
        } = res;
        console.log("res", res);
        console.log(`Banned user with twitter id: ${user_id_str}`);
        console.log(`Deleted ${removedTweetsCount} tweets`);
      }
    });
  };

  keyPressed = (e) => {
    if (e.keyCode === 77 && e.shiftKey) {
      this.props.history.push("/moderar");
    }
  };

  render() {
    const { isAuthenticated, usersCount } = this.state;

    let gallery = this.state.tweets.map((tweet) => {
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

    return (
      <Background onScroll={this.handleScroll}>
        <Container ref={this.container} className="App">
          <HeaderWrapper>
            <Header
              title="Marcha virtual por el Aborto Legal, Seguro y Gratuito"
              info="Este 29 de diciembre sumate a la lucha por el #AbortoLegal2020"
              //logoImgSrc="mirada_santiago.jpg"
              logoImgAlt="Marcha virtual por el aborto legal"
              //logoImgHeight="80"
              //logoImgWidth="auto"
              count={usersCount}
              countImgSrc=""
              countImgAlt=""
              countImgWidth=""
              countImgHeight=""
            ></Header>
          </HeaderWrapper>
          <Grid>{gallery}</Grid>
          {this.state.loading && <Preloader
            url='https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif' />}
          {this.state.currentTweet && <TweetCard
            isAuthenticated={this.state.isAuthenticated}
            currentTweet={this.state.currentTweet}
            container={this.container}
            closeCard={this.closeCard}
            deleteTweet={this.deleteTweet}
            banUser={this.banUser} />}

          <Footer>
            <Link
              href="https://www.instagram.com/mulata.dcv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Collage: Mulata.dcv
            </Link>
            {"|"}
            {/* <img src='/favicon.png' width='48' alt='Marcha Virtual' /> */}
            <Link
              href="https://facttic.org.ar/fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Desarrollado por FACTTIC
            </Link>
          </Footer>
        </Container>
      </Background>
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
