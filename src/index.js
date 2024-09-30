import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Pokemon from "./pokemon";
import Main from "./pokemon-main";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Pokemon />
    <Main />
  </React.StrictMode>
);
