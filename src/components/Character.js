import React, { Component } from "react";

import PageHeader from "./PageHeader";

import { StyledPageContainer } from "../styled/Containers";
import {
  StyleSingleImage,
  StyleSingleText,
  StyleSingleSection
} from "../styled/Single";
import { StyledH2 } from "../styled/Headers";

//mock
import character from "../character.json";

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: character
    };
  }

  render() {
    const yearPattern = new RegExp("(([\\d]{4}))", "i");
    let sortedComics = this.state.data.comics.items
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
        <PageHeader title={this.state.data.name} />
        <StyleSingleImage
          src={`${this.state.data.thumbnail.path}.${
            this.state.data.thumbnail.extension
          }`}
        />
        <StyleSingleText>
          Number of comics: {this.state.data.comics.returned}
        </StyleSingleText>
        <StyleSingleSection>
          <StyledH2>Description</StyledH2>
          {this.state.data.description && (
            <StyleSingleText>{this.state.data.description}</StyleSingleText>
          )}
          {!this.state.data.description && (
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
