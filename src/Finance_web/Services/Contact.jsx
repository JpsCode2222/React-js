import React from "react";
export default function Contact() {
  return (
    <>
      <section className="bgcontact">
        <div className="container-fluid bgcoverblackoncontact">
          <div className="row pl-5">
            <div className="col-lg-6 p-5">
              <p className="h5 text-secondary mt-2">
                <span className="designline"></span>Innovative & cutting-edge
                technology
              </p>
              <p className="h2 text-white mt-4">
                We use latest technologies that are proven and practical
              </p>
              <div className="card bg-transparent border-bottom-white mt-5">
                <div className="row">
                  <div className="col-md-2 text-center">
                    <i className="far fa-map text-white h1 mt-3"></i>
                  </div>
                  <div className="col-md-10">
                    <p className="text-white h4">Our Locations</p>
                    <p className="text-white">
                      110 W 34th St, NYC. / 67 Madison Avenue.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card bg-transparent border-bottom-white mt-5">
                <div className="row">
                  <div className="col-md-2 text-center">
                    <i className="far fa-inbox text-white h1 mt-3"></i>
                  </div>
                  <div className="col-md-10">
                    <p className="text-white h4">Give Us A Call</p>
                    <p className="text-white">
                      (+1) 012-345-6789 / (+1) 012-345-6789
                    </p>
                  </div>
                </div>
              </div>
              <div className="card bg-transparent border-bottom-white mt-5">
                <div className="row">
                  <div className="col-md-2 text-center">
                    <i className="far fa-cube text-white h1 mt-3"></i>
                  </div>
                  <div className="col-md-10">
                    <p className="text-white h4">Help Desk</p>
                    <p className="text-white">
                      demo@yourmail.com , demo@yourmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mr-5 bg-light pt-5 pb-5 mt-5">
                <div className="card-body text-center ">
                  <p className="h2">Let’s talk about your project</p>
                  <p className="mt-3">
                    We have made it easy for clients to reach <br /> us and get
                    their solutions weaved
                  </p>
                  <div className="row d-flex justify-content-center align-item-center">
                    <div className="col-md-7">
                      <input
                        type="text"
                        placeholder=" Your Name"
                        className="form-control mt-4 bg-light"
                      />
                      <input
                        type="text"
                        placeholder=" Eamil"
                        className="form-control mt-4 bg-light"
                      />
                      <textarea
                        type="text"
                        placeholder=" Message"
                        className="form-control mt-4 bg-light"
                      ></textarea>
                      <button className="btn btn-primary btn-lg mt-4">
                        Get Free Consultation
                      </button>
                    </div>
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
