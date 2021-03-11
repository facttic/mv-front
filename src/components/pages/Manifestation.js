import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Api from "../../api";
import Constants from "../../constants";
import _ from "lodash";

import Header from "../snippets/header/template/Header";
import Media from "../snippets/body/media/Media";
import FeedGrid from '../snippets/body/template/FeedGrid'
import TweetCard from "../snippets/body/media/TweetCard";
import Preloader from "../snippets/body/Preloader";
import Footer from '../snippets/body/Footer'
import Sponsors from "../snippets/body/Sponsors";

const manifestationTemplate = require('../../data/manifestationTemplate.json') 


const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  background-color:${ props => props.theme.styles.colors.background};
  background-size: auto 100%;
`;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  @media (min-width: ${props => props.theme.pageWidth.s}px) {
    max-width: ${props => props.theme.pageWidth.s}px;
  }
  @media (min-width: ${props => props.theme.pageWidth.m}px) {
    max-width: ${props => props.theme.pageWidth.m}px;
  }
  @media (min-width: ${props => props.theme.pageWidth.l}px) {
    max-width: ${props => props.theme.pageWidth.l}px;
  }
  @media (min-width: ${props => props.theme.pageWidth.xl}px) {
    max-width: ${props => props.theme.pageWidth.xl}px;
  }
  @media (max-width: ${props => props.theme.pageWidth.m}px) {
    padding: 0 18px;
  }
`;

const { REACT_APP_API_URL: API_URL } = process.env;

class Manifestation extends Component {

  state = {
    loading: false,
    loadingManifestation:true,
    tweets: [],
    currentTweet: null,
    currentPage: 1,
    perPage: Constants.initialAmount,
    total: 0,
    isAuthenticated: false,
    usersCount: 0,
    keepScrolling: true,
    manifestation: manifestationTemplate

  };

  componentDidMount() {
    document.addEventListener("keydown", this.keyPressed);
    let uri = window.location.href;
    // extract domain
    uri = uri.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i)[1]
    this.container = React.createRef();
    this.timer = null;
    const endpointpost = "posts";
    const endpointManifestation = "manifestations/getOne/byQuery";
    const urlPosts = `${API_URL}/${endpointpost}`;
    const urlManifestation = `${API_URL}/${endpointManifestation}?uri=${uri}`;
    this.fetchManifestaionData(urlManifestation, urlPosts);
  }

  componentWillReceiveProps(nextProps) {
    const {
      location: { state: { isAuthenticated = false } = {} },
    } = this.props.history;
    this.setState({ isAuthenticated});
  }

  async fetchManifestaionData(url, urlPosts) {
    await axios
      .get(url)
      .then((res) => {
        if (!res.data[0]) {
          //redirect
          this.setState({loadingManifestation: false})
        } else {
          this.setState({
            manifestation: res.data[0],
            usersCount: res.data[0].people,
            urlPost: urlPosts + `?manifestationId=${res.data[0].id}`,
            loadingManifestation: false,
          });
          const { currentPage: _currentPage, perPage } = this.state;
          const params = `&page=${_currentPage}&perPage=${perPage}`;
          this.fetchTweets(this.state.urlPost+params);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
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
    const _perPage = Constants.perPage;
    const page = Math.round(tweets.length / _perPage) + 1;
    const params = `&page=${page}&perPage=${perPage}`;

    this.setState({ currentPage: page, perPage: _perPage });
    this.fetchTweets(this.state.urlPost+`${params}`);
  }

  componentWillUnmount() {
    console.log("removing scroll");
    window.removeEventListener("scroll", this.handleScroll);
  }

  isBottom(element) {
    return (
      document.getElementById("root").getBoundingClientRect().bottom <=
      window.innerHeight
    );
  }

  handleScroll = (e) => {
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
        const tweetsNotBanned = _.reject(this.state.tweets, function(el) { return el.user.id_str === user_id_str; });
        this.setState({tweets: Array.from(tweetsNotBanned)})
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

    if (this.state.loadingManifestation) {
      return <Preloader></Preloader>;
    }

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
      <Background onScroll={this.handleScroll} image={this.state.manifestation.background}>
        <Container ref={this.container} className="App">   
        {console.log(this.state.manifestation.people)}
          <Header
            title={this.state.manifestation.title}
            info={this.state.manifestation.subtitle}
            background={this.state.manifestation.headerBackground}
            logoImgAlt={this.state.manifestation.name}
            count={this.state.manifestation.people}
            countImgSrc=""
            text={this.state.manifestation.description}
            hashtags={this.state.manifestation.hashtags}
          ></Header>

          <Sponsors sponsors={this.state.manifestation.sponsors}></Sponsors>

          <FeedGrid 
            columns={this.state.manifestation.styles.thumbnails.columns} 
            posts={this.state.tweets}
            mouseClickHandler={this.mouseClickHandler}
            mouseEnterHandler={this.mouseEnterHandler}
            mouseLeaveHandler={this.mouseLeaveHandler}
            >

          </FeedGrid>

          {this.state.loading && <Preloader />}
          
          {this.state.currentTweet && <TweetCard
            isAuthenticated={this.state.isAuthenticated}
            currentTweet={this.state.currentTweet}
            container={this.container}
            closeCard={this.closeCard}
            deleteTweet={this.deleteTweet}
            banUser={this.banUser} />}
        </Container>

        <Footer footerText={this.state.manifestation.footer}></Footer>
      
      </Background>
    );
  }
}

export default Manifestation;

