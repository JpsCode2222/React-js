import React from "react";
import Nav from "./Nav.jsx";
import "./App.css";
import SideMenu from "./SideMenu.jsx";
import About from "./About.jsx";
function App() {
  return (
    <>
      <Nav></Nav>
      <div className="container-fluid blackbg">
        <div className="row pl-4">
          <SideMenu></SideMenu>
          <About></About>
        </div>
      </div>
    </>
  );
}
export default App;
