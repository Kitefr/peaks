import styled from "styled-components";

import { StyledH1 } from "./Headers";
import { StyledCard } from "./Card";
import { StyledLink } from "./Link";

export const StyledAppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: scroll;
  background-color: ${props =>
    props.loading ? props.theme.colors.main.red : "white"};
`;

export const StyledHeaderContainer = styled.div`
  width: 100vw;
  height: ${props => props.theme.sizes.header.height}px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.main.red};

  ${StyledH1} {
    color: #ffffff;
    text-align: center;
    margin: 0;
    padding-top: 6px;
    font-size: 2.4rem;

    ${StyledLink} {
      text-decoration: none;
      color: white;
    }
  }
`;

export const StyledPageContainer = styled.div`
  padding: 0 10px;
  background-color: white;

  ${StyledH1} {
    line-height: 3rem;
    border-bottom: 1px solid black;
  }

  @media screen and (min-width: 768px) {
    padding: 0 15px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 20px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${StyledCard} {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-between;

    ${StyledCard} {
      width: 48%;
    }
  }
`;
