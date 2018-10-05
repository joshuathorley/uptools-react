import styled from "styled-components";

const user = styled.div`
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
  letter-spacing: 0;
  line-height: 40px;
  padding: 7px 20px;
  background: #f2f2f2;
  border-radius: 8px;
  border: 1px solid transparent;
  position: relative;

  img {
    display: block;
    margin-right: 22px;
    width: 32px;
    height: 32px;
    border-radius: 99em;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid #000000;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24), 0 4px 0 0 #000000;
    transform: translateY(-3px);
  }

  &:active {
    border: 1px solid #000000;
    box-shadow: inset 0 3px 4px 0 rgba(0, 0, 0, 0.5), inset 0 3px 0 0 #000000;
    transform: translateY(-1px);
  }

  .logout {
    position: absolute;
    right: 0px;
    top: 48px;
    background: #ffffff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-decoration: none;
    font-size: 18px;
    color: #5700ff;
    letter-spacing: 0;
    line-height: 24px;
    padding: 6px 16px;
    font-weight: 400;
  }
`;

export default user;
