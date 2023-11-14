import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <>
      <div className="container-fluid backnav">
        <div className="row">
          <div className="col-12 d-flex navpannel p-3">
            <div className="d-flex mt-2 ml-4">
              <div className="logo"></div>
              <div className="logo"></div>
            </div>
            <div>
              <button className="btn btn-sm btn-success mr-4 pl-2 pr-2 rounded">
                Contact me <i className="fa-regular fa-user"></i>
              </button>
              <i className="fa fa-bars d-md-none text-light mr-3"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
