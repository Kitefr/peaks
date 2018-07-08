import React, { Component } from "react";
import { StyledAppContainer } from "./styled/Containers";

import { Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./components/Home";
import Character from "./components/Character";

class App extends Component {
  render() {
    return (
      <StyledAppContainer>
        <Route exact path="/" component={Home} />
        <Route path="/characters/:id" component={Character} />
      </StyledAppContainer>
    );
  }
}

export default App;
