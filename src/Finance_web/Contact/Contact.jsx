import React from "react";
import BannerFirst from "../Services/BannerFirst";
import SecondSec from "./ContactSec.jsx";
import Map from "./Map.jsx";
import Form from "./Form.jsx";
import Footer from "../Home/Footer.jsx";
export default function Contact() {
  return (
    <>
      <BannerFirst
        bgimg="bgbannercontact.jpg"
        head="We are an agency located in New York"
        subhead="Contact US"
      ></BannerFirst>
      <SecondSec></SecondSec>
      <Map></Map>
      <Form></Form>
      <Footer></Footer>
    </>
  );
}
