import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex nav">
            <div className="logo">
              <img src="./finance/logo.png" className="w-100" alt="" />
            </div>
            <div className="list d-lg-block d-none">
              <ul className="d-flex text-light">
                <li>
                  <NavLink className="text-white" to="/">
                    {" "}
                    Homepage <i className="far fa-arrow-down"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white" to="/about">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white" to="/service">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white" to="/work">
                    Work <i className="far fa-arrow-down"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white" to="/blogs">
                    {" "}
                    Blog <i className="far fa-arrow-down"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white" to="/contact">
                    Contact us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white" to="/search">
                    <i className="far fa-search"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="button">
              <button className="btn btn-lg btn-light text-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
