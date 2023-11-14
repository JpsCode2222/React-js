// define
import React, { useEffect, useState } from "react";
function UseEffect1() {
  var [count, setCount] = useState(0);
  var [counts, setCounts] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function inc1() {
    setCounts(counts + 1);
  }
  // useEffect
  // After render() call itselft
  useEffect(() => {
    alert();
    // dependancy list only after changing count val it works otherwise not work
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={inc}>Increase</button>
      <h1>{counts}</h1>
      <button onClick={inc1}>Increase</button>
    </>
  );
}
export default UseEffect1;
