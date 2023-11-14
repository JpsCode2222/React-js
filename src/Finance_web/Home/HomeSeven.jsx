import React from "react";
export default function HomeSeven() {
  return (
    <>
      <div className="container mt-5 mb-5 pt-5 pb-5">
        <div className="row">
          <div className="col-12 text-center">
            <p className="homefifthh1">We are a full-service creative agency</p>
            <p className="homefifthh2 mt-2">
              Our team of designers, developers and creatives are perfectionists{" "}
              <br />
              who love what they do and love
            </p>
          </div>
          <div className="col-md-4 mt-5 mb-5">
            <div className="card shadow cardinfoupani">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3 pt-5 text-center">
                    <i className="far fa-map-location h2 text-primary"></i>
                  </div>
                  <div className="col-md-9 pt-5 pb-5">
                    <p className="h4"> Our Locations</p>
                    <p>110 W 34th St, NYC. 67 Madison Avenue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5 mb-5">
            <div className="card shadow cardinfoupani">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3 pt-5 text-center">
                    <i className="far fa-phone h2 text-primary"></i>
                  </div>
                  <div className="col-md-9 pt-5 pb-5">
                    <p className="h4"> Give Us A Call</p>
                    <p>
                      (+1) 012-345-6789 <br />
                      (+1) 012-345-6789
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5 mb-5">
            <div className="card shadow cardinfoupani">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3 pt-5 text-center">
                    <i className="far fa-inbox h2 text-primary"></i>
                  </div>
                  <div className="col-md-9 pt-5 pb-5">
                    <p className="h4"> Help Desk</p>
                    <p>
                      demo@yourmail.com <br />
                      demo@yourmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
