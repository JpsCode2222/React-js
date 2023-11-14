import React from "react";
export default function Slider() {
  return (
    <>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src="./finance/slider1.jpg"
              className="w-100 h-100 slider_img"
              alt="Los Angeles"
              width="1100"
              height="600"
            />
            <div className="captiontext">
              <span className="designtext">
                Design Awesome <br />
                brands and Exprerices
              </span>
              <p className="designpara">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                esse nihil autem maiores in rem quas delectus vitae dignissimos
                enim? Culpa magnam placeat voluptatibus temporibus molestiae
                reiciendis ipsam! Natus, ducimus.
              </p>
              <div>
                <button className="btn btn-primary btn-lg">GET STARTED</button>
                <button className="btn btn-light btn-lg ml-3">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./finance/slider2.jpg"
              className="w-100 h-100 slider_img"
              alt="Los Angeles"
              width="1100"
              height="600"
            />
            <div className="captiontext">
              <span className="designtext">
                Design Awesome <br />
                brands and Exprerices
              </span>
              <p className="designpara">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                esse nihil autem maiores in rem quas delectus vitae dignissimos
                enim? Culpa magnam placeat voluptatibus temporibus molestiae
                reiciendis ipsam! Natus, ducimus.
              </p>
              <div>
                <button className="btn btn-primary btn-lg">GET STARTED</button>
                <button className="btn btn-light btn-lg ml-3">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./finance/slider3.jpg"
              className="w-100 h-100 slider_img"
              alt="Los Angeles"
              width="1100"
              height="600"
            />
            <div className="captiontext">
              <span className="designtext">
                Design Awesome <br />
                brands and Exprerices
              </span>
              <p className="designpara">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                esse nihil autem maiores in rem quas delectus vitae dignissimos
                enim? Culpa magnam placeat voluptatibus temporibus molestiae
                reiciendis ipsam! Natus, ducimus.
              </p>
              <div>
                <button className="btn btn-primary btn-lg">GET STARTED</button>
                <button className="btn btn-light btn-lg ml-3">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </>
  );
}
