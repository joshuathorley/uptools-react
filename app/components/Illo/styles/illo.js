import styled from "styled-components";

const time = "24s";
const size = "73px";

const illo = styled.div`
  position: absolute;
  top: 250px;
  right: -71px;
  margin: 0 auto;
  width: 500px;
  height: 390px;

  .illo {
    position: absolute;
    width: 340px;
    height: 390px;
    background: url(${require("images/character.svg")}) no-repeat center;
    position: center top;
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
  }

  .items {
    top: 0;
    position: absolute;
    transform: rotateX(73deg);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    animation: move-position ${time} linear infinite forwards;
  }

  .items,
  .orbit {
    width: 100%;
    height: 100%;
  }

  .items,
  .orbit,
  .position,
  .shape {
    transform-style: preserve-3d;
  }

  .orbit {
    position: relative;
    animation: rotate ${time} linear infinite;
  }

  .position,
  .shape {
    position: absolute;
    top: 50%;
    left: 0px;
    width: ${size};
    height: ${size};
    margin-right: calc(-1 * 73px / 2);
    margin-top: calc(-1 * 73px / 2);
  }

  .position {
    position: relative;
    animation: invert ${time} linear infinite;
  }

  .shape {
    background: red;
  }

  .circle {
    background: url("https://s3.us-east-2.amazonaws.com/project-test-joe/shape.svg")
      no-repeat;
    background-size: 70px 73px;
  }

  .square {
    background: url("https://s3.us-east-2.amazonaws.com/project-test-joe/cube.png");
    background-size: cover;
  }

  .diamond {
    background: url(${require("images/diamond.png")});
    background-size: cover;
  }

  .triangle {
    background: url("https://s3.us-east-2.amazonaws.com/project-test-joe/triangle.png");
    background-size: 73px auto;
    background-position: center;
    background-repeat: no-repeat;
  }

  .delay-one {
    top: 0px;
    z-index: 1;
    animation-direction: reverse;
    animation-delay: 5s;

    .position {
      top: 0px;
      left: 50%;
    }
  }

  .delay-two {
    top: 0px;
    z-index: 1;
    animation-direction: reverse;
    animation-delay: 0s;

    .position {
      top: 50%;
      left: 90%;
    }
  }

  .delay-three {
    top: 0px;
    z-index: 2;
    animation-delay: 5s;

    .position {
      top: 100%;
      left: 50%;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  @keyframes move-position {
    0% {
      z-index: 1;
    }
    100% {
      z-index: 2;
    }
  }

  @keyframes invert {
    0% {
      transform: rotateX(-90deg) rotateY(-360deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
    }
  }

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 50%;
    right: auto;
    width: 100%;
    transform: translateX(-50%) scale(0.7);
  }

  @media (max-width: 420px) {
    margin-top: -90px;
  }
`;

export default illo;
