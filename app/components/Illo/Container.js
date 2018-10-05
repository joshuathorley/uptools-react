import React from "react";

import StyledIllo from "./styles/illo";

const Illo = props => (
  <StyledIllo>
    <div className="illo" />
    <div className="items delay-three">
      <div className="orbit">
        <div className="position">
          <div className="shape circle" />
        </div>
      </div>
    </div>

    <div className="items delay-one">
      <div className="orbit">
        <div className="position">
          <div className="shape square" />
        </div>
      </div>
    </div>

    <div className="items">
      <div className="orbit">
        <div className="position">
          <div className="shape diamond" />
        </div>
      </div>
    </div>

    <div className="items delay-two">
      <div className="orbit">
        <div className="position">
          <div className="shape triangle" />
        </div>
      </div>
    </div>
  </StyledIllo>
);

export default Illo;
