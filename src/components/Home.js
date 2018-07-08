import React, { Component } from "react";

import PageHeader from "./PageHeader";
import Card from "./Card";

import { StyledPageContainer, FlexContainer } from "../styled/Containers";

//mock
import characters from "../characters.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.setState({ list: characters.data.results });
  }

  render() {
    return (
      <StyledPageContainer>
        <PageHeader title="HomePage" />
        <FlexContainer>
          {this.state.list.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </FlexContainer>
      </StyledPageContainer>
    );
  }
}

export default Home;
