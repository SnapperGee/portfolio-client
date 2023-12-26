import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/navbar.tsx";
import AboutMe from "./component/about-me.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <AboutMe />
  </React.StrictMode>,
)
