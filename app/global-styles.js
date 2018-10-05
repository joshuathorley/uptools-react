import { injectGlobal } from "styled-components";
import CerebriRegular from "./fonts/calibre/regular.woff";
import CerebriMedium from "./fonts/calibre/medium.woff";
import CerebriSemiBold from "./fonts/calibre/semibold.woff";
import CerebriLight from "./fonts/calibre/light.woff";

injectGlobal`
  @font-face{
    font-family: 'calibre';
    src: url(${CerebriRegular}) format('woff');
    font-style: normal;
    font-weight: normal;
  }

  @font-face{
    font-family: 'calibre';
    src: url(${CerebriLight}) format('woff');
    font-style: normal;
    font-weight: 300;
  }

  @font-face{
    font-family: 'calibre';
    src: url(${CerebriMedium}) format('woff');
    font-style: normal;
    font-weight: 500;
  }

  @font-face{
    font-family: 'calibre';
    src: url(${CerebriSemiBold}) format('woff');
    font-style: normal;
    font-weight: 600;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #F8F8F8;
  }

  body, input, button {
    font-family: 'calibre', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    .sortCont {
      display: flex;
      align-items: center;

      .title {
        font-size: 16px;
        color: #52525F;
        letter-spacing: -0.23px;
        margin-right: 5px;
      }
    }

    .select {
      outline: none;
      appearance: none;
      font-size: 16px;
      color: #5700FF;
      letter-spacing: -0.23px;
      border: 1px solid rgba(0,0,0,0.08);
      border-radius: 8px;
      padding: 10px 35px 10px 10px;
      background: #fff url(${require("images/downArrow.png")}) no-repeat right 10px top 16px;
      background-size: 10px 6px;
    }
  }

  .black-area {
    background: #000;

    .illo {
      max-width: 569px;
      width: 100%;
    }

    h1 {
      color: #fff
    }

    p {
      color: #fff
    }
  }

  .__react_component_tooltip {
    max-width: 280px;
    padding: 7px 10px;
    background: #000000;
    border-radius: 4px;

    p {
      margin: 0;
      padding: 0;
      opacity: 0.8;
      font-weight: 500;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      line-height: 18px;
    }

    a {
      display: block;
      font-family: 500;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      line-height: 18px;
      margin-top: 8px;
      text-decoration: none;
    }

    &:after {
      display: none !important;
    }
  }

  .react-tags {
    background: #FFFFFF;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 8px;
    height: 40px;
    align-items: center;
    display: inline-flex;
    position: relative;
    min-width: 250px;
    background: #fff url(${require("./images/search.png")}) no-repeat bottom 10px right 10px;
    background-size: 14px 16px;

    &.is-focused {
      border-color: #000;
    }

    .react-tags__selected {
      margin-right: 6px;
      margin-left: 6px;
    }

    .react-tags__search {
      flex: 1;
      padding-right: 40px;

      input {
        width: 100%;
        outline: none;
        border: none;
        font-size: 16px;
      }
    }

    .react-tags__selected-tag {
      padding: 6px 12px;
      background: #000000;
      border-radius: 4px;
      color: #fff;
      font-size: 16px;
      margin-right: 6px;
    }

    .react-tags__suggestions {
      position: absolute;
      top: calc(100% + 10px);
      left: 0px;
      z-index: 10;
      background: #FFFFFF;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
      border-radius: 8px;
      width: 100%;

      ul {
        list-style: none;
        padding: 6px;
        margin: 0;

        li {
          padding: 5px;
          border-radius: 3px;

          &.is-active {
            background: #5700FF;
            color: #fff;

            mark {
              color: #fff !important;
            }
          }

          mark {
            background: transparent;
            font-weight: 600;
          }
        }
      }
    }
  }

  @media (max-width: 700px) {
    .filter {
      flex-direction: column;

      > div {
        flex: 1;
        max-width: 100%;
        width: 100%;
      }

      .sortCont {
        margin-top: 20px;
        justify-content: flex-end;
      }
    }

    .react-tags {
      flex-direction: column;
      align-items: flex-start;
      max-width: 100%;
      height: auto;
      display: flex;

      .react-tags__search {
        padding: 6px;
      }

      .react-tags__selected {
        width: calc(100% - 12px);
      }

      .react-tags__selected-tag {
        display: block;
        width: 100%;
        margin-top: 6px;
      }
    }
  }
`;
