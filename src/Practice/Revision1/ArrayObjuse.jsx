import React from "react";
// First import then use
import data from "./ArrayObj.jsx";
function ArrayObjuse() {
  return (
    <>
      {/* use data from another file */}
      <h1>{data[0].name}</h1>
    </>
  );
}
export default ArrayObjuse;
