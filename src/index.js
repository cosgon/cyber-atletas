import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";
import Providers from "./provider";

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Providers>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Providers>
=======
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
>>>>>>> 871822cae786ff8cac247f47ef58c596b8de8d3d
  </React.StrictMode>,
  document.getElementById("root")
);
