import React from "react";
import { ErrorContentContainer } from "./styles";
import { Link } from "react-router-dom";
import deathStar from "src/assets/deathStar.svg";

const Error = (props) => {
  return (
    <ErrorContentContainer>
      <div>
        <h1>4</h1>
        <img src={deathStar} alt="death star" />
        <h1>4</h1>
      </div>
      <div className="column">
        <p>Great shot, kid. That was one in a million.</p>
        <small>
          Let's get you <Link to="/">back</Link>
        </small>
      </div>
    </ErrorContentContainer>
  );
};

export default Error;
