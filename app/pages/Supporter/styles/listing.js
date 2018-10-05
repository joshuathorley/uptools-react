import styled from "styled-components";

const listing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 150px 0px 100px 0px;

  h1 {
    margin: 0;
    font-size: 56px;
    line-height: normal;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    h1 {
      margin: 0 0 30px 0;
    }
  }
`;

export default listing;
