import styled from "styled-components";

const Content = styled.div`
  max-width: 500px;

  h1 {
    margin-bottom: 0px;
  }

  cursor: default;
`;

const Ticket = styled.div`
  background: #ffffff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px 24px;
  margin-top: 32px;
  position: relative;
  animation: popIn 0.3s ease-in-out forwards;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: -16px;
    width: 32px;
    height: 32px;
    background: rgba(248, 248, 248, 1);
    top: 50%;
    border-radius: 50%;
    box-shadow: -1px 0px 0px 0 rgba(0, 0, 0, 0.1) inset;
  }

  &:after {
    right: -16px;
    left: auto;
    box-shadow: 1px 0px 0px 0 rgba(0, 0, 0, 0.1) inset;
  }

  .buttons {
    padding-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      opacity: 0.36;
      font-size: 16px;
      color: #000000;
      letter-spacing: 0;
      line-height: 24px;
    }

    .button {
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
      cursor: pointer;
      border: 1px solid transparent;

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
        box-shadow: inset 0 3px 4px 0 rgba(174, 42, 0, 0.5),
          inset 0 3px 0 0 #da3500;
        border-radius: 5px;
        transform: translateY(0px);
      }

      &.dull {
        background: #f5f5f5;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        color: rgba(0, 0, 0, 0.36);

        &:hover,
        &:active {
          background: #f5f5f5;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 5px;
          color: rgba(0, 0, 0, 0.36);
          box-shadow: none;
        }
      }
    }
  }

  .text {
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);

    p {
      font-size: 28px;
      color: #000000;
      letter-spacing: 0;
    }

    .product {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      img {
        width: 24px;
        height: 24px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        margin-right: 16px;
      }

      .title {
        font-weight: 600;
        font-size: 20px;
        color: #000000;
        letter-spacing: 0;
      }
    }
  }

  @keyframes popIn {
    from {
      opacity: 0;
      transform: scale(0.7);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Background = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background: rgba(248, 248, 248, 0.97);
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;

  .confetti {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export default {
  Content,
  Background,
  Ticket
};
