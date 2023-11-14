import React, { useContext } from "react";
import { Fname, Lname } from "./Abc.jsx";
function C(props) {
  var fname1 = useContext(Fname);
  var lname1 = useContext(Lname);
  return (
    <>
      <h1>C</h1>
      <h1>{props.name}</h1>
      <h1>
        Welcome {fname1} {lname1}
      </h1>
    </>
  );
}
export default C;
