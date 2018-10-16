import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//milligram for styling
import "milligram/dist/milligram.css";
import * as serviceWorker from "./serviceWorker";
//components
import Footer from "./components/Footer/Footer";
require("dotenv").config();

ReactDOM.render(
  <div>
    <App style={{ height: "100vh;" }} />
    <Footer />
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
