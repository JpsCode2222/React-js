import React from "react";
import { useMemo } from "react";
import { useState } from "react";
function UseMemo1() {
  var [count, setCount] = useState(0);
  var [count1, setCount1] = useState(0);
  //   fun call always
  function fun1(num) {
    console.log("CALL");
    return num;
  }
  //   normal fun auto call off
  var finalval = useMemo(() => {
    console.log("usememo");
    return fun1(count);
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc Count</button>
      <h1>{count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Inc Count1</button>
      <h1>{finalval}</h1>
    </>
  );
}
export default UseMemo1;
