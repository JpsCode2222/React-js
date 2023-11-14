import React, { useState } from "react";
export default function Customhook() {
  var [state, setState] = useState(0);
  var increment = () => {
    setState(state + 1);
  };
  return { state, increment };
}
