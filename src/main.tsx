import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/navbar.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
)
