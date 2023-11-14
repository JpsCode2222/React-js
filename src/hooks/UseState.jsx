// define
import React, { useState } from "react";
function UseState() {
  // useState
  var [state, setState] = useState("A2Z");
  function change() {
    setState("A2Z IT HUB");
  }
  return (
    <>
      <h1>Welcome {state}</h1>
      <button onClick={change}>Change</button>
    </>
  );
}
export default UseState;
