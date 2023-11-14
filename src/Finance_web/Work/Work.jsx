import React from "react";
import WorkBanner from "./WorkBanner";
import WorkCards from "./WorkCards.jsx";
import ThirdSec from "./ThirdSec.jsx";
import Slider from "./Slider.jsx";
import WorkFour from "./WorkFour.jsx";
import Footer from "../Home/Footer.jsx";
export default function Work() {
  return (
    <>
      <WorkBanner></WorkBanner>
      <WorkCards></WorkCards>
      <ThirdSec></ThirdSec>
      <WorkFour></WorkFour>
      <Slider></Slider>
      <Footer></Footer>
    </>
  );
}
