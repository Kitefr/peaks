import styled from "styled-components";

import { StyledH1 } from "./Headers";

export const StyledCard = styled.div`
  border: 1px solid gray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 15px;

  ${StyledH1} {
    border: none;
    font-size: 1.4rem;
    text-align: center;
    margin: 0;
  }
`;

export const StyledCardImage = styled.img`
  width: 100%;
  height: 200px;
  display: block;
  border-bottom: 1px solid gray;
  background-image: url(${props => props.path});
  background-size: cover;
  background-position: ${props => (props.available ? "initial" : "bottom")};

  background-repeat: no-repeat;

  @media screen and (min-width: 1024px) {
    height: 350px;
  }
`;
