import styled from "styled-components";

const vote = styled.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
  text-align: right;
  line-height: 24px;
  min-width: 80px;
  justify-content: space-between;

  img {
    margin-right: 10px !important;
    border: none !important;
    width: 13px !important;
    height: 21px !important;
    background: transparent !important;
  }

  &:hover {
    transform: translateY(-2px);
    background: #ffffff;
    border: 1px solid #000000;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5), 0 2px 0 0 #000000;
    border-radius: 5px;
  }

  &.mouseOff:hover {
    img {
      animation: bounceUp 1s ease-in-out forwards;
    }
  }

  &:active {
    transform: translateY(-1px);
    background: #ffffff;
    border: 1px solid #000000;
    box-shadow: inset 0 3px 4px 0 rgba(0, 0, 0, 0.5), inset 0 3px 0 0 #000000;
    border-radius: 5px;
  }

  ${props =>
    !props.auth &&
    `
    cursor: not-allowed;
    color: #9D9D9D;
    background: #F5F5F5;

    img {
      opacity: 0.5;
    }

    &:hover {
      transform: translateY(0px);
      background: #F5F5F5;
      border: 1px solid rgba(0,0,0,0.08);
      box-shadow: none;
    }

    &:active {
      transform: translateY(0px);
      background: #F5F5F5;
      border: 1px solid rgba(0,0,0,0.08);
      box-shadow: none;
    }
  `} ${props =>
    props.voted &&
    `
    color: #fff;
    background: #5700FF;
    border-color: #5700FF;

    &:hover {
      transform: translateY(0px);
      background: #5700FF;
      border: 1px solid #5700FF;
      box-shadow: none;
    }

    &.mouseOff:hover {
      img {
        animation: bounceDown 1s ease-in-out forwards;
      }
    }

    &:active {
      transform: translateY(0px);
      background: #5700FF;
      border: 1px solid #5700FF;
      box-shadow: none;
    }
  `}

  @keyframes bounceUp {
    0% {
      transform: translateY(-2px);
    }

    25% {
      transform: translateY(1px);
    }

    50% {
      transform: translateY(-2px);
    }

    75% {
      transform: translateY(1px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  @keyframes bounceDown {
    0% {
      transform: translateY(2px) rotate(0deg);
    }

    25% {
      transform: translateY(-1px) rotate(-180deg);
    }

    50% {
      transform: translateY(2px) rotate(-180deg);
    }

    75% {
      transform: translateY(-1px) rotate(-180deg);
    }

    100% {
      transform: translateY(0px) rotate(-180deg);
    }
  }
`;

export default vote;
