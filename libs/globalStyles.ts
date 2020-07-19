import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  
  html, body, #__next {
    min-height: 100%;
    font-size: 16px;
    margin: 0
  }

  body {
    box-sizing: border-box;
    position: relative;
    -webkit-box-shadow: inset 0px 0px 14px 3px rgba(128,116,128,1);
    -moz-box-shadow: inset 0px 0px 14px 3px rgba(128,116,128,1);
    box-shadow: inset 0px 0px 14px 3px rgba(128,116,128,1);
  }
  
  * { 
    box-sizing: border-box;
    outline: none;
   }
`;

export default GlobalStyle;
