import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink class="navbar-brand" to="#">
                Navbar
              </NavLink>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <NavLink class="nav-link" to="/">
                      Home <span class="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink class="nav-link" to="About">
                      About
                    </NavLink>
                  </li>
                  <li class="nav-item dropdown">
                    <NavLink
                      class="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </NavLink>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <NavLink class="dropdown-item" to="#">
                        Action
                      </NavLink>
                      <NavLink class="dropdown-item" to="#">
                        Another action
                      </NavLink>
                      <div class="dropdown-divider"></div>
                      <NavLink class="dropdown-item" to="#">
                        Something else here
                      </NavLink>
                    </div>
                  </li>
                  <li class="nav-item">
                    <NavLink class="nav-link disabled" to="#">
                      Disabled
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
