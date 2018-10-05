import styled from "styled-components";

const hero = styled.div`
  position: relative;
  max-width: 880px;
  margin: 0px auto;
  width: 100%;
  padding-bottom: 112px;
  padding-top: 73px;

  .illo {
    margin-left: -25px;
  }

  .small {
    max-width: 320px;
    padding-right: 0px;
  }

  @media (max-width: 700px) {
    p {
      padding-right: 0px;
    }
  }
`;

export default hero;
