import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const div = document.querySelector("#root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  div
);
