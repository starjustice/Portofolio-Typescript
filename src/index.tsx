import React from "react";
import ReactDOM from "react-dom/client";
import { Global, css } from "@emotion/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  Hallelujah,
  MadeTommy,
  MadeTommyBold,
  MadeTommyMedium,
} from "./assets/fonts";

const globalStyles = css`
  @font-face {
    font-family: "Hallelujah";
    src: url(${Hallelujah}) format("opentype");
  }
  @font-face {
    font-family: "MadeTommy";
    src: url(${MadeTommy}) format("opentype");
  }
  @font-face {
    font-family: "MadeTommy";
    font-weight: bold;
    src: url(${MadeTommyBold}) format("opentype");
  }
  @font-face {
    font-family: "MadeTommy";
    font-weight: 300;
    src: url(${MadeTommyMedium}) format("opentype");
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
