import React from "react";
export default function HomeThird() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src="./finance/home5.jpg"
              className="homefirstimg1 homefirstimg"
              alt=""
            />
            <img
              src="./finance/home4.jpg"
              className="homefirstimg2 homefirstimg"
              alt=""
            />
          </div>
          <div className="col-6 homefistsecsec">
            <span className="designline"></span>
            <span className="homefirstheading">
              {" "}
              Your success is our success
            </span>
            <p className="homefirsttitle">
              Web design, marketing & SEO solutions that get results
            </p>
            <div>
              UX Designer
              <div class="progress mb-3">
                <div
                  class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              Marketing
              <div class="progress mb-3">
                <div
                  class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              Web Design
              <div class="progress mb-3">
                <div
                  class="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              Development
              <div class="progress mb-3">
                <div
                  class="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
