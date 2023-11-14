import React from "react";
import ServiceDesing from "./ServiceDesign";
import HomeThird from "../Home/HomeThird.jsx";
export default function ServiceSec() {
  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-12">
            <p className="text-center h2 mb-4">
              Services that create identities, build brands, and get results
            </p>
            <p className="text-center">
              We produce beautifully crafted creative solutions that <br />{" "}
              transcend business goals. We provide the exceptional <br />{" "}
              service we’d want to experience ourselves
            </p>
          </div>
          <ServiceDesing></ServiceDesing>
          <ServiceDesing></ServiceDesing>
          <ServiceDesing></ServiceDesing>
          <ServiceDesing></ServiceDesing>
          <ServiceDesing></ServiceDesing>
          <ServiceDesing></ServiceDesing>
          <HomeThird></HomeThird>
        </div>
      </div>
    </>
  );
}
