import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
  // Four Types writting multiline code
  // 1> <div></div>
  // 2> [] - Array brackets
  // 3> <ReactFragment></ReactFragment>
  // 5> <></> - Fragment brackets

  // <div>
  //     <h1>HELLO</h1>
  //     <h1>WORLD</h1>
  // </div>

  // [
  //     <h1>HELLO</h1>,
  //     <h1>WORLD</h1>
  // ]

  // <ReactFragment>
  //     <h1>HELLO</h1>
  //     <h1>WORLD</h1>
  // </ReactFragment>

  <>
    <h1>HELLO</h1>
    <h1>WORLD</h1>
  </>,

  docuement.getElementById("root")
);
