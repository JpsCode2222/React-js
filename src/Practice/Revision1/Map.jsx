import React from "react";
import data from "./ArrayObj.jsx";
function Map() {
  return (
    <>
      {data.map((val, ind) => {
        return (
          <>
            <h1>{val.name}</h1>
            <h1>{val.age}</h1>
            <h1>{val.class}</h1>
          </>
        );
      })}
    </>
  );
}
export default Map;
