import React, { Component } from "react";
import { StyledAppContainer, StyledHeaderContainer } from "./styled/Containers";

import { Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./components/Home";
import Character from "./components/Character";

import logo from "./assets/images/marvel-logo.png";

class App extends Component {
  render() {
    return (
      <StyledAppContainer>
        <StyledHeaderContainer>
          <img src="{logo}" alt="Marvel Logo Red" />
        </StyledHeaderContainer>
        <Route exact path="/" component={Home} />
        <Route path="/characters/:id" component={Character} />
      </StyledAppContainer>
    );
  }
}

export default App;
