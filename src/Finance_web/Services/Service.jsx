import React from "react";
import BannerFirst from "./BannerFirst.jsx";
import ServiceSec from "./ServiceSec.jsx";
import Contact from "./Contact.jsx";
import Footer from "../Home/Footer.jsx";
export default function Service() {
  return (
    <>
      <BannerFirst
        bgimg="bgservicebanner.jpg"
        head="We work with bold brands that we believe in"
        subhead="Services"
      ></BannerFirst>
      <ServiceSec></ServiceSec>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
