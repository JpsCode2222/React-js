import React, { useState } from "react";
export default function UseStateDemo() {
  var [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="container pt-5">
        <div className="row justify-content-center pt-5 mt-5">
          <div className="co-md-5 p-5 m-5">
            <div className="card shadow">
              <div className="card-body pb-4">
                <h3 className="text-primary text-center mb-3">useState Hook</h3>
                <button className="btn btn-success" onClick={inc}>
                  Increament <i className="fa fa-plus"></i>
                </button>
                <span className="h5 p-3">{count}</span>
                <button className="btn btn-danger" onClick={dec}>
                  Decreament <i className="fa fa-minus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
