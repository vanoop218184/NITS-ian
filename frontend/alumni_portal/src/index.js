import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// Creating the reactdom by considering the root id 
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </>,
);
