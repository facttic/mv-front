import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Login from "../components/pages/Login";
import Manifestation from "../components/pages/Manifestation";

const theme = {
  colors: {
    dark: "#0d0904",
    light: "#f8f8f8",
    primary: "#009e3c"
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
      <Container className="App">
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
