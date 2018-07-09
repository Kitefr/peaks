import React, { Component } from "react";
import Emitter from "../emitter";

import { StyledLink } from "../styled/Link";

import { StyledH1 } from "../styled/Headers";
import { StyledCard, StyledCardImage } from "../styled/Card";
import { StyledButton } from "../styled/Buttons";

class Card extends Component {
  constructor(props) {
    super(props);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite(id) {
    Emitter.emit("favoriteToggled", id);
  }

  render() {
    return (
      <StyledCard>
        <StyledCardImage
          available={
            this.props.item.thumbnail.path.endsWith("image_not_available")
              ? false
              : true
          }
          path={`${this.props.item.thumbnail.path}.${
            this.props.item.thumbnail.extension
          }`}
          src=""
          alt=""
        />
        <StyledH1>
          <StyledLink to={`/characters/${this.props.item.id}`}>
            {this.props.item.name}
            {this.props.favorites.some(x => x === this.props.item.id) &&
              ` (favorite)`}
          </StyledLink>
        </StyledH1>
        <StyledButton
          type="button"
          onClick={() => this.toggleFavorite(this.props.item.id)}
        >
          {!this.props.favorites.some(x => x === this.props.item.id) &&
            `Add to Favorite`}
          {this.props.favorites.some(x => x === this.props.item.id) &&
            `Remove from Favorite`}
        </StyledButton>
      </StyledCard>
    );
  }
}

export default Card;
