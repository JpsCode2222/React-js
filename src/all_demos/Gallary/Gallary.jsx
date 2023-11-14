import React from "react";
function Gallary(props) {
  return (
    <>
      <div className="col-sm-3">
        <div className="card mt-4">
          <div className="cardbody">
            <img
              src={props.img}
              style={{ height: "250px" }}
              className="w-100 rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Gallary;
