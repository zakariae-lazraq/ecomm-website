import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import GlobalState from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalState>
      <App />
    </GlobalState>
  </BrowserRouter>
);
