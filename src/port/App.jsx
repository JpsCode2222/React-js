import React from "react";
import "./App.css";
import Nav from "./Nav.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Footer from "./Footer.jsx";
import Front from "./Front.jsx";
import Project from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import Blogs from "./Blogs.jsx";
import Pricing from "./Pricing.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Front></Front>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/projects" element={<Project></Project>}></Route>
          <Route path="/skills" element={<Skills></Skills>}></Route>
          <Route path="/pricing" element={<Pricing></Pricing>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}
export default App;
