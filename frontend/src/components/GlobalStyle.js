import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --greenStandard: #015252;
    --beigeStandard: #f7f7f2;
    font-family: "Playfair Display', serif";
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #015252;
  }

`;
