import React from "react";
export default function Form() {
  return (
    <>
      <section className="bgcontactcolor">
        <div className="container pt-5 pb-5 text-center">
          <p className="h1 mt-3 mb-3">Let’s talk about your project</p>
          <p className="text-secondary">
            We have made it easy for clients to reach us and get <br /> their
            solutions weaved
          </p>
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-6 mt-3">
                  <input
                    type="text"
                    placeholder=" Your Name*"
                    className="form-control border-0 bg-light"
                  />
                </div>
                <div className="col-md-6 mt-3">
                  <input
                    type="text"
                    placeholder=" Your Email*"
                    className="form-control border-0 bg-light"
                  />
                </div>
                <div className="col-md-12 mt-5">
                  <input
                    type="text"
                    placeholder=" Subject*"
                    className="form-control border-0 bg-light"
                  />
                </div>
                <div className="col-md-12 mt-5">
                  <textarea
                    type="text"
                    placeholder=" Message*"
                    rows={6}
                    className="form-control border-0 bg-light"
                  ></textarea>
                </div>
                <div className="col-md-12 mt-5 text-center">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
