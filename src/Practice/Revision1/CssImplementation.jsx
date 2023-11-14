import React from "react";
import ReactDOM from "react-dom";
// External Css implementation
// first import
// Two types -:
// 1> External Css
// 2> Internal Css
import "./index.css";
ReactDOM.render(
  <>
    <h1>HELLO</h1>
    {/* Internal Css */}
    <h1 style={{ color: "blue" }}>WORLD</h1>
  </>,
  document.getElementById("root")
);
