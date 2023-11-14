import React from "react";
import BannerFirst from "../Services/BannerFirst";
import Cards from "./Cards.jsx";
import NextBanner from "./NextBanner.jsx";
import Footer from "../Home/Footer.jsx";
export default function Blog() {
  return (
    <>
      <BannerFirst
        bgimg="bgbannerblog.jpg"
        head="Find all our latest news, insights, and events"
        subhead="Blog"
      ></BannerFirst>
      <Cards></Cards>
      <NextBanner></NextBanner>
      <Footer></Footer>
    </>
  );
}
