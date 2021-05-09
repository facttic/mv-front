import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import _ from "lodash";
import Api from '../api'
import axios from 'axios'
import Constants from '../constants'

import webFont from 'webfontloader'
import Helmet from 'react-helmet'

import Login from "../components/pages/Login";
import Manifestation from "../components/pages/Manifestation";
import NotFound from "../components/pages/NotFound";

const manifestationTemplate = require('../data/manifestationTemplate.json')

const theme = {

  styles: {
    colors: {
      background: "#DEE2E6",
      accent: "#212529"
    },
    text: {
      title: {
        font: "Serif",
        color: "#212529"
      },
      subtitle: {
        font: "Serif",
        color: "#212529"
      },
      body: {
        font: "Serif",
        color: "#6C757D"
      }
    },
    thumbnails: {
      columns: 7,
      colors: {
        hover: "#6C757D",
        border: "#343A40"
      }
    },
    cards: {
      darkMode: false
    }
  },

  pageWidth: {
    xl: 1200,
    l: 992,
    m: 768,
    s: 576,
    xs: 375,
  }

};

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0;
  width: 100%;
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

class App extends Component {

  state = {
    loading: false,
    loadingManifestation: true,
    tweets: [],
    currentTweet: null,
    currentPage: 1,
    perPage: Constants.initialAmount,
    total: 0,
    isAuthenticated: false,
    usersCount: 0,
    keepScrolling: true,
    manifestation: manifestationTemplate,
    manifestationFonts: [],
  };

  async componentDidMount() {
    try {
      document.addEventListener("keydown", this.keyPressed);

      this.container = React.createRef();
      this.timer = null;

      const uri = window.location.href;
      const parts = uri.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i);

      const { data } = await axios.get(`${API_URL}/manifestations/getSetup?uri=${parts.join(",")}&page=1&perPage=${Constants.perPage}`);

      if (data.error) {
        this.setState({ loadingManifestation: false });
        console.error(data.error);
        return this.props.history.push("/notFound");
      }

      const { manifestation, posts } = data;
      const { _id: manifestationId, styles, people: usersCount } = manifestation;
      const manifestationFonts = [styles.text.title.font, styles.text.subtitle.font, styles.text.body.font];

      this.setState({
        manifestation,
        usersCount,
        urlPost: `${API_URL}/posts?manifestationId=${manifestationId}`,
        manifestationFonts,
        loadingManifestation: false,
      });

      console.log(this.state);

      this.setTweetsState(posts);

      webFont.load({
        google: {
          families: manifestationFonts
        }
      });
    } catch (err) {
      this.setState({ loadingManifestation: false });
      console.error(err);
      return this.props.history.push("/notFound");
    }
  }

  componentWillReceiveProps(_nextProps) {
    const {
      location: { state: { isAuthenticated = false } = {} },
    } = this.props.history;
    this.setState({ isAuthenticated });
  }

  async fetchTweets(url) {
    if (!this.state.loading) {
      this.setState({ loading: true });
      const { data } = await axios.get(url);
      this.setTweetsState(data);
    }
  }

  setTweetsState({ list: newTweets, total }) {
    const { currentPage: _currentPage, tweets: _tweets } = this.state;

    const currentPage = _currentPage + 1;
    const tweets = Array.from(new Set(_tweets.concat(newTweets)));

    this.setState({
      tweets,
      currentPage,
      total,
      loading: false,
    });
  }

  onEndReached() {
    const { perPage, tweets } = this.state;
    const _perPage = Constants.perPage;
    const page = Math.round(tweets.length / _perPage) + 1;
    const params = `&page=${page}&perPage=${perPage}`;

    this.setState({ currentPage: page, perPage: _perPage });
    this.fetchTweets(this.state.urlPost + `${params}`);
  }

  componentWillUnmount() {
    console.log("removing scroll");
    window.removeEventListener("scroll", this.handleScroll);
  }

  isBottom(_element) {
    return (
      document.getElementById("root").getBoundingClientRect().bottom <=
      window.innerHeight
    );
  }

  handleScroll = (_e) => {
    const { total, tweets } = this.state;
    const shouldFetchMore = total > tweets.length;
    if (shouldFetchMore && this.isBottom()) {
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

  banUser = (userTwitterId, manifestationId) => {
    Api.users.banUser(userTwitterId, manifestationId).then((res) => {
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
        const tweetsNotBanned = _.reject(this.state.tweets, function (el) { return el.user.id_str === user_id_str; });
        this.setState({ tweets: Array.from(tweetsNotBanned) })
      }
    });
  };

  keyPressed = (e) => {
    if (e.keyCode === 77 && e.shiftKey) {
      this.props.history.push("/moderar");
    }
  };

  render() {
    return (
      <div>
        <Helmet>
          {/* <!-- HTML Meta Tags --> */}
          <title>{this.state.manifestation.metadata.title || manifestationTemplate.metadata.title}</title>
          <meta
            name="description"
            content={this.state.manifestation.metadata.description || manifestationTemplate.metadata.description}
          />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url"
            content={this.state.manifestation.uri || manifestationTemplate.uri} />
          <meta property="og:type"
            content="website" />
          <meta property="og:title"
            content={this.state.manifestation.metadata.title || manifestationTemplate.metadata.title} />
          <meta property="og:description"
            content={this.state.manifestation.metadata.description || manifestationTemplate.metadata.description}
          />
          <meta property="og:image"
            content={this.state.manifestation.images.og.facebook.src || manifestationTemplate.images.og.facebook.src}
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card"
            content="summary_large_image" />
          <meta name="twitter:title"
            content={this.state.manifestation.metadata.title || manifestationTemplate.metadata.title} />
          <meta name="twitter:description"
            content={this.state.manifestation.metadata.description || manifestationTemplate.metadata.description}
          />
          <meta name="twitter:image"
            content={this.state.manifestation.images.og.twitter.src || manifestationTemplate.images.og.twitter.src}
          />
        </Helmet>

        <Container ref={this.container} className="App">
          <ThemeProvider theme={theme}>
            <Route exact path="/">

              <Manifestation

                /*HEADER CONTENT*/
                title={this.state.manifestation.title || manifestationTemplate.title}
                subtitle={this.state.manifestation.subtitle || manifestationTemplate.subtitle}
                background={this.state.manifestation.images.header.src || manifestationTemplate.images.header.src}
                logoImgAlt={this.state.manifestation.name || manifestationTemplate.name}
                count={this.state.manifestation.people || manifestationTemplate.people}
                countImgSrc=""
                text={this.state.manifestation.description || manifestationTemplate.description}
                hashtags={this.state.manifestation.hashtags !== "" ? this.state.manifestation.hashtags : manifestationTemplate.hashtags}

                /*STYLES*/
                backgroundColor={this.state.manifestation.styles.colors.background || manifestationTemplate.styles.colors.background}
                backgroundImage={this.state.manifestation.images.background.src || manifestationTemplate.images.background.src}

                titleColor={this.state.manifestation.styles.text.title.color || manifestationTemplate.styles.text.title.color}
                titleFont={this.state.manifestation.styles.text.title.font || manifestationTemplate.styles.text.title.font}

                subtitleColor={this.state.manifestation.styles.text.subtitle.color || manifestationTemplate.styles.text.subtitle.color}
                subtitleFont={this.state.manifestation.styles.text.subtitle.font}

                textColor={this.state.manifestation.styles.text.subtitle.color || manifestationTemplate.styles.text.subtitle.color}
                textFont={this.state.manifestation.styles.text.subtitle.font || manifestationTemplate.styles.text.subtitle.font}

                hashtagFontColor={this.state.manifestation.styles.colors.background || manifestationTemplate.styles.colors.background}
                hashtagContainerColor={this.state.manifestation.styles.colors.accent || manifestationTemplate.styles.colors.accent}
                hashtagFont={this.state.manifestation.styles.text.subtitle.font || manifestationTemplate.styles.text.subtitle.font}

                counterColor={this.state.manifestation.styles.text.subtitle.color || manifestationTemplate.styles.text.subtitle.color}
                counterFont={this.state.manifestation.styles.text.subtitle.font || manifestationTemplate.styles.text.subtitle.font}

                leadClosingColor={this.state.manifestation.styles.text.subtitle.color || manifestationTemplate.styles.text.subtitle.color}
                leadClosingFont={this.state.manifestation.styles.text.subtitle.font || manifestationTemplate.styles.text.subtitle.font}

                sponsors={this.state.manifestation.sponsors.length > 0 ? this.state.manifestation.sponsors : manifestationTemplate.sponsors}
                sponsorsColor={this.state.manifestation.styles.colors.accent || manifestationTemplate.styles.colors.accent}
                sponsorsFont={this.state.manifestation.styles.text.subtitle.font || manifestationTemplate.styles.text.subtitle.font}

                columns={this.state.manifestation.styles.thumbnails.columns || manifestationTemplate.styles.thumbnails.columns}

                /*POSTS*/
                loadingManifestation={this.state.loadingManifestation}
                onScroll={this.handleScroll}

                posts={this.state.tweets}
                mouseClickHandler={this.mouseClickHandler}
                mouseEnterHandler={this.mouseEnterHandler}
                mouseLeaveHandler={this.mouseLeaveHandler}

                isLoading={this.state.loading}

                isAuthenticated={this.state.isAuthenticated}
                currentTweet={this.state.currentTweet}
                container={this.container}
                closeCard={this.closeCard}
                deleteTweet={this.deleteTweet}
                banUser={this.banUser}

                footerText={this.state.manifestation.footer || manifestationTemplate.footer}>

              </Manifestation>
            </Route>

            <Route path="/notFound">
              <NotFound />
            </Route>
            <Route path="/moderar">
              <Overlay />
              <Login />
            </Route>

          </ThemeProvider>
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
