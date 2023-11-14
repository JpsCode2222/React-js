import React from "react";
import data from "./Data.jsx";
import Gallary from "./Gallary.jsx";
function Map() {
  return (
    <>
      <h2 className="text-primary text-center mt-5">
        <u>GALLARY</u>
      </h2>
      <div className="container">
        <div className="row">
          {data.map((val, ind) => {
            return (
              <>
                <Gallary img={val.img}></Gallary>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Map;
