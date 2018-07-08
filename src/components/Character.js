import React, { Component } from "react";

import { StyledPageContainer } from "../styled/Containers";
import PageHeader from "./PageHeader";

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <StyledPageContainer>
        <PageHeader title="Character ..." />
      </StyledPageContainer>
    );
  }
}

export default Character;
