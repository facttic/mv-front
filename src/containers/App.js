
import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Login from "../components/pages/Login";
import Manifestation from "../components/pages/Manifestation";

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
    xs: 300,
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


class App extends Component {
  render() {
    return (
      <Container ref={this.container} className="App">
        <ThemeProvider theme={theme}>
          <Route path="/">
            <Manifestation />
          </Route>

          <Route path="/moderar">
            <Overlay />
            <Login />
          </Route>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withRouter(App);
