import React from "react";
import Customhook from "./Customhook.jsx";
export default function UseCustomehook() {
  var hook1 = Customhook();
  return (
    <>
      <h1>{hook1.state}</h1>
      <button onClick={hook1.increment}>CLICK1</button>
    </>
  );
}
