import React from "react";
import "./Pricing.css";
function Pricing() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-primary text-center mt-5 mb-2 pt-4 pb-2">
              Pricing
            </h3>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card p-2">
              <div className="card-body text-center ">
                <h6 className="text-primary font-weight-bold text-center">
                  BASIC PLAN
                </h6>
                <div className="text-primary text-center">
                  <i className="fa fa-dollar h3"></i>
                  <span id="price">49K</span>
                </div>
                <p className="mt-4 text-secondary">
                  Far far away, behind the <br /> word mountains, far from{" "}
                  <br /> the countries Vokalia <br /> and Consonantia, there
                  live <br /> the blind texts.
                </p>
                <button className="btn btn-primary mt-4">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card p-2">
              <div className="card-body text-center ">
                <h6 className="text-primary font-weight-bold text-center">
                  BEGINNER PLAN
                </h6>
                <div className="text-primary text-center">
                  <i className="fa fa-dollar h3"></i>
                  <span id="price">79K</span>
                </div>
                <p className="mt-4 text-secondary">
                  Far far away, behind the <br /> word mountains, far from{" "}
                  <br /> the countries Vokalia <br /> and Consonantia, there
                  live <br /> the blind texts.
                </p>
                <button className="btn btn-primary mt-4">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card p-2">
              <div className="card-body text-center ">
                <h6 className="text-primary font-weight-bold text-center">
                  PRIMIUM PLAN
                </h6>
                <div className="text-primary text-center">
                  <i className="fa fa-dollar h3"></i>
                  <span id="price">99K</span>
                </div>
                <p className="mt-4 text-secondary">
                  Far far away, behind the <br /> word mountains, far from{" "}
                  <br /> the countries Vokalia <br /> and Consonantia, there
                  live <br /> the blind texts.
                </p>
                <button className="btn btn-primary mt-4">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Pricing;
