import React, { Component } from "react";
import { Route } from "react-router-dom";

import Loader from "./components/Loader";
import Home from "./components/Home";
import Character from "./components/Character";

import { StyledAppContainer, StyledHeaderContainer } from "./styled/Containers";
import { StyledH1 } from "./styled/Headers";
import { StyledLink } from "./styled/Link";

class App extends Component {
  render() {
    return (
      <StyledAppContainer>
        <StyledHeaderContainer>
          <StyledH1>
            <StyledLink to="/">MARVEL</StyledLink>
          </StyledH1>
        </StyledHeaderContainer>
        <Route exact path="/" component={Home} />
        <Route path="/characters/:id" component={Character} />
      </StyledAppContainer>
    );
  }
}

export default App;
