import React from "react";
export default function AboutForth() {
  return (
    <>
      <div className="container pb-5 pt-5 mt-5 mb-5">
        <div className="row pb-5">
          <div className="col-md-6">
            <img
              src="./finance/about3.jpg"
              className="w-50 bgaboutimg1 bgaboutimgforth"
              alt=""
            />
            <img
              src="./finance/about4.jpg"
              className="w-50 bgaboutimg2 bgaboutimgforth"
              alt=""
            />
          </div>
          <div className="col-md-6 pl-5">
            <div className="pl-5">
              <span className="designline"></span>
              <p className="headingabotfor">
                Our solutions begin with brand research
              </p>
              <p className="headingbaoutsec mt-5">
                We’ve worked alongside plenty of brands & startups
              </p>
              <p className="mt-4">
                Our team of designers and developers are perfectionists who love
                what they do – we thrive off pushing the boundaries of our
                clients’ expectations and our own capabilities.
              </p>
              <button className="btn btn-primary btn-lg mt-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
