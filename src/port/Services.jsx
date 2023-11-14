import React from "react";
import "./Services.css";
function Services() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5 className="text-center text-primary mt-3 mb-3">Services</h5>
            <h2 className="text-center text-bolder mb-4">
              This is My Expertise, The <br /> Services I'll Provide My Clients
            </h2>
          </div>
          <div className="col-4 mt-4">
            <div className="card  border-0">
              <div className="card-body p-0">
                <img src="./port2/ui.jpg" className="w-100 cardimg" alt="" />
              </div>
              <div className="card-footer bg-transparent">
                <h4 className="text-primary">UI & UX Design</h4>
                <p className="text-secondary">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="btn btn-primary">View more...</button>
              </div>
            </div>
          </div>
          <div className="col-4 mt-4">
            <div className="card  border-0">
              <div className="card-body p-0">
                <img
                  src="./port2/graphics.jpg"
                  className="w-100 cardimg"
                  alt=""
                />
              </div>
              <div className="card-footer bg-transparent">
                <h4 className="text-primary">Graphics Design</h4>
                <p className="text-secondary">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="btn btn-primary">View more...</button>
              </div>
            </div>
          </div>
          <div className="col-4 mt-4">
            <div className="card  border-0">
              <div className="card-body p-0">
                <img
                  src="./port2/webdev.png"
                  className="w-100 cardimg"
                  alt=""
                />
              </div>
              <div className="card-footer bg-transparent">
                <h4 className="text-primary">Web Developement</h4>
                <p className="text-secondary">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="btn btn-primary">View more...</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bgcounter">
        <div className="bgblack">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="row">
                  <div className="col-3">
                    <i className="fa fa-user icons"></i>
                  </div>
                  <div className="col-9 text-light">
                    <h1 className="mt-5 pt-2 ">300+</h1>
                    <span>Happy Customers</span>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-3">
                    <i className="fa fa-folder icons"></i>
                  </div>
                  <div className="col-9 text-light">
                    <h1 className="mt-5 pt-2 ">300+</h1>
                    <span>Project Completed</span>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-3">
                    <i className="fa fa-mug-tea icons"></i>
                  </div>
                  <div className="col-9 text-light">
                    <h1 className="mt-5 pt-2 ">300+</h1>
                    <span>Cup of Cofee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
