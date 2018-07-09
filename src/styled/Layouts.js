import styled from "styled-components";

import { StyledButton } from "./Buttons";

export const HorizontalLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${props => (props.justify ? props.justify : "center")};

  ${StyledButton} {
    margin-bottom: 15px;
    font-size: 1.1rem;
  }
`;
