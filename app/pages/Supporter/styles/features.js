import styled from "styled-components";

const features = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 72px 0px;
  position: relative;

  ${props =>
    props.dark &&
    `
    background: #000;
    border-radius: 8px;

    section > h2, section > p {
      color: #fff;
    }
  `} .sponsor {
    position: absolute;
    bottom: -48px;
    right: -30px;
  }

  section {
    padding: 23px;
    max-width: 470px;

    img {
      margin-bottom: 13px;
    }
  }

  @media (max-width: 700px) {
    flex-wrap: wrap;

    section {
      max-width: 100%;
    }

    .sponsor {
      display: none;
    }
  }
`;

export default features;
