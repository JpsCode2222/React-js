import React, { useRef } from "react";
// manipulate dom
function UseRef1() {
  var useref = useRef(null);
  function fun() {
    console.log(useref.current.value);
    useref.current.style.color = "red";
  }
  return (
    <>
      <label>Enter Name</label>
      <input type="text" ref={useref} />
      <button onClick={() => fun()}>Click</button>
    </>
  );
}
export default UseRef1;
