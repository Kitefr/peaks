import styled from "styled-components";

import { StyledH1 } from "./Headers";

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
