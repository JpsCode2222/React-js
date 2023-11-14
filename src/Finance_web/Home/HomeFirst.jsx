import React from "react";
export default function HomeFirst() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center homefirstdiv">
            <span className="headinghomefirst">
              We are a full-service creative agency
            </span>
            <p className="parahomefirst text-secondary mt-2">
              Our team of designers, developers and creatives are br
              perfectionists <br />
              who love what they do and love
            </p>
          </div>
          <div className="col-6">
            <img
              src="./finance/home1.jpg"
              className="homefirstimg1 homefirstimg"
              alt=""
            />
            <img
              src="./finance/home2.jpg"
              className="homefirstimg2 homefirstimg"
              alt=""
            />
          </div>
          <div className="col-6 homefistsecsec">
            <span className="designline"></span>
            <span className="homefirstheading">
              {" "}
              Every day brings new challenges
            </span>
            <p className="homefirsttitle">
              Creative agency focused on vision, product and people
            </p>
            <p className="homefirstpara">
              We’re boldly individual, always original and refreshingly
              easy-going. Our vision, passion and ideas are matched with focus,
              expertise and flair.
            </p>
            <button className="btn btn-primary btn-lg mt-5">ABOUT US</button>
          </div>
        </div>
      </div>
    </>
  );
}
