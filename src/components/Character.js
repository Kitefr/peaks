import React, { Component } from "react";

import PageHeader from "./PageHeader";

import { StyledPageContainer } from "../styled/Containers";
import {
  StyleSingleImage,
  StyleSingleText,
  StyleSingleSection
} from "../styled/Single";
import { StyledH2 } from "../styled/Headers";

class Character extends Component {
  render() {
    const yearPattern = new RegExp("(([\\d]{4}))", "i");
    let sortedComics = this.props.character.comics.items
      .filter(item => yearPattern.test(item.name))
      .map(item => {
        const obj = {};
        obj.name = item.name;
        obj.year = item.name.match(yearPattern)[0];
        return obj;
      })
      .sort((a, b) => a.year > b.year);

    return (
      <StyledPageContainer>
        <PageHeader title={this.props.character.name} />
        <StyleSingleImage
          src={`${this.props.character.thumbnail.path}.${
            this.props.character.thumbnail.extension
          }`}
        />
        <StyleSingleText>
          Number of comics: {this.props.character.comics.returned}
        </StyleSingleText>
        <StyleSingleSection>
          <StyledH2>Description</StyledH2>
          {this.props.character.description && (
            <StyleSingleText>
              {this.props.character.description}
            </StyleSingleText>
          )}
          {!this.props.character.description && (
            <StyleSingleText>No description</StyleSingleText>
          )}
        </StyleSingleSection>
        <StyleSingleSection>
          <StyledH2>3 first comics</StyledH2>
          <ul>
            {sortedComics
              .map((item, index) => <li key={index}>{item.name}</li>)
              .slice(0, 3)}
          </ul>
        </StyleSingleSection>
      </StyledPageContainer>
    );
  }
}

export default Character;
