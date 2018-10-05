import styled from "styled-components";

const button = styled.a`
  display: inline-block;
  background: #ffeae4;
  border-radius: 4px;
  padding: 7px 16px;
  font-weight: 400;
  text-decoration: none;
  font-size: 18px;
  color: #ff3e00;
  letter-spacing: 0;
  line-height: 24px;
  margin-right: 10px;
  border: 1px solid transparent;

  ${props =>
    props.hover &&
    `
    &:hover {
      background: #ffeae4;
      border: 1px solid #ff3e00;
      box-shadow: 0 2px 4px 0 rgba(158, 38, 0, 0.5), 0 2px 0 0 #da3500;
      border-radius: 5px;
      transform: translateY(-2px);
    }

    &:active {
      background: #ffeae4;
      border: 1px solid #ff3e00;
      box-shadow: inset 0 3px 4px 0 rgba(174, 42, 0, 0.5), inset 0 3px 0 0 #da3500;
      border-radius: 5px;
      transform: translateY(0px);
    }
  `};

  &:last-child {
    margin-right: 0px;
  }
`;

export default button;
