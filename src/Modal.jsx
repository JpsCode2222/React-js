import React, { useEffect } from "react";
import "./Modal.css";
export default function Modal() {
  function modal() {
    document.getElementById("outer").style.display = "block";
    document.getElementById("box").style.display = "block";
  }
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("outer").style.display = "none";
      document.getElementById("box").style.display = "none";
    }, 3000);
  });
  return (
    <>
      <div className="outer" id="outer">
        <center className="">
          <div className="box" id="box">
            <img src="./port2/ui.jpg" className="w-100" alt="" />
          </div>
        </center>
      </div>
      <div className="container bgimg pt-5">
        <div className="row">
          <div className="col-12 text-center text-primary">
            <h1>Gallary</h1>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body p-0">
                <img src="./port2/ui.jpg" className="w-100" alt="" />
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary" onClick={modal}>
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body p-0">
                <img src="./port2/ui.jpg" className="w-100" alt="" />
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary" onClick={modal}>
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body p-0">
                <img src="./port2/ui.jpg" className="w-100" alt="" />
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary" onClick={modal}>
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
