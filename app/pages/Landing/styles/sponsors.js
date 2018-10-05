import styled from "styled-components";

const sponsors = styled.div`
  display: flex;
  margin: -10px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 100px;

  .info {
    flex: 1;
    min-width: 100%;
    text-align: right;
    line-height: 16px;
    margin-top: 17px;
    padding: 0 20px;

    .text {
      display: inline-flex;
      justify-content: flex-end;
      align-items: center;
    }

    a {
      font-size: 16px;
      color: #5700ff;
      font-weight: 500;
      text-decoration: none;
    }

    img {
      margin-right: 8px;
    }
  }
`;

export default sponsors;
