import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center navbgcolor">
          <div className="col-md-10 p-0">
            <nav className="navbar navbar-expand-lg navbar-light">
              <span className="navbar-brand mr-5 ml-4" id="logo">
                PortFolio...
              </span>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse text-center"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav ml-5 pl-5">
                  <NavLink className="nav-item nav-link mr-4 active" to="/">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                  <NavLink className="nav-item nav-link mr-4" to="/about">
                    About
                  </NavLink>
                  <NavLink className="nav-item nav-link mr-4" to="/services">
                    Services
                  </NavLink>
                  <NavLink className="nav-item nav-link mr-4" to="/projects">
                    Projects
                  </NavLink>
                  <NavLink className="nav-item nav-link mr-4" to="/skills">
                    Skills
                  </NavLink>
                  <NavLink className="nav-item nav-link mr-4" to="/pricing">
                    Pricing
                  </NavLink>
                  <NavLink className="nav-item nav-link mr-4" to="/blogs">
                    Blog
                  </NavLink>
                  <NavLink className="nav-item nav-link mr-4" to="/contact">
                    Contact
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
