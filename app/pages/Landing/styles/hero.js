import styled from "styled-components";

const hero = styled.div`
  position: relative;
  max-width: 880px;
  margin: 0px auto;
  width: 100%;
  padding-bottom: 128px;
  padding-top: 73px;

  p {
    padding-right: 360px;
  }

  .small {
    max-width: 320px;
    padding-right: 0px;
  }

  @media (max-width: 768px) {
    padding-top: 20px;
    p {
      padding-right: 0px;
    }
  }
`;

export default hero;
