import styled from "styled-components";

import { StyledH1 } from "./Headers";
import { StyledCard } from "./Card";

export const StyledAppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;

export const StyledHeaderContainer = styled.div`
  width: 100vw;
  min-height: 80px;
  overflow: hidden;
  background-color: black;
`;

export const StyledPageContainer = styled.div`
  padding: 0 10px;
  height: 100vh;
  overflow-y: scroll;

  ${StyledH1} {
    line-height: 3rem;
    border-bottom: 1px solid black;
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
