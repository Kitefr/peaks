import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: red;
  }
`;
