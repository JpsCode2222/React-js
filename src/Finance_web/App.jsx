import React from "react";
import Nav from "./Nav.jsx";
import "./script.js";
import "./index.css";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Service from "./Services/Service.jsx";
import Work from "./Work/Work.jsx";
import Blog from "./Blog/Blog.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact.jsx";
export default function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/service" element={<Service></Service>}></Route>
          <Route path="/work" element={<Work></Work>}></Route>
          <Route path="/blogs" element={<Blog></Blog>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </>
  );
}
