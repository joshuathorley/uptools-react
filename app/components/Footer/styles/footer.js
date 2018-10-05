import styled from "styled-components";

const footer = styled.footer`
  padding: 100px 0;

  .footer-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .left-column {
      flex: 1;
    }

    .right-column {
      min-width: 336px;
      width: 336px;
      padding-left: 60px;
      border-left: 1px solid #d7d7d7;

      a {
        color: #ff3e00;
        font-weight: 500;
        text-decoration: none;
        font-size: 18px;
      }
    }

    a {
      color: #5700ff;
      font-weight: 600;
      text-decoration: none;
    }
  }

  .social-link {
    display: inline-block;
    margin-right: 16px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    .right-column {
      border-left-color: transparent !important;
      padding-left: 0px !important;
      min-width: 100% !important;
      flex: 1;
      margin-top: 30px;
    }
  }
`;

export default footer;
