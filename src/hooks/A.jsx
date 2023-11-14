import React from "react";
import B from "./B.jsx";
function A(props) {
  return (
    <>
      <h1>A</h1>
      <B name={props.name}>A</B>
    </>
  );
}
export default A;
