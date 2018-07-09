import React, { Component } from "react";
import PageHeader from "./PageHeader";
import Card from "./Card";

import { StyledPageContainer, FlexContainer } from "../styled/Containers";

class Home extends Component {
  render() {
    return (
      <StyledPageContainer>
        <PageHeader title="Characters List" />
        <FlexContainer>
          {this.props.characters.map((item, index) => (
            <Card key={index} item={item} favorites={this.props.favorites} />
          ))}
        </FlexContainer>
      </StyledPageContainer>
    );
  }
}

export default Home;
