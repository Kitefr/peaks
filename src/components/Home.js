import React, { Component } from "react";
import PageHeader from "./PageHeader";
import Card from "./Card";

import { StyledPageContainer, FlexContainer } from "../styled/Containers";
import { StyledButton } from "../styled/Buttons";
import { HorizontalLayout } from "../styled/Layouts";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: "all"
    };
    this.showAll = this.showAll.bind(this);
    this.showFavorites = this.showFavorites.bind(this);
  }

  showAll() {
    this.setState({ listing: "all" });
  }

  showFavorites() {
    this.setState({ listing: "favorites" });
  }

  render() {
    const favoritesList = this.props.characters.filter((item, index) =>
      this.props.favorites.some(id => id === item.id)
    );
    console.log(favoritesList);
    return (
      <StyledPageContainer>
        <PageHeader
          title={`${this.state.listing
            .slice(0, 1)
            .toUpperCase()}${this.state.listing.slice(1)} Characters List`}
        />
        <HorizontalLayout>
          <StyledButton
            active={this.state.listing === "all"}
            onClick={this.showAll}
          >
            All
          </StyledButton>
          <StyledButton
            active={this.state.listing === "favorites"}
            onClick={this.showFavorites}
          >
            Favorites
          </StyledButton>
        </HorizontalLayout>
        <FlexContainer>
          {this.state.listing === "all" &&
            this.props.characters.map((item, index) => (
              <Card key={index} item={item} favorites={this.props.favorites} />
            ))}
          {this.state.listing === "favorites" &&
            favoritesList.map((item, index) => (
              <Card key={index} item={item} favorites={this.props.favorites} />
            ))}
          {this.state.listing === "favorites" &&
            this.props.favorites.length === 0 && <p>No Favorites</p>}
        </FlexContainer>
      </StyledPageContainer>
    );
  }
}

export default Home;
