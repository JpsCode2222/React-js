import React from "react";
function EventHandlingFunComp() {
  // function that call even targe
  function change() {
    alert();
  }
  return (
    <>
      {/* write only function name */}
      <button onClick={change}>Alert</button>
    </>
  );
}
export default EventHandlingFunComp;
