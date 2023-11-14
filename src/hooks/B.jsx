import React from "react";
import C from "./C.jsx";
function B(props) {
  return (
    <>
      <h1 name={props.name}>B</h1>
      <C name={props.name}>A</C>
    </>
  );
}
export default B;
