import React, { useState } from "react";
function StateInFunctionComp() {
  // HOOKS - useState()
  //   use for store , access and manipulate
  const [state, setState] = useState({
    name: "Jayad Pathan",
  });
  function change() {
    setState({
      name: "Pathan Jayad",
    });
  }
  return (
    <>
      <h1>Welcome {state.name}</h1>
      <button onClick={change}>Change</button>
    </>
  );
}
export default StateInFunctionComp;
