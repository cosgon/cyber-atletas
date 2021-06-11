import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";

import Providers from "./provider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
