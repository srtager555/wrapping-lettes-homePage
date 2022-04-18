import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { App as Application } from "./App";

import "@Styles/index.css";

function App() {
   return (
      <BrowserRouter>
         <Application />
      </BrowserRouter>
   );
}

ReactDOM.render(<App />, document.getElementById("root"));
