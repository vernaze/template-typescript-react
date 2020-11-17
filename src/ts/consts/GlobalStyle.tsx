import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: calc(15px + 0.2vw);
  }
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Avenir", "Century Gothic", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "メイリオ", sans-serif;
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
