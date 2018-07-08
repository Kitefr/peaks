import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import Home from "./components/Home";
import Character from "./components/Character";
import Loader from "./components/Loader";

import { StyledAppContainer, StyledHeaderContainer } from "./styled/Containers";
import { StyledH1 } from "./styled/Headers";
import { StyledLink } from "./styled/Link";

import ajax from "./config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    ajax
      .get("characters", {
        params: {
          orderBy: "name",
          limit: "20",
          offset: "100",
          apikey: "4a445f09f93c08a7c738c3859b34cda1"
        }
      })
      .then(res => res.data)
      .then(data => {
        this.setState({ characters: data.data.results });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <StyledAppContainer loading={this.state.characters.length === 0}>
        <StyledHeaderContainer>
          <StyledH1>
            <StyledLink to="/">MARVEL</StyledLink>
          </StyledH1>
        </StyledHeaderContainer>
        {this.state.characters.length > 0 && (
          <div>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} characters={this.state.characters} />
              )}
            />
            <Route
              path="/characters/:id"
              render={props => (
                <Character
                  {...props}
                  character={
                    this.state.characters.filter(
                      item => Number(props.match.params.id) === Number(item.id)
                    )[0]
                  }
                />
              )}
            />
          </div>
        )}
        {this.state.characters.length === 0 && <Loader />}
      </StyledAppContainer>
    );
  }
}

export default withRouter(App);
