import React, { useReducer } from "react";
var inistate = { count: 0 };
var reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
      break;
    case "DEC":
      return { count: state.count - 1 };
      break;
  }
};
export default function UseReducer() {
  var [state, dispatch] = useReducer(reducer, inistate);
  return (
    <>
      <button onClick={() => dispatch({ type: "INC" })}>INC</button>
      <button>{state.count}</button>
      <button onClick={() => dispatch({ type: "DEC" })}>DEC</button>
    </>
  );
}
