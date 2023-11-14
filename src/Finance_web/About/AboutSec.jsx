import React from "react";
export default function AboutSec() {
  return (
    <>
      <div className="container mt-5 pt-5 pb-5 mb-5">
        <div className="row mb-5">
          <div className="col-md-6 mt-5">
            <span className="designline"></span>{" "}
            <span className="aboutlineheade font-weight-light text-secondary h5 pt-5">
              Web design and digital marketing
            </span>
            <br />
            <br />
            <p className="aboutsecfontsize">
              We think strategy, UX design, and web development
            </p>
            <div className="row mt-3">
              <div className="col-md-6">
                <p className="h1 text-primary">110+</p>
                <p className="h5 mt-3">Happy Clients</p>
                <p className="mt-3">
                  We help our clients increase profits by increasing their
                  visibility online.
                </p>
              </div>
              <div className="col-md-6">
                <p className="h1 text-primary">130+</p>
                <p className="h5 mt-3">Projects Completed</p>
                <p className="mt-3">
                  We help our clients increase profits by increasing their
                  visibility online.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="./finance/about2.jpg"
              className="w-75 positonaboutimg"
              alt=""
            />
            <img
              src="./finance/about1.jpg"
              className="w-75 positonaboutimg aboutimgbg1"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
