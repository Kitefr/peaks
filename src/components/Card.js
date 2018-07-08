import React from "react";

// import { Link } from "react-router-dom";
import { StyledLink } from "../styled/Link";

import { StyledH1 } from "../styled/Headers";
import { StyledCard, StyledCardImage } from "../styled/Card";

const Card = props => {
  return (
    <StyledCard>
      <StyledCardImage
        available={
          props.item.thumbnail.path.endsWith("image_not_available")
            ? false
            : true
        }
        path={`${props.item.thumbnail.path}.${props.item.thumbnail.extension}`}
        src=""
        alt=""
      />
      <StyledH1>
        <StyledLink to={`/characters/${props.item.id}`}>
          {props.item.name}
        </StyledLink>
      </StyledH1>
    </StyledCard>
  );
};

export default Card;
