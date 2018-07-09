import React from "react";

import { StyledH1 } from "../styled/Headers";

const PageHeader = props => {
  return (
    <div>
      <StyledH1>{props.title}</StyledH1>
    </div>
  );
};

export default PageHeader;
