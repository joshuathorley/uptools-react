import styled from "styled-components";

const customButton = styled.div`
  button {
    display: inline-flex !important;
    font-family: 'calibre', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
    font-size: 24px !important;
    font-weight: 500 !important;
    background: #000 !important;
    border-radius: 8px !important;
    width: auto !important;
    padding: 7px 16px 7px 16px !important;
    align-items: center;
    justify-content: space-between;
    line-height: 40px;
    cursor: pointer; 

    &:before {
      content: '';
      width: 24px;
      height: 24px;
      display: flex;
      background: url('${require("images/google.png")}') no-repeat center;
      background-size: 24px 24px;
      margin-right: 22px;
    }
  }
`;

export default customButton;
