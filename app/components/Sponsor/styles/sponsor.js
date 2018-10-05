import styled from "styled-components";

const sponsor = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  max-width: 500px;
  z-index: 2;
  display: flex;
  flex-direction: column;

  p {
    flex: 1;
  }

  .push-to-bottom {
    justify-self: flex-end;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default sponsor;
